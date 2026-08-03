import {
  CanvasValidationError,
  type CanvasAssetUrl,
  type Brand,
  type CanvasSnapshot,
} from '../core/model.ts';
import { validateCanvasAssetUrl } from '../core/security.ts';

export type CanvasBoardId = Brand<string, 'CanvasBoardId'>;
export type CanvasUserId = Brand<string, 'CanvasUserId'>;
export type CanvasAssetId = Brand<string, 'CanvasAssetId'>;

export function createCanvasAssetUrl(value: string): CanvasAssetUrl {
  return validateCanvasAssetUrl(value) as CanvasAssetUrl;
}

export function createCanvasBoardId(value: string): CanvasBoardId {
  return createId(value, 'board');
}

export function createCanvasUserId(value: string): CanvasUserId {
  return createId(value, 'user');
}

export function createCanvasAssetId(value: string): CanvasAssetId {
  return createId(value, 'asset');
}

export type CanvasStorageLoadResult =
  | {
      readonly kind: 'found';
      readonly boardId: CanvasBoardId;
      readonly snapshot: CanvasSnapshot;
      readonly revision: string;
    }
  | {
      readonly kind: 'notFound';
      readonly boardId: CanvasBoardId;
    };

export type CanvasStorageSaveInput = {
  readonly boardId: CanvasBoardId;
  readonly snapshot: CanvasSnapshot;
  readonly expectedRevision?: string;
};

export type CanvasStorageSaveResult = {
  readonly boardId: CanvasBoardId;
  readonly revision: string;
  readonly savedAt: string;
};

export interface CanvasStorageAdapter {
  readonly load: (boardId: CanvasBoardId) => Promise<CanvasStorageLoadResult>;
  readonly save: (input: CanvasStorageSaveInput) => Promise<CanvasStorageSaveResult>;
  readonly remove: (boardId: CanvasBoardId) => Promise<void>;
}

export type CanvasCollaborationStatus =
  | 'disconnected'
  | 'connecting'
  | 'connected'
  | 'reconnecting'
  | 'offline'
  | 'error';

export interface CanvasPresence {
  readonly userId: CanvasUserId;
  readonly displayName: string;
  readonly cursor?: { readonly x: number; readonly y: number };
  readonly selectedShapeIds: readonly string[];
}

export interface CanvasCollaborationSession {
  readonly status: CanvasCollaborationStatus;
  readonly sendUpdate: (update: Uint8Array) => Promise<void>;
  readonly sendPresence: (presence: CanvasPresence) => Promise<void>;
  readonly subscribeUpdate: (listener: (update: Uint8Array) => void) => () => void;
  readonly subscribePresence: (listener: (presence: CanvasPresence) => void) => () => void;
  readonly subscribeStatus: (listener: (status: CanvasCollaborationStatus) => void) => () => void;
  readonly close: () => Promise<void>;
}

export interface CanvasCollaborationAdapter {
  readonly connect: (input: {
    readonly boardId: CanvasBoardId;
    readonly userId: CanvasUserId;
    readonly displayName: string;
  }) => Promise<CanvasCollaborationSession>;
}

export interface CanvasAssetAdapter {
  readonly upload: (input: {
    readonly boardId: CanvasBoardId;
    readonly file: Blob;
    readonly fileName: string;
    readonly mimeType: string;
  }) => Promise<{ readonly assetId: CanvasAssetId; readonly fileName: string; readonly mimeType: string }>;
  readonly resolve: (assetId: CanvasAssetId) => Promise<CanvasAssetUrl>;
  readonly remove: (assetId: CanvasAssetId) => Promise<void>;
}

export interface CanvasCapabilities {
  readonly canView: boolean;
  readonly canEdit: boolean;
  readonly canComment: boolean;
  readonly canShare: boolean;
  readonly canUpload: boolean;
}

export class CanvasRevisionConflictError extends Error {
  readonly code = 'CANVAS_REVISION_CONFLICT' as const;
  readonly boardId: CanvasBoardId;
  readonly currentRevision: string;

  constructor(boardId: CanvasBoardId, currentRevision: string) {
    super('The canvas changed elsewhere. Reload or merge before saving again.');
    this.name = 'CanvasRevisionConflictError';
    this.boardId = boardId;
    this.currentRevision = currentRevision;
  }
}

function createId<Value extends CanvasBoardId | CanvasUserId | CanvasAssetId>(value: string, subject: string): Value {
  if (value.trim().length === 0) {
    throw new CanvasValidationError(`Canvas ${subject} IDs cannot be empty.`);
  }
  return value as Value;
}
