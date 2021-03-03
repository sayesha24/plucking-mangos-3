class Hand{

constructor(bodyA, pointB){

var options= {

    bodyA: bodyA, 
    pointB: pointB, 
    isStatic: true, 
    restitution: 0,
    friction: 1,
    density: 1.2 
}
pointB= pointB

this.hand= Constraint.create(options);

World.add(world, this.hand);

//this.hand.visible= false; 
}
display(){

if(this.hand.bodyA){

var pointA= this.hand.bodyA.position;

var pointB= pointB;

strokeWeight(4);

line(this.hand.bodyA.x, this.hand.bodyA.y, pointB.x, pointB.y);
}
}

}