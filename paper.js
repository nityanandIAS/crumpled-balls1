
class Paper {
    constructor(x,y,r){
        var options={
            restitution:0.1,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,r/2,options);
        this.radius=r;
        World.add(world,this.body);
    
    }
    display(){
        var angle=this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle)
        
        fill("blue");
        ellipseMode(CENTER);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
    
}