class Ground{
    constructor(){
        var option={
            isStatic:true,
            friction:0.4
        }
        this.ground=Bodies.rectangle(500,625,1200,20,option)
        World.add(world, this.ground)
    }
    display(){
        rectMode(CENTER)
        fill("brown")
        rect(500,625,1200,20)
    }
}