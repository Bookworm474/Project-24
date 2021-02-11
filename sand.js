class Sand{
    constructor(x,y){
        var options = {
            restitution: 0.3,
            density: 0.5,
            friction: 1
        }

        this.body = Bodies.circle(x,y,5,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        stroke("white");
        strokeWeight(3);
        fill("chocolate");
        ellipse(0,0,5,5);
        pop();
    }
}