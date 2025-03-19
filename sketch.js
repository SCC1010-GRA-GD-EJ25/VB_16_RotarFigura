function preload() {
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(800,800)
}

function draw() {
  // put drawing code here
  background(255)
  //rect(100,100,200,200)
  
  push()
  translate(100,100)
  rotate(frameCount*0.1)
  cruz(0,0)
  pop()
  
  push()
  translate(300,100)
  rotate(frameCount*0.1)
  cruz(0,0)
  pop()

  
  for (let i=0; i<20; i++) {
    for (let j=0; j<30; j++) {
      stroke(random(255),random(255),random(255))
      cruz2(i*20, j*30)
    }
  }
}

function cruz(x,y) {
  line(x-10,y,x+10,y)
  line(x,y-10,x,y+10)
}

function cruz2(x,y) {
  push()
  translate(x,y)
  rotate(frameCount*0.1)
  cruz(0,0)
  pop()
}
