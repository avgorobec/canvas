const WIDTH = 600
const HEIGHT = 200
const DPI_WIDTH = WIDTH * 2
const DPI_HEIGHT = HEIGHT * 2
const ROWS_COUNT = 5

function chart(canvas, data) {
  const ctx = canvas.getContext('2d')
  canvas.style.width = WIDTH + 'px'
  canvas.style.height = HEIGHT + 'px'
  canvas.width = DPI_WIDTH
  canvas.height = DPI_HEIGHT

  // y axias
  const step = DPI_HEIGHT / ROWS_COUNT
  ctx.beginPath()
  ctx.strokeStyle = '#bbb'
  ctx.font = 'normal 20px Helvetica,sans-serif'
  ctx.fillStyle = '#96a2aa'
  for (let i = 1; i <= ROWS_COUNT; i++) {
    const y = step * i
    ctx.fillText(DPI_HEIGHT - y, 5, y - 10);
    ctx.moveTo(0, y);
    ctx.lineTo(DPI_WIDTH, y);
  }
  ctx.stroke()
  ctx.closePath();


  //
  ctx.beginPath()
  ctx.lineWidth = 4
  ctx.strokeStyle = '#ff0000'
  for (const [x,y] of data) {
    ctx.lineTo(x, DPI_HEIGHT - y)
  }
  ctx.stroke()
  ctx.closePath();

}

chart(document.getElementById('chart'), [
  [0, 0],
  [200, 100],
  [400, 50]
])