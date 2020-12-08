class Ball {
    constructor(x, y, radius) {
      var options = {
          'restitution':1.2,
          'friction':1,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display()
    {
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("purple");
      ellipse(0, 0, this.radius);
      pop();
    }
  };