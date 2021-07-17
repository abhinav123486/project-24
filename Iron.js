class Iron {
    constructor(x, y, width, height){
        var option = {
            restitution:0.8,
            friction:3,
            density:30
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height);
        World.add(world, this.body);
    }

    display(){
        var position = this.body.position;
        push()
        translate(position.x,position.y);
        noStroke();
        fill("black");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop()
    }
}