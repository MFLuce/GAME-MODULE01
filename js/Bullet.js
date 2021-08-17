class Bullet {
  constructor(rightSideOfPlayer, middleSideOfPlayer, speed, damage) {
    //this.width = 100;
    //this.height = 100;
    this.x = rightSideOfPlayer;
    this.y = middleSideOfPlayer;
    this.radius = 5;
    const theRealDamage = 1.25 * damage;
    this.damage = theRealDamage;
    const theRealSpeed = 2 * speed;
    this.speed = theRealSpeed;
    this.bulletHit = false;
  }

  draw() {
    push();
    fill("orange");
    //circle(this.x, this.y, this.d);
    ellipseMode(RADIUS);
    ellipse(this.x, this.y, this.radius, this.radius);
    pop();
    // console.log(this.x);
    //stroke("orange"); //Change the color
    //strokeWeight(10); /// Make the points 1 pixels in size
    this.x += this.speed;
  }

  get topSide() {
    return this.y - this.radius;
  }

  get leftSide() {
    return this.x - this.radius;
  }

  get rightSide() {
    return this.x + this.radius;
  }
  get bottomSide() {
    return this.y + this.radius;
  }
}
