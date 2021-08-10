class HealthBar {
  constructor() {
    this.x = 10;
    this.y = 10;
    this.width = 100;
    this.height = 10;
  }

  draw() {
    //Draw the Health Bar:
    /*stroke(0);
    strokeWeight(4);
    noFill();
    rect(10, 10, 200, 20);

    noStroke();
    fill(255, 0, 0);
    rect(10, 10, map(health, 0, maxHealth, 0, 200), 20);*/
    rect(this.x, this.y, this.width, this.height);
  }
}
