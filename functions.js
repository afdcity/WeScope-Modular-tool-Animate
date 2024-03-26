let s1 = {
  x: 0,
  y: 0,
  w: 50,
  h: 150,
  rot: 0,
};
let s2 = {
  x: 0,
  y: 0,
  w: 50,
  h: 150,
  rot: 0,
};
let s3 = {
  x: 0,
  y: 0,
  w: 50,
  h: 150,
  rot: 0,
};
let s4 = {
  x: 0,
  y: 0,
  w: 50,
  h: 150,
  rot: 0,
};
let s5 = {
  x: 0,
  y: 0,
  w: 50,
  h: 150,
  rot: 0,
};

let tweenerInitialized = false;
let timeStep = 2000;
let tween1;
let tween2;

function tweener(selection) {
   // tweenerInitialized = false;
  s1.x = -selection.width/2;
  s1.y = -selection.height/2;
  s2.x = selection.width/2;
  s2.y = selection.height/2;
  s3.x = 0;
  s3.y =0 
  

   
  
   p5.tween.manager
    .addTween(s1)

    .addMotions(
      [
        { key: "x", target: selection.width / 2},
      ],
      timeStep,
      "easeInOutQuart"
    )
  .addMotions(
      [
        { key: "y", target: selection.width / 2},
      ],
      timeStep,
      "easeInOutQuart"
    )
  .addMotions(
      [
        { key: "x", target: -selection.width / 2},
      ],
      timeStep,
      "easeInOutQuart"
    )
  .addMotions(
      [
        { key: "y", target: -selection.width / 2},
      ],
      timeStep,
      "easeInOutQuart"
    )
    .startLoop()
    // .onLoop(exportGif);
  
  
  p5.tween.manager
    .addTween(s2)

    .addMotions(
      [
        { key: "x", target: -selection.width / 2},
      ],
      timeStep,
      "easeInOutQuart"
    )
  .addMotions(
      [
        { key: "y", target: -selection.width / 2},
      ],
      timeStep,
      "easeInOutQuart"
    )
  .addMotions(
      [
        { key: "x", target: selection.width / 2},
      ],
      timeStep,
      "easeInOutQuart"
    )
  .addMotions(
      [
        { key: "y", target: selection.width / 2},
      ],
      timeStep,
      "easeInOutQuart"
    )
    .startLoop()
    // .onLoop(exportGif);
  

  
  p5.tween.manager
    .addTween(s3)

    .addMotions(
      [
        { key: "x", target: selection.width / 2},
      ],
      timeStep,
      "easeInOutQuart"
    )
.addMotions(
      [
        { key: "x", target: 2*selection.width / 2},
      ],
      timeStep,
      "easeInOutQuart"
    )
    .startLoop()
    // .onLoop(exportGif);
  
  p5.tween.manager
    .addTween(s4)

    .addMotions(
      [
        { key: "x", target: selection.width / 2},
        { key: "y", target: selection.width / 2},
        { key: "rot", target: PI/2},
        
        
      ],
      timeStep,
      "easeInOutQuart"
    )
   .addMotions(
      [
        { key: "x", target: selection.width / 1},
        { key: "y", target: selection.width / 1},
        { key: "rot", target: PI},
        
      ],
      timeStep,
      "easeInOutQuart"
    )
  
    .startLoop()
    // .onLoop(exportGif);
}



////////////// DRAWING FUNCTIONS //////////////

