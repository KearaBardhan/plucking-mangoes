class Throw{
    constructor(bodyA, pointB){
        var option={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.01,
            lenght:10
        }
        this.pointB=pointB
        this.throw=Constraint.create(option)
        World.add(world, this.throw)
    }
    fly(){
        this.throw.bodyA=null;
         }
    Launch(bodyA){
        this.throw.bodyA=bodyA;
    }     
    display(){
        
    }

}