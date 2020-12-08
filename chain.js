class Chain{
    constructor(bodyA,bodyB,length,stiffness)
    {
        var options={
         bodyA:bodyA,
         bodyB:bodyB,
         length:length,
         stiffness:stiffness
        }
        this.body = Constraint.create(options);
        World.add(world,this.body);
    }
    display()
    {
        line(this.body.bodyA.position.x,this.body.bodyA.position.y,
            this.body.bodyB.position.x,this.body.bodyB.position.y);
    }
}