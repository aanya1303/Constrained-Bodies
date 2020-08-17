class Chain{
    constructor(){
    var options={
        bodyA:bird.body,
        bodyB:stick5.body,
        stiffness:0.7,
        length:150
    }
 
    this.chain=Matter.Constraint.create(options);
    World.add(world,this.chain);
}
display(){
    stroke("red");
    strokeWeight(4);
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);

}
}
