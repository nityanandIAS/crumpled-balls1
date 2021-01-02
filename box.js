
class Box {
    constructor(x,y,w,h){
        var options={
            restitution:1,
            isStatic:true
        }
        this.box=Bodies.rectangle(x,y,w,h,options);
        this.width=w;
        this.height=h;
        World.add(world,this.box);
    
    }
    display(){
        var angle=this.box.angle;
        push();
        translate(this.box.position.x,this.box.position.y);
        rotate(angle)
        
        fill("red");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
    
}