function dF1(selection) {
  // p5.tween.manager.resetMotions()
  let graphic = selection.graphics;
  graphic.background(bgColor.value())
  let w = min(graphic.width, graphic.height);
  let h = graphic.height;
 

  
  let xOff1 = map(s1.x, 0, gridSize, 0, selection.width / 1);
  let yOff1 = map(s1.y, 0, gridSize, 0, selection.height / 1);
  let xOff2 = map(s2.x, 0, gridSize, 0, selection.width / 1);
  let yOff2 = map(s2.y, 0, gridSize, 0, selection.height / 1);

  graphic.push();
  graphic.translate(w / 2, h / 2);
  graphic.scale(selection.scaleX, selection.scaleY);
  graphic.rotate((selection.orient * PI) / 2 + s4.rot * 0);
  
  graphic.fill(gColor.value());
  // graphic.ellipse(s1.x, s1.y, w, w);
  graphic.ellipse(xOff1 , yOff1, w, w);
  
  graphic.fill(sgColor.value());
  // graphic.ellipse(s2.x, s2.y, w, w);
  graphic.ellipse(xOff2, yOff2, w, w);
  
  

  graphic.pop();

  if (!tweenerInitialized) {


    tweener(selection);
    tweenerInitialized = true; // Set flag to true after initialization
  }
}


function dF1a(selection) {
  // p5.tween.manager.resetMotions()
  let graphic = selection.graphics;
  // graphic.background(bgColor.value())
  // graphic.clear()
  
  let w = min(graphic.width, graphic.height);
  let h = graphic.height;
 

  
  let xOff1 = map(s1.x, 0, gridSize, 0, selection.width / 1);
  let yOff1 = map(s1.y, 0, gridSize, 0, selection.height / 1);
  let xOff2 = map(s2.x, 0, gridSize, 0, selection.width / 1);
  let yOff2 = map(s2.y, 0, gridSize, 0, selection.height / 1);

  graphic.push();
  graphic.translate(w / 2, h / 2);
  graphic.scale(selection.scaleX, selection.scaleY);
  graphic.rotate((selection.orient * PI) / 2 + s4.rot * 0);
  
  graphic.fill(gColor.value());
  // graphic.ellipse(s1.x, s1.y, w, w);
  graphic.rectMode(CENTER)
  graphic.rect(xOff1 , yOff1, w, w);
  
  graphic.fill(sgColor.value());
  // graphic.ellipse(s2.x, s2.y, w, w);
  graphic.ellipse(xOff2, yOff2, w, w);
  
  

  graphic.pop();

  if (!tweenerInitialized) {


    tweener(selection);
    tweenerInitialized = true; // Set flag to true after initialization
  }
}


function dF1b(selection) {
  // p5.tween.manager.resetMotions()
  let graphic = selection.graphics;
  // graphic.background(bgColor.value())
  let w = min(graphic.width, graphic.height);
  let h = graphic.height;
 

  
  let xOff1 = map(s1.x, 0, gridSize, 0, selection.width / 1);
  let yOff1 = map(s1.y, 0, gridSize, 0, selection.height / 1);
  let xOff2 = map(s2.x, 0, gridSize, 0, selection.width / 1);
  let yOff2 = map(s2.y, 0, gridSize, 0, selection.height / 1);

  graphic.push();
  graphic.translate(w / 2, h / 2);
  graphic.scale(selection.scaleX, selection.scaleY);
  graphic.rotate((selection.orient * PI) / 2 + s2.rot * 0);
  graphic.translate(-w/2, h/2);
  
  
  graphic.fill(gColor.value());
  // graphic.ellipse(s1.x, s1.y, w, w);
  graphic.ellipse(xOff1 , yOff1, w, w);
  
  // graphic.fill(sgColor.value());
  // graphic.ellipse(s2.x, s2.y, w, w);
  graphic.ellipse(xOff2, yOff2, w, w);

  graphic.pop();
  
  
   graphic.push();
  graphic.translate(w / 2, h / 2);
  graphic.scale(selection.scaleX, selection.scaleY);
  graphic.rotate((selection.orient * PI) / 2 + s2.rot * 0);
  graphic.translate(-w/2, h/2);
  graphic.rotate(PI/2)
  
  
  
  graphic.fill(sgColor.value());
  // graphic.ellipse(s1.x, s1.y, w, w);
  graphic.ellipse(xOff1 , yOff1, w, w);
  
  // graphic.fill(gColor.value());
  // graphic.ellipse(s2.x, s2.y, w, w);
  graphic.ellipse(xOff2, yOff2, w, w);

  graphic.pop();

  if (!tweenerInitialized) {


    tweener(selection);
    tweenerInitialized = true; // Set flag to true after initialization
  }
}


function dF2(selection) {
  let graphic = selection.graphics;
  let w = min(graphic.width, graphic.height);
  let h = graphic.height;

  let x1 = map(s3.x, 0, gridSize, 0, selection.width);

  graphic.push();

  graphic.translate(w / 2, h / 2);
  graphic.scale(selection.scaleX, selection.scaleY);

  graphic.rotate((selection.orient * PI) / 2 + s2.rot * 0);
  graphic.noStroke();

  graphic.fill(gColor.value());

  graphic.triangle( 0 + x1 + w / 2,0,-w / 2 + x1 + w / 2,-h / 2,-w / 2 + x1 + w / 2,h / 2);
  graphic.triangle(0 + x1, 0, -w / 2 + x1, -h / 2, -w / 2 + x1, h / 2);
  graphic.triangle(0 + x1 - w / 2,0,-w / 2 + x1 - w / 2,-h / 2,-w / 2 + x1 - w / 2,h / 2);
  graphic.triangle(0 + x1 - w / 1,0,-w / 2 + x1 - w / 1,-h / 2,-w / 2 + x1 - w / 1,h / 2);

  graphic.fill(sgColor.value());

  graphic.pop();

  if (!tweenerInitialized) {
    tweener(selection);
    tweenerInitialized = true; // Set flag to true after initialization
  }
}

function dF2a(selection) {
  let graphic = selection.graphics;
  let w = min(graphic.width, graphic.height);
  let h = graphic.height;

  let x1 = map(s3.x, 0, gridSize, 0, selection.width);

  graphic.push();

  graphic.translate(w / 2, h / 2);
  graphic.scale(selection.scaleX, selection.scaleY);

  graphic.rotate((selection.orient * PI) / 2 );
  graphic.noStroke();

  graphic.fill(gColor.value());
  graphic.arc(x1,0,w,w,-PI/2,PI/2)
   graphic.arc(x1-w,0,w,w,-PI/2,PI/2)
  graphic.fill(sgColor.value());
  graphic.arc(x1-w/2,0,w,w,-PI/2,PI/2)
  graphic.arc(x1-3*w/2,0,w,w,-PI/2,PI/2)

  graphic.pop();

  if (!tweenerInitialized) {
    tweener(selection);
    tweenerInitialized = true; // Set flag to true after initialization
  }
}


function dF3(selection) {
  let graphic = selection.graphics;
  let w = min(graphic.width, graphic.height);
  let h = graphic.height;

  let x1 = map(s3.x, 0, gridSize, 0, selection.width * 2);

  graphic.push();
  graphic.translate(w / 2, h / 2);
  graphic.scale(selection.scaleX, selection.scaleY);

  graphic.rotate((selection.orient * PI) / 2 + s4.rot * 0);
  graphic.noStroke();

  graphic.fill(gColor.value());
  graphic.triangle(-w / 2 + x1, -w / 2, w / 2 + x1, w / 2, -w / 2 + x1, w / 2);
  graphic.triangle(-w / 2 + x1 - 2 * w,-w / 2,w / 2 + x1 - 2*w,w / 2,-w / 2 + x1 - 2*w,w / 2);
  
  graphic.fill(sgColor.value());
  graphic.triangle(-w / 2 + x1 - 1 * w,-w / 2,w / 2 + x1 - 1*w,w / 2,-w / 2 + x1 - 1*w,w / 2);
  graphic.triangle(-w / 2 + x1 - 3 * w,-w / 2,w / 2 + x1 - 3*w,w / 2,-w / 2 + x1 - 3*w,w / 2);
  

  graphic.pop();

  if (!tweenerInitialized) {
    tweener(selection);
    tweenerInitialized = true; // Set flag to true after initialization
  }
}

