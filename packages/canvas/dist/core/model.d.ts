export type Brand<Value, Name extends string> = Value & {
    readonly __brand: Name;
};
export type CanvasShapeId = Brand<string, 'CanvasShapeId'>;
export type CanvasAssetUrl = Brand<string, 'CanvasAssetUrl'>;
export type CanvasColorKey = 'yellow' | 'pink' | 'purple' | 'blue' | 'green' | 'peach' | 'grey' | 'brand' | 'ink' | 'red';
export type CanvasFontKey = 'sans' | 'serif' | 'mono' | 'gothic' | 'korean' | 'chosunmyjo' | 'hdhyundai' | 'custom';
export type CanvasTextAlign = 'left' | 'center' | 'right';
export type CanvasStrokeWidth = 2 | 4 | 6 | 8;
export type CanvasDrawMode = 'pen' | 'highlighter';
export type OrthogonalVariant = 'elbow' | 'reverse' | 'u' | 'zigzag';
export type CanvasShapeType = 'note' | 'card' | 'text' | 'arrow' | 'draw' | 'image' | 'frame' | 'rect' | 'ellipse' | 'triangle' | 'diamond' | 'hexagon' | 'star';
export type CanvasSimpleShapeType = 'note' | 'card' | 'text' | 'frame' | 'rect' | 'ellipse' | 'triangle' | 'diamond' | 'hexagon' | 'star';
export type CanvasOutlinedShapeType = 'frame' | 'rect' | 'ellipse' | 'triangle' | 'diamond' | 'hexagon' | 'star';
export type CanvasUnoutlinedShapeType = 'note' | 'card' | 'text';
export type CanvasTool = 'select' | 'hand' | 'note' | 'card' | 'text' | 'arrow' | 'draw' | 'eraser' | 'frame' | 'rect' | 'ellipse' | 'triangle' | 'diamond' | 'hexagon' | 'star';
/**
 * Resource limits applied at every untrusted snapshot/collaboration boundary.
 * They are deliberately generous for normal boards while keeping malformed
 * remote data from creating unbounded render or geometry work.
 */
