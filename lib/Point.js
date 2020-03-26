/*
	23-2-2020
	klasse om punten op de 2d context van een canvas te tekenen

	eigenschappen
	* pos (positie van het middelpunt m.b.v. een Vector2d)
	* radius (grootte van de cirkel in pixels)
	* color (kleur van het punt, als String)
*/

class Point {
  constructor(x,y,radius,color,draggable){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.draggable = draggable || false;

    if(draggable){
      this.drag();
      }
    }

    drag(){
      let mouseCoord ={};
      let distance;
      let dragging = false;
    
      addEventListener('mousedown',(evt) => {
        mouseCoord.x = evt.clientX;
        mouseCoord.y = evt.clientY;
    
        let dx = mouseCoord.x - this.x;
        let dy = mouseCoord.y - this.y;
    
        distance = Math.sqrt(dx*dx + dy*dy);
        if(distance < this.radius){
          dragging = true
        } else {
          dragging = false
        }
      });
    
      addEventListener('mousemove',(evt) => {
        if(dragging){
          this.x = evt.clientX;
          this.y = evt.clientY;
        }
      });
    
      addEventListener('mouseup',() => {
        dragging = false;
      });
    
    }
    
    // this.font = "12px Courier new";
    // this.text = text;
  

    draw(){
      context.beginPath();
      context.fillStyle = this.color;
      context.arc(this.x,this.y,this.radius,0,Math.PI*2);
      context.stroke();
      context.fill();
    }
  
    printText(){
      context.font = this.font;
      context.fillText(this.text, this.x, this.y - this.radius - 10);
    }
  
  

  }


