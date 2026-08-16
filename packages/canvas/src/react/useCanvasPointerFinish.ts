import { useEffect } from 'react';
import type { CanvasShape } from './InfiniteCanvas';
import type { PointerLifecycleOptions } from './canvasPointerLifecycleTypes';
import { centreOf, rawBounds } from './canvasGeometry';
import { DOUBLE_CLICK_DRIFT_PX } from './canvasPointerTypes';

type PointerFinishOptions = Pick<PointerLifecycleOptions,
  | 'pointers'
  | 'interactionRef'
  | 'cameraRef'
  | 'toPage'
  | 'shapesRef'
  | 'setShapes'
  | 'setEditingId'
  | 'setEraserPos'
  | 'setGuides'
  | 'setAnnouncement'
  | 'applyInteraction'
  | 'selectNow'
  | 'endHistory'
  | 'commit'
  | 'onToolChange'
  | 'createId'
> & Required<Pick<PointerLifecycleOptions, 'pendingDrawPointsRef' | 'drawRafRef' | 'rawDrawPointerIdsRef'>>;

/** Binds pointer completion/cancellation and commits the completed gesture. */
export function useCanvasPointerFinish({
  pointers,
  interactionRef,
  cameraRef,
  toPage,
  shapesRef,
  setShapes,
  setEditingId,
  setEraserPos,
  setGuides,
  setAnnouncement,
  applyInteraction,
  selectNow,
  endHistory,
  commit,
  onToolChange,
  createId,
  pendingDrawPointsRef,
  drawRafRef,
  rawDrawPointerIdsRef,
}: PointerFinishOptions): void {
  const uid = createId;
  useEffect(() => {
    const finish = (e: PointerEvent) => {
      pointers.current.delete(e.pointerId);
      rawDrawPointerIdsRef.current.delete(e.pointerId);
      // Release pointer capture so the element doesn't keep exclusive capture.
      try { (e.target as HTMLElement)?.releasePointerCapture?.(e.pointerId); } catch { /* noop */ }
      const interaction = interactionRef.current;
      if (interaction.kind === 'none') return;

      // Lifting one finger of a pinch shouldn't resume a drag with the other.
      if (interaction.kind === 'pinch') {
        if (pointers.current.size < 2) applyInteraction({ kind: 'none' });
        return;
      }

      setGuides([]);

      if (interaction.kind === 'erasing') {
        setEraserPos(null);
        endHistory();
        applyInteraction({ kind: 'none' });
        return;
      }

      if (interaction.kind === 'connect') {
        const all = shapesRef.current;
        const source = all.find(s => s.id === interaction.fromId);
        applyInteraction({ kind: 'none' });
        if (!source) return;

        const dropped = { x: interaction.toX, y: interaction.toY };
        const sc = centreOf(source);
        // A tap on the handle without a drag shouldn't silently do nothing.
        if (!interaction.hoverId && Math.hypot(dropped.x - sc.x, dropped.y - sc.y) < 30) return;

        const additions: CanvasShape[] = [];
        let targetId = interaction.hoverId;

        if (!targetId) {
          // Dropped on empty canvas: make a sibling node there and connect it.
          const w = source.type === 'note' ? 180 : 200;
          const h = source.type === 'note' ? 180 : 120;
          const created: CanvasShape = {
            ...source,
            id: uid(),
            x: dropped.x - w / 2,
            y: dropped.y - h / 2,
            w,
            h,
            html: undefined,
            text: '',
            rotation: 0,
            groupId: undefined,
            points: undefined,
            fromId: undefined,
            toId: undefined,
            bend: undefined,
          };
          additions.push(created);
          targetId = created.id;
        }

        const arrow: CanvasShape = {
          id: uid(),
          type: 'arrow',
          x: 0, y: 0, w: 0, h: 0,
          fromId: source.id,
          toId: targetId,
          text: '',
        };
        additions.push(arrow);
        commit(prev => [...prev, ...additions]);
        selectNow(new Set([arrow.id]));
        // Drop straight into the relation label so it can be named right away.
        // Controlled/Yjs hosts publish the new shapes on the next render. Delay
        // the editor request until that render has a real arrow to anchor to;
        // otherwise the transient `editingId` can be cleared before the label
        // editor mounts and the newly-created connector looks non-editable.
        if (typeof requestAnimationFrame === 'function') requestAnimationFrame(() => setEditingId(arrow.id));
        else setEditingId(arrow.id);
        setAnnouncement('연결 생성됨');
        return;
      }

      if (interaction.kind === 'bend') {
        endHistory();
        applyInteraction({ kind: 'none' });
        return;
      }

      if (interaction.kind === 'drawing') {
        // Flush any pending draw points that haven't been rAF-processed yet,
        // so the final stroke segment isn't lost.
        if (drawRafRef.current !== null) {
          cancelAnimationFrame(drawRafRef.current);
          drawRafRef.current = null;
        }
        // pointerup is also a sample. On fast strokes the last pointermove can
        // be older than the release position, so include the final coordinate
        // before committing the stroke.
        const finalPoint = toPage(e.clientX, e.clientY);
        pendingDrawPointsRef.current.push([finalPoint.x, finalPoint.y]);
        const pending = pendingDrawPointsRef.current.splice(0);
        // Collapse the stroke's bbox so hit-testing and marquee select work.
        setShapes(prev => prev.map(s => {
          if (s.id !== interaction.id || !s.points) return s;
          const points = [...s.points];
          let last = points[points.length - 1];
          for (const point of pending) {
            if (!last || Math.hypot(point[0] - last[0], point[1] - last[1]) >= 1 / cameraRef.current.z) {
              points.push(point);
              last = point;
            }
          }
          const xs = points.map(pt => pt[0]);
          const ys = points.map(pt => pt[1]);
          const minX = Math.min(...xs), minY = Math.min(...ys);
          return { ...s, points, x: minX, y: minY, w: Math.max(...xs) - minX, h: Math.max(...ys) - minY };
        }));
        endHistory();
        // Keep the pen active so consecutive strokes can be drawn without
        // reselecting the tool. The user can switch tools explicitly.
        applyInteraction({ kind: 'none' });
        return;
      }

      if (interaction.kind === 'creating') {
        setShapes(prev => prev.map(s => {
          if (s.id !== interaction.id) return s;
          // A click without a drag would leave a zero-size shape behind.
          const sized = Math.abs(s.w) < 4 && Math.abs(s.h) < 4
            ? {
              ...s,
              w: s.type === 'arrow' ? 200 : s.type === 'frame' ? 480 : 180,
              h: s.type === 'arrow' ? 0 : s.type === 'frame' ? 320 : 120,
            }
            : s;
          // A drag that ran up-left leaves negative extents, which every box
          // shape would then render inside-out.
          if (sized.type === 'arrow') return sized;
          const b = rawBounds(sized);
          return { ...sized, x: b.minX, y: b.minY, w: b.maxX - b.minX, h: b.maxY - b.minY };
        }));
        endHistory();
        selectNow(new Set([interaction.id]));
        onToolChange('select');
        applyInteraction({ kind: 'none' });
        return;
      }

      if (interaction.kind === 'move' || interaction.kind === 'resize' || interaction.kind === 'rotate' || interaction.kind === 'orthogonal-segment' || interaction.kind === 'arrow-endpoint') {
        endHistory();
      }
      // Deferred double-click decision: the second press of a quick pair
      // started a normal move gesture so grab-and-drag keeps repositioning
      // the node; opening the editor happens only when that press released
      // where it started.
      if (interaction.kind === 'move' && interaction.editOnReleaseId && e.type === 'pointerup') {
        const release = toPage(e.clientX, e.clientY);
        const driftPx = Math.hypot(release.x - interaction.startX, release.y - interaction.startY) * cameraRef.current.z;
        if (driftPx <= DOUBLE_CLICK_DRIFT_PX) setEditingId(interaction.editOnReleaseId);
      }
      applyInteraction({ kind: 'none' });
    };

    window.addEventListener('pointerup', finish);
    window.addEventListener('pointercancel', finish);
    return () => {
      window.removeEventListener('pointerup', finish);
      window.removeEventListener('pointercancel', finish);
    };
  }, [
    applyInteraction,
    cameraRef,
    commit,
    createId,
    drawRafRef,
    endHistory,
    interactionRef,
    onToolChange,
    pendingDrawPointsRef,
    pointers,
    rawDrawPointerIdsRef,
    selectNow,
    setAnnouncement,
    setEditingId,
    setEraserPos,
    setGuides,
    setShapes,
    shapesRef,
    toPage,
  ]);
}
