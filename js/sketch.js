var fillColor,r,g,b;
var x;
var y;
var play;

function setup() {
    var canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent("p5container");
    background(0);
    x = width/2;
    y = height/2;

    play= false;
    button = createButton("play")
    //button.position(window.innerwidth/2, window.innerHeight/2); 
    button.addClass('btn');  
    button.mousePressed(()=>{
        play = true;
        //button.hide();
    });
    button = createButton("stop")
    //button.position(window.innerwidth/2, window.innerheight/2); 
    button.addClass('btn1');  
    button.mousePressed(()=>{
        play = false;
        //button.hide();
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
   
    
    
    if(x>window.innerWidth){
     x = x- 50;  
   }
    else if(x< 0){
     x = x+ 50;  
   }  
    else if(y>window.innerHeight){
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
    
    fillColor = color(r,g,b);
    return fillColor;
    
    
  }