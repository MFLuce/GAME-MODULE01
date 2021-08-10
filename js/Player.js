class Player {
  /*1.6 If i put parameter in the constructor and define them, I could change them 
    directly when I create the new player in the Game class*/
  constructor(LeftPosition, TopPosition) {
    // x is the left value
    this.x = LeftPosition;
    //y is the top value
    this.y = TopPosition;
    this.width = 50;
    this.height = 50;
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
    rect(this.x, this.y, this.width, this.height);
  }

  move() {
    // I put the keyboard key I need to move the player
    if (keyIsDown(DOWN_ARROW)) {
      this.y += 5;
    }
    if (keyIsDown(UP_ARROW)) {
      this.y -= 5;
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 5;
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
}
