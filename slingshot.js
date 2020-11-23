class SlingShot {
   constructor(bodyA, pointB){
    var options = {
        bodyA: bodyA, 
        pointB: pointB,
        stiffness: 0.01,
        length: 30
    }
    this.sling = Constraint.create(options);
    this.pointB = pointB;
    World.add(world, this.sling);
   }
   
   fly() {
    this.sling.bodyA = null;
}
   display() {
    if(this.sling.bodyA)  
    { 
    var pointA = this.sling.bodyA.position;
       var pB = this.pointB;
    strokeWeight(3);
    line(pointA.x, pointA.y, pB.x, pB.y);
    }
   }

  
   
}