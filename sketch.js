var obm,obf;


function setup() {
  createCanvas(800,400);
 obm = createSprite(400, 200, 50, 50);
 obm.shapeColor="green";
 obf = createSprite(200,200,30,40);
 obf.shapeColor="green";
} 

function draw() {
  background(255,255,255); 
  obm.x = World.mouseX;
  obm.y = World.mouseY;
  if(obm.x-obf.x < obm.width/2 + obf.width/2 && obf.x - obm.x < obm.width/2 + obf.widht/2 && obm.y-obf.y < obm.height/2 + obf.height/2 && obf.y - obm.y < obm.height/2 + obf.height/2){
    obm.shapeColor="red";
    obf.shapeColor="red";
  
  }
  else{
    obm.shapeColor="green";
    obf.shapeColor="green";
  
  }

  drawSprites();
}