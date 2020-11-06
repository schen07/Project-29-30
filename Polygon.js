class Polygon extends BaseClass {
   constructor(x,y){
       super(x,y,50,50);
      
    }
   Polygon = BodyA
    slingshot = new SlingShot(this.polygon,{x:100,y:200});

    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      super.display();
   }
  }
  