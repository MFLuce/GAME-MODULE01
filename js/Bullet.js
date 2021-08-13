class Bullet {
  constructor(speed) {
    this.width = 100;
    this.height = 100;
    this.x = 0;
    this.y = random(0, CANVAS_HEIGHT - this.height);
    this.damage = 1;
    const theRealSpeed = 3 * speed;
    this.speed = theRealSpeed;
  }

  draw() {
    push();
    fill("orange");
    rect(this.x, this.y, this.width, this.height);
    pop();
    //stroke("orange"); //Change the color
    //strokeWeight(10); /// Make the points 1 pixels in size
    this.x += this.speed;
  }
}
