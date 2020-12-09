class Rope {
constructor(body1, body2, offsetX, offsetY){
this.offsetX = offsetX
this.offsetY = offsetY
var options = {
bodyA: body1,
bodyB: body2,
pointB: {x:offsetX, y:offsetY},
stiffness:0,
length:10
}
this.rope = Constraint.create(options)
World.add(world, this.rope)
}
display(){
var pointA=this.rope.bodyA.position;
var pointC=this.rope.bodyB.position;
strokeWeight(2);
line(pointA.x, pointA.y, pointC.x+this.offsetX, pointC.y+this.offsetY);
}
}