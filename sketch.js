
function setup() {
  createCanvas(400,400);
  background(255);

}

function draw() 
{

  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  
  
  if (keyDown('right'))
  {
    background('red');
    console.log('red');
    //createCanvas(500,500);


  }
  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    console.log('blue');
    //createCanvas(500,400);
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
    console.log('yellow')
    //createCanvas(400,400);
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("lightgreen");
    console.log('lightgreen');
    createCanvas(800,800);
  }


  
  drawSprites();
}

