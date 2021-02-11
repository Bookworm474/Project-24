class Stone{
    constructor(x,y,width,height){
        var options = {
            restitution: 0.5,
            density: 1.5,
            friction: 0.6
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke("white");
        strokeWeight(2);
        fill("sienna");
        rect(0,0,this.width,this.height);
        pop();
    }
}