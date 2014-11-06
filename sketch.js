var bg;
var y = 0;

function setup() {
  // The background image must be the same size as the parameters
  // into the size() method. In this program, the size of the image
  // is 710x400 pixels.
  bg = loadImage("space.png");
  img1 = loadImage("sun.png");
  createCanvas(500, 500);
}

function draw() {
   background(bg);
   //태양
   fill(255,64,64);
   noStroke()
   image(img1);

   var duration = 4000;
   var timing = (new Date()%duration)/duration;

   fill(229,211,136);
   noStroke()
   ellipse(250 + Math.cos(timing*2*PI)*200,           // x좌표
        250 + Math.sin(timing*2*PI)*200,       // y좌표
        60,                                     // width
        60);                                    // height
   //타원궤도 행성
   var duration = 5000;
   var timing = (new Date()%duration)/duration;

   fill(87,96,255);
   noStroke()
   ellipse(250 + Math.cos(timing*2*PI)*350,           // x좌표
        250 + Math.sin(timing*2*PI)*200,       // y좌표
        150,                                     // width
        150);                                    // height
   //속도 다른 행성
   var duration = 8000;
   var timing = (new Date()%duration)/duration;

   fill(126,22,12);
   noStroke()
   ellipse(250 + Math.cos(timing*2*PI)*250,           // x좌표
        250 + Math.sin(timing*2*PI)*200,       // y좌표
        60,                                     // width
        60);                                    // height
   //태양를 도는 지구
   var duration = 6000;
   var timing = (new Date()%duration)/duration;

   fill(81,158,81);
   noStroke()
   ellipse(250 + Math.cos(timing*2*PI)*250,           // x좌표
        250 + Math.sin(timing*2*PI)*200,       // y좌표
        60,                                     // width
        60);                                    // height
   //지구를 도는 달
    var duration = 6000;
   var timing = (new Date()%duration)/duration;

   fill(209,192,70);
   noStroke()
   ellipse(250 + Math.cos(timing*2*PI)*250+Math.cos(timing*4*PI)*80,          // x좌표
        250 + Math.sin(timing*2*PI)*200+Math.sin(timing*4*PI)*80,       // y좌표
        20,                                     // width
        20);                                    // height
}

