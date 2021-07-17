class Rubber {
    constructor(x, y, r) {
        var options = {
            restitution: 0.3,
            friction: 5,
            density:1,
            isStatic:false
        }
        this.y = y;
        this.x = x;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, this.r, options);
        
        World.add(world, this.body);
    }
    display() {

        var rubberpos = this.body.position;

        push();
        translate(rubberpos.x, rubberpos.y);
        strokeWeight(4);
        stroke("black");
        fill("darkblue");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};