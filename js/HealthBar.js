class HealthBar {
  constructor(healthOfChar) {
    this.x = 30;
    this.y = 30;
    this.width = 100;
    this.height = 10;
    this.healthOfChar = 100;
  }

  draw() {
    //Draw the Health Bar:
    fill(255);
    text("Health Bar", 30, 20);

    stroke(0);
    strokeWeight(4);
    noFill();
    rect(this.x, this.y, this.width, this.height);

    noStroke();
    fill(255, 0, 0);
    rect(this.x, this.y, this.healthOfChar, this.height);
  }
}
/*HERE THE FORMULA ANDRE GAVE ME FOR THE HEALTH BAR :
let healthOfChar = 200

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  health = min(maxHealth, ++health);
  
  
  stroke(0);
  strokeWeight(4);
  noFill();
  rect(10, 10, 200, 20);
  
  noStroke();
  fill(255, 0, 0);
  rect(10, 10, healthOfChar, 20);
  console.log(health)
  console.log(map(health, 0, maxHealth, 0, 500));
  // the value on the right iw as big as it will go
  
  
  
}

function keyPressed(){
  healthOfChar -= 20
}*/