export declare const CANVAS_LIMITS: {
    readonly coordinate: 1000000000;
    readonly cameraZoomMin: 0.05;
    readonly cameraZoomMax: 16;
    readonly fontSizeMin: 1;
    readonly fontSizeMax: 512;
    readonly maxShapes: 10000;
    readonly maxDrawPoints: 50000;
    readonly maxExportDimension: 16384;
    readonly maxExportPixels: number;
    readonly maxHtmlLength: 200000;
    readonly maxHtmlDepth: 256;
    readonly maxTextLength: 100000;
    readonly maxShortStringLength: 512;
};
export declare const SHAPE_TOOLS: readonly CanvasTool[];
export interface CanvasShapeBase {
    readonly id: CanvasShapeId;
    readonly x: number;
    readonly y: number;
    readonly w: number;
    readonly h: number;
    readonly rotation?: number;
    readonly groupId?: string;
    readonly html?: string;
    readonly text?: string;
    readonly color?: CanvasColorKey;
    readonly src?: string;
    readonly fileName?: string;
    readonly category?: string;
    readonly cardStyle?: 'solid' | 'glass';
    readonly fontSize?: number;
    readonly fontFamily?: CanvasFontKey;
    readonly customFontFamily?: string;
    readonly textAlign?: CanvasTextAlign;
    readonly manualSize?: boolean;
    readonly fillColor?: string;
    readonly strokeColor?: string;
    readonly textColor?: string;
    readonly strokeStyle?: 'solid' | 'dashed' | 'dotted';
}
export interface CanvasOutlinedShape extends CanvasShapeBase {
    readonly type: CanvasOutlinedShapeType;
    readonly strokeWidth?: CanvasStrokeWidth;
}
export interface CanvasUnoutlinedShape extends CanvasShapeBase {
    readonly type: CanvasUnoutlinedShapeType;
}
export type CanvasRectShape = CanvasOutlinedShape | CanvasUnoutlinedShape;
export interface CanvasArrowShape extends CanvasShapeBase {
    readonly type: 'arrow';
    readonly strokeWidth?: CanvasStrokeWidth;
    readonly fromId?: CanvasShapeId;
    readonly toId?: CanvasShapeId;
    readonly bend?: number;
    readonly routing?: 'straight' | 'curved' | 'orthogonal';
    readonly orthogonalVariant?: OrthogonalVariant;
    readonly orthogonalWaypoints?: readonly {
        readonly x: number;
        readonly y: number;
    }[];
    readonly arrowStart?: 'none' | 'arrow' | 'dot';
    readonly arrowEnd?: 'none' | 'arrow' | 'dot';
}
export interface CanvasDrawShape extends CanvasShapeBase {
    readonly type: 'draw';
    readonly points: readonly (readonly [number, number])[];
    readonly strokeWidth?: CanvasStrokeWidth;
    readonly drawMode?: CanvasDrawMode;
}
export interface CanvasImageShape extends CanvasShapeBase {
    readonly type: 'image';
}
export type CanvasShape = CanvasRectShape | CanvasArrowShape | CanvasDrawShape | CanvasImageShape;
export interface CanvasCamera {
    readonly x: number;
    readonly y: number;
    readonly z: number;
}
export interface CanvasSnapshot {
    readonly version: 'canvas-v1';
    readonly shapes: readonly CanvasShape[];
    readonly camera: CanvasCamera;
}
export interface CanvasDocument {
    readonly id: string;
    readonly version: 1;
    readonly shapes: readonly CanvasShape[];
}
export interface CanvasSelectionInfo {
    readonly count: number;
    readonly canGroup: boolean;
    readonly canUngroup: boolean;
    readonly isTextual: boolean;
}
export declare const CANVAS_FONTS: {
    readonly sans: {
        readonly label: "고딕";
        readonly stack: "ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Noto Sans KR\", \"Apple SD Gothic Neo\", \"Malgun Gothic\", sans-serif";
    };
    readonly serif: {
        readonly label: "명조";
        readonly stack: "ui-serif, \"AppleMyungjo\", \"Noto Serif KR\", \"Noto Serif\", \"Batang\", \"Times New Roman\", serif";
    };
    readonly mono: {
        readonly label: "모노";
        readonly stack: "ui-monospace, \"SFMono-Regular\", \"JetBrains Mono\", \"D2Coding\", \"Consolas\", \"Courier New\", monospace";
    };
    readonly gothic: {
        readonly label: "Gothic";
        readonly stack: "\"Apple SD Gothic Neo\", \"Malgun Gothic\", \"Noto Sans KR\", \"Pretendard\", \"Nanum Gothic\", \"Gulim\", ui-sans-serif, sans-serif";
    };
    readonly korean: {
        readonly label: "Korean";
        readonly stack: "\"AppleMyungjo\", \"Noto Serif KR\", \"Noto Serif\", \"Batang\", \"Gungsuh\", \"GungsuhChe\", ui-serif, serif";
    };
    readonly chosunmyjo: {
        readonly label: "조선일보명조";
        readonly stack: "\"조선일보명조\", \"AppleMyungjo\", \"Noto Serif KR\", \"Noto Serif\", \"NanumMyeongjo\", ui-serif, serif";
    };
    readonly hdhyundai: {
        readonly label: "HD현대체";
        readonly stack: "\"HD현대체\", \"Apple SD Gothic Neo\", \"Malgun Gothic\", \"Noto Sans KR\", ui-sans-serif, sans-serif";
    };
    readonly custom: {
        readonly label: "직접입력";
        readonly stack: "sans-serif";
    };
};
export declare const CANVAS_COLORS: {
    readonly yellow: {
        readonly bg: "#fef08a";
        readonly border: "#facc15";
        readonly text: "#854d0e";
        readonly label: "노랑";
    };
    readonly pink: {
        readonly bg: "#fbcfe8";
        readonly border: "#f472b6";
        readonly text: "#9d174d";
        readonly label: "분홍";
    };
    readonly purple: {
        readonly bg: "#e9d5ff";
        readonly border: "#c084fc";
        readonly text: "#6b21a8";
        readonly label: "보라";
    };
    readonly blue: {
        readonly bg: "#bae6fd";
        readonly border: "#38bdf8";
        readonly text: "#0369a1";
        readonly label: "하늘";
    };
    readonly green: {
        readonly bg: "#bbf7d0";
        readonly border: "#4ade80";
        readonly text: "#15803d";
        readonly label: "연두";
    };
    readonly peach: {
        readonly bg: "#fed7aa";
        readonly border: "#fb923c";
        readonly text: "#9a3412";
        readonly label: "살구";
    };
    readonly grey: {
        readonly bg: "#e2e8f0";
        readonly border: "#94a3b8";
        readonly text: "#334155";
        readonly label: "회색";
    };
    readonly brand: {
        readonly bg: "#e6f0ff";
        readonly border: "#003087";
        readonly text: "#003087";
        readonly label: "브랜드";
    };
    readonly red: {
        readonly bg: "#fecaca";
        readonly border: "#ef4444";
        readonly text: "#991b1b";
        readonly label: "빨강";
    };
    readonly ink: {
        readonly bg: "#1e293b";
        readonly border: "#0f172a";
        readonly text: "#f8fafc";
        readonly label: "먹";
    };
};
export declare const CANVAS_COLOR_KEYS: readonly CanvasColorKey[];
export declare function createCanvasShapeId(value?: string): CanvasShapeId;
export declare class CanvasValidationError extends Error {
    readonly code: "CANVAS_VALIDATION_ERROR";
    constructor(message: string);
}
//# sourceMappingURL=model.d.ts.map