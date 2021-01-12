class Boy {
    constructor(x,y,width,height){
        var options = {
            isStatic : true,
        }
        this.body = Bodies.rectangle(x,y,width,height,options) 
        this.width = width; 
        this.height = height;
  
        World.add(world,this.body);
        this.image = loadImage('images/boy.png');
    }
     display(){
         var pos = this.body.position;
         push();
         translate(pos.x,pos.y);
         imageMode(CENTER);
         image(this.image,x,y,this.width,this.height);
         pop();
     }
  }