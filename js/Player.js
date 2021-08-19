class Player {
  /*1.6 If i put parameter in the constructor and define them, I could change them 
    directly when I create the new player in the Game class*/
  constructor(LeftPosition, TopPosition) {
    // !!!! If I put parameter here I can define and use it in the Game Class (external)
    // x is the left value
    this.x = LeftPosition;
    //y is the top value
    this.y = TopPosition;
    this.width = 100;
    this.height = 100;
    this.speed = 2;
    this.health = 500;
    /* !!!! BE CAREFUL : PUT THE BOUNDARIES AFTER THE DEFINITION
    OF THE VALUE YOU PUT IN BOUNDARIES : I put this.width 
    after the boundaries and it's not working*/
    this.rightBoundary = CANVAS_WIDTH - this.width;
    this.bottomBoundary = CANVAS_HEIGHT - this.height;
  }
  //1.7 I put the element of the player, for the moment it's a square
  draw() {
    this.move();
    this.maintainBoundaries();
    //rect(this.x, this.y, this.width, this.height);
    image(spaceshipImg, this.x, this.y, this.width, this.height);
  }

  move() {
    // I put the keyboard key I need to move the player
    if (keyIsDown(DOWN_ARROW)) {
      this.y += this.speed;
    }
    if (keyIsDown(UP_ARROW)) {
      this.y -= this.speed;
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.speed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.speed;
    }
  }
  // CAN'T GO OVER ON THE RIGHT SIDE
  CantGoOverRight() {
    if (this.x >= this.rightBoundary) {
      this.x = this.rightBoundary;
    }
  }
  // CAN'T GO OVER ON THE LEFT SIDE
  CantGoOverLeft() {
    if (this.x < 0) {
      this.x = 0;
    }
  }
  // CAN'T GO OVER ON THE TOP SIDE
  CantGoOverTop() {
    if (this.y < 0) {
      this.y = 0;
    }
  }
  // CAN'T GO OVER ON THE BOTTOM SIDE
  CantGoOverBottom() {
    if (this.y >= this.bottomBoundary) {
      this.y = this.bottomBoundary;
    }
  }
  maintainBoundaries() {
    this.CantGoOverRight();
    this.CantGoOverLeft();
    this.CantGoOverTop();
    this.CantGoOverBottom();
  }

  receiveDamage(damage) {
    this.health -= damage;
  }

  get bottomSide() {
    return this.y + this.height;
  }

  get topSide() {
    return this.y;
  }

  get leftSide() {
    return this.x;
  }
  get rightSide() {
    return this.x + this.width;
  }
}
