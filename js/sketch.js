var fillColour;
var x;
var y;

function setup() {
    var canvas = createCanvas(700, 700);
    canvas.parent("p5container");
    background(0);
    x = width/2;
    y = height/2;

    play= false;
    button = createButton("Play")
    button.center(); 
    button.addClass('btn');  
    button.mousePressed(()=>{
        play = true;
        button.hide();
    });
}

function draw() {
  
    var randVal = random();
    var inc = 50;
    var cSize = random(0,40);
    
    frameRate(10);
    fill(randColor());
    

    //Random Walker
    if(play==true){
        ellipse(x,y,cSize)
    
    if(randVal < .25){
      x=x+inc; 
    }
    
    else if(randVal < .5){
      x=x-inc; 
    }
    
    else if(randVal < .75){
      y=y-inc;
    }
    
    else{
      y=y+50;
    }
}
   
    
    
    if(x>700){
     x = x- 50;  
   }
    else if(x< 0){
     x = x+ 50;  
   }  
    else if(y>700){
    y = y- 50;  
   }
    else if(y<0){
    y = y+ 50;  
   }
  }

  //Random Colour Generator
  function randColor(){
    r= Math.floor(random(255))
    g= Math.floor(random(255))
    b= Math.floor(random(255))
    
    fillColour = color(r,g,b);
    return fillColour;
    
    
  }