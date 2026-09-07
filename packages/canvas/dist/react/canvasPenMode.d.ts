export interface CanvasPointerDeviceInput {
    readonly pointerType: string;
}
export declare function isPenPointer(input: CanvasPointerDeviceInput): boolean;
export declare function hasDirectTouchInput(): boolean;
export declare function shouldEnterPenMode(input: CanvasPointerDeviceInput, directTouchInput: boolean): boolean;
export declare function pointerAllowedInPenMode(penMode: boolean, input: CanvasPointerDeviceInput): boolean;
//# sourceMappingURL=canvasPenMode.d.ts.map