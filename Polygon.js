class Polygon{
    constructor(x, y, r){
        var options = {
            'restitution':0.3,
            'friction':0.1,
            'density':0.5,
            
        }
        this.body = Bodies.circle(x, y, r, options);
        this.radius = r;
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
    }
    display(){
        push();
        imageMode(CENTER)
        image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius)
        pop();
    }
}