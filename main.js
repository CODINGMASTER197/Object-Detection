img = "";

function preload(){
img = loadImage("dog_cat.jpg");
}

function setup(){
  canvas = createCanvas(640,420);
  canvas.center();
}

function draw(){
image(img, 0, 0, 640, 420);
fill("#d00000");
textSize(25);
text("Dog", 45, 75);
noFill();
stroke("#023e8a");
rect(30, 40, 450, 350);

fill("#fcbf49");
textSize(25);
text("Cat", 320, 120);
noFill();
stroke("#f77f00");
rect(300, 90, 270, 320);


fill("#480ca8");
textSize(20);
text("Bowl", 250, 320);
noFill();
stroke("#007f5f");
strokeWeight(3)
rect(220, 280, 200, 126);
}