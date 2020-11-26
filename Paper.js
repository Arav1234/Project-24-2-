class Ball {
    constructor (x,y,radius){
      var optios = {
        isStatic : false,
        restitution : 0.1,
        density : 1.2,
        friction : 0.5
      }
        
      this.body=Bodies.circle(x,y,radius,optios);
           this.radius = radius;
           World.add(world,this.body);   
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        strokeWeight(2);
      stroke("blue");
        fill("cyan");
        circle(pos.x,pos.y,this.radius);
    }
}