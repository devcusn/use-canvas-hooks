import React, { Ref, forwardRef } from "react";

export type CanvasProps = {
  ref: Ref<HTMLCanvasElement>;
  width?: number | string;
  height?: number | string;
};

const Canvas: React.FunctionComponent<CanvasProps> =
  forwardRef<HTMLCanvasElement>((props, ref) => {
    return <canvas {...props} ref={ref} />;
  });

export default Canvas;
