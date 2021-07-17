class beads {
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

        var beadpos = this.body.position;

        push();
        translate(beadpos.x, beadpos.y);
        strokeWeight(4);
        stroke("black");
        fill("brown");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};