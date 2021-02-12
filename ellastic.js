class Ellastic{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB : pointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB = pointB;
        this.ellastic = Constraint.create(options);
        World.add(world, this.ellastic);
    }

    fly(){
        this.ellastic.bodyA = null;
    }

    attach(body){
        this.ellastic.bodyA = body;
    }
    display(){
        if(this.ellastic.bodyA){
        var pointA = this.ellastic.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }  
    }
    
}
