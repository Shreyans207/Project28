class Mango {
    constructor(x,y,r){
        var options = {
            restitution:0, 
            isStatic : true,
            friction : 1 
        }
        this.body = Bodies.circle(x,y,r/2,options);
        this.r = r ;
  
        World.add(world,this.body);
        this.image = loadImage('images/mango.png')
    }
     display(){
         var pos = this.body.position;
         var angle = this.body.angle;
         push();
         translate(pos.x,pos.y);
         rotate(angle);
         imageMode(CENTER);
         image( this.image , 0 , 0, this.r , this.r );
         pop();
     }
  }