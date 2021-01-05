class Slingshot{
    constructor(body1, point2){
        var options ={
            bodyA : body1,
            pointB : point2,
            length : 50,
            stiffness : 0.4
        }
       this.slingshot = Constraint.create(options);
       this.point2 = point2;
       World.add(world,this.slingshot);
    }

    fly(){
        this.slingshot.bodyA = null;
    }

    attach(bodyA){
        this.slingshot.bodyA = bodyA;
    }

    display(){
        if(this.slingshot.bodyA){ 
        var point1 = this.slingshot.bodyA.position;
        var point2 = this.point2;
        stroke("orange");
        line(point1.x,point1.y,point2.x,point2.y);
        }
    }
}