class Polygon {
  constructor(points) {
    this.points = points;
  }

  draw(context) {
    context.beginPath();
    context.lineWidth = "5";
    context.fillStyle = getRandomColor();
    context.moveTo(points[0].x, points[0].y);
    context.lineTo(points[1].x, points[1].y);
    context.lineTo(points[2].x, points[2].y);
    context.closePath();
    context.fill();
    context.stroke();
  }

}
