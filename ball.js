class Ball{
    constructor(x,y){
        var option={
            restitution:0.7,
            friction:0.4,
            density:2
      
      
        }
        this.body=Bodies.circle(x,y,50,option);
        World.add(world,this.body);
    }
display(){
    circle(this.body.position.x,this.body.position.y,100)
}



}