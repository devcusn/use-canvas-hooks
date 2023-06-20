import { create } from "zustand";

export const useCanvasStore = create<{
  canvasRefState: HTMLCanvasElement | null;
  mode: string;
  setCanvasRef: (data: HTMLCanvasElement) => void;
  setMode: (mode: string) => void;
}>((set) => ({
  canvasRefState: null,
  mode: "hand",
  setCanvasRef: (canvasRef: HTMLCanvasElement) =>
    set(() => ({ canvasRefState: canvasRef })),
  setMode: (mode: string) => set(() => ({ mode: mode })),
}));
