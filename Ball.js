class Ball {
    constructor(x,y,r){
       var options = {
           isStatic:false,
           restitution : 0.8,
           friction:1,
           density:0.04
       }
       this.image=loadImage("Superhero-01.png")
    this.body=Bodies.circle(x,y,r,options)
    this.r=r
    World.add (world,this.body)
    
    
    
       
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push ()
        translate (pos.x,pos.y)
        rotate (angle)
        ellipseMode (RADIUS)
        fill ("yellow")
        image(this.image,0,0,this.r,this.r)
        pop ()
        
    }
    
    }