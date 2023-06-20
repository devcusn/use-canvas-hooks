import { useEffect, useRef, useState } from "react";
import { drawRectangle, drawTriangle } from "./events/drawShapes";
import { useCanvasStore } from "../../store/canvas/useCanvasStore";

const useCanvas = () => {
  const { canvasRefState, setCanvasRef, setMode, mode } = useCanvasStore(
    (state) => state
  );
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (canvasRefState) {
      setContext(canvasRefState.getContext("2d"));
      if (context) {
        canvasRefState.width = window.innerWidth;
        canvasRefState.height = window.innerHeight;
        context.fillStyle = "#202020";
        context.fillRect(0, 0, window.innerWidth, window.innerHeight);
      }

      const getCursorPosition = (
        canvas: HTMLCanvasElement,
        event: MouseEvent
      ) => {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        return { x, y };
      };

      canvasRefState.addEventListener("mousedown", function (e) {
        getCursorPosition(canvasRefState, e);
      });
    }
  }, [canvasRefState, context, setCanvasRef]);

  const canvasEvents = context
    ? {
        drawReactangle: (
          path: { x: number; y: number },
          a: number,
          b: number
        ) => drawRectangle(context, path, a, b),
        drawTriangle: (path: { x: number; y: number }, a: number, b: number) =>
          drawTriangle(context, path, a, b),
      }
    : null;

  return {
    setCanvasRef,
    context,
    canvasEvents,
    setMode,
    mode,
  };
};

export default useCanvas;
