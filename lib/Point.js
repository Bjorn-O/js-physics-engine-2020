/*
	23-2-2020
	klasse om punten op de 2d context van een canvas te tekenen

	eigenschappen
	* pos (positie van het middelpunt m.b.v. een Vector2d)
	* radius (grootte van de cirkel in pixels)
	* color (kleur van het punt, als String)
*/

class Point {
  constructor(x,y,radius, color, draggable, label){
		// hier komt de constructor
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.draggable = false || draggable;
    this.label = label || "";


    if(this.draggable) {
      this.drag();
    }
  }

  drag(){
    let mouseCoord = {};
    let distance;
    let dragging = false;

    addEventListener('mousedown', (evt) => {
      mouseCoord.x = evt.clientX;
      mouseCoord.y = evt.clientY;

      let dx = mouseCoord.x - this.x;
      let dy = mouseCoord.y - this.y;

      distance = Math.sqrt(dx*dx + dy*dy);
      if (distance < this.radius) {
        dragging = true;
      } else {
        dragging = false;
      }
      console.log(dragging);
      console.log(mouseCoord);
    })

    addEventListener('mousemove', (evt) => {
      if (dragging) {
        this.x = evt.clientX;
        this.y = evt.clientY;
      }
    })
    addEventListener('mouseup', (evt) => {
      dragging = false;
      console.log('mouseup');
    })
  }

  draw(context){
		//hier komt de code om een cirkel te tekenen
    context.beginPath();
    context.lineWidth = "5";
    context.fillStyle=this.color;
    context.arc(this.x,this.y,this.radius,0,Math.PI*2);
    context.stroke();
    context.font = "12px Comic Sans MS";
    context.fillText(this.label, this.x - this.radius, this.y - this.radius);
    context.fill();
  }

}