function dF4(selection) {
  let graphic = selection.graphics;
  let w = min(graphic.width, graphic.height);
  let h = graphic.height;

  let x1 = map(s3.x, 0, gridSize, 0, selection.width * 2);

  graphic.push();
  graphic.translate(w / 2, h / 2);
  graphic.scale(selection.scaleX, selection.scaleY);

  graphic.rotate((selection.orient * PI) / 2 );
  graphic.noStroke();

  ////1
  graphic.fill(gColor.value());
  graphic.ellipse(x1-5*w/2,0,w,w)
  ////2
  graphic.fill(sgColor.value());
  graphic.ellipse(x1-3*w/2,0,w,w)
  ////3
  graphic.fill(gColor.value());
  graphic.ellipse(x1-w/2,0,w,w)
  ////4
  graphic.fill(sgColor.value());
  graphic.ellipse(x1+w/2,0,w,w)
  

  graphic.pop();

  if (!tweenerInitialized) {
    tweener(selection);
    tweenerInitialized = true; // Set flag to true after initialization
  }
}

function dF4a(selection) {
  let graphic = selection.graphics;
  let w = min(graphic.width, graphic.height);
  let h = graphic.height;

  let x1 = map(s3.x, 0, gridSize, 0, selection.width * 2);

  graphic.push();
  graphic.translate(w / 2, h / 2);
  graphic.scale(selection.scaleX, selection.scaleY);

  graphic.rotate((selection.orient * PI) / 2 );
  graphic.noStroke();

  graphic.fill(gColor.value());
  graphic.ellipse(x1,0,w,w)
  graphic.ellipse(x1-2*w,0,w,w)

  graphic.fill(sgColor.value());
  graphic.ellipse(x1-w,0,w,w)////2
  graphic.ellipse(x1-3*w,0,w,w)
  
  

  graphic.pop();

  if (!tweenerInitialized) {
    tweener(selection);
    tweenerInitialized = true; // Set flag to true after initialization
  }
}



function dF4b(selection) {
  let graphic = selection.graphics;
  let w = min(graphic.width, graphic.height);
  let h = graphic.height;

  let x1 = map(s4.x, 0, sqrt(2) * gridSize, 0, sqrt(2) * selection.width);
  let y1 = map(s4.y, 0, sqrt(2) * gridSize, 0, sqrt(2) * selection.width);
  
  
  
  let r = w/(1*sqrt(2))
  graphic.push();
  graphic.translate(w / 2, h / 2);
  graphic.scale(selection.scaleX, selection.scaleY);

  graphic.rotate((selection.orient * PI) / 2 + s4.rot*0);
  graphic.noStroke();

  ////1
//   graphic.fill(gColor.value());
//   graphic.ellipse(s4.x - w/1,s4.y-w/1,r,r)
//   graphic.ellipse(s4.x + 0,s4.y,r,r)

//   graphic.fill(sgColor.value());
//   graphic.ellipse(s4.x - 3*w/2,s4.y-3*w/2,w/2,w/2)
//   graphic.ellipse(s4.x - w/2,s4.y-w/2,w/2,w/2)
//   graphic.ellipse(s4.x + w/2,s4.y+w/2,w/2,w/2)
  
   ////1
  graphic.fill(gColor.value());
  graphic.ellipse(x1 - w/1,y1-w/1,r,r)
  graphic.ellipse(x1 + 0,y1,r,r)
  // graphic.rectMode(CENTER)
  // graphic.rect(x1 - w/1,y1-w/1,r/2,r/2)
  // graphic.rect(x1 + 0,y1,r/2,r/2)

  graphic.fill(sgColor.value());
  graphic.ellipse(x1 - 3*w/2,y1-3*w/2,r,r)
  graphic.ellipse(x1 - w/2,y1-w/2,r,r)
  graphic.ellipse(x1 + w/2,y1+w/2,r,r)
  
  
  

  graphic.pop();

  if (!tweenerInitialized) {
    tweener(selection);
    tweenerInitialized = true; // Set flag to true after initialization
  }
}
