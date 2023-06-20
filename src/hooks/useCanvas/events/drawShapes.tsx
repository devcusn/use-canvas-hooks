export const drawRectangle = (
  ctx: CanvasRenderingContext2D,
  path: { x: number; y: number },
  a: number,
  b: number
) => {
  ctx.beginPath();
  ctx.fillStyle = "green";
  ctx.fillRect(path.x, path.y, a, b);
};

export const drawTriangle = (
  ctx: CanvasRenderingContext2D,
  path: { x: number; y: number },
  a: number,
  b: number
) => {
  const { x, y } = path;
  ctx.beginPath();
  ctx.moveTo(x, y - a / 2);
  ctx.lineTo(x - b / 2, y + a / 2);
  ctx.lineTo(x + b / 2, y + a / 2);
  ctx.closePath();
  ctx.fillStyle = "yellow";
  ctx.fill();
};
