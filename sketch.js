function setup() {
    createCanvas(500, 500);
}


function draw() {
   background(255);
   //태양
   fill(255,64,64);
   stroke(255)
    ellipse(250,250,250,250);
   //달 
   var duration = 4000;
   var timing = (new Date()%duration)/duration;

   fill(229,211,136);
   stroke(255)
   ellipse(250 + Math.cos(timing*2*PI)*200,           // x좌표
        250 + Math.sin(timing*2*PI)*200,       // y좌표
        60,                                     // width
        60);                                    // height
   //타원궤도
   var duration = 5000;
   var timing = (new Date()%duration)/duration;

   fill(87,96,255);
   stroke(255)
   ellipse(250 + Math.cos(timing*2*PI)*350,           // x좌표
        250 + Math.sin(timing*2*PI)*200,       // y좌표
        150,                                     // width
        150);                                    // height

   var duration = 6000;
   var timing = (new Date()%duration)/duration;

   fill(126,22,12);
   stroke(255)
   ellipse(250 + Math.cos(timing*2*PI)*200,           // x좌표
        250 + Math.sin(timing*2*PI)*200,       // y좌표
        60,                                     // width
        60);                                    // height


}

