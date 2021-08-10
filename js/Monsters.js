/* 1 Caracteristics of Monsters
1.1 Monsters should appear randomly from outside of 
the canvas (from the right side).

1.2 But Monsters must stay in the height of canvas : 
so I must substract  the height of the monster

1.3 I must have multiple monsters so I must create
first an empty array in the Game Class : The loop 
will create a monster and push it in the array every 1.5 seconds 
1.4 My monsters should move so I must define the move of the 
monster and call it in the draw of the monster.
1.5 I must call the draw monster in the game but it's an array so I must do a loop */

class Monster {
  constructor(xPosition, yPosition) {
    this.width = random(50, 150);
    this.height = random(25, 75);
    this.x = CANVAS_WIDTH + this.width;
    this.y = random(0, CANVAS_HEIGHT - this.height);
    this.monsterImg =
      MONSTERS_GALLERY[Math.floor(random(0, MONSTERS_GALLERY.length - 1))];
  }
  draw() {
    //push();
    //fill("pink");
    //rect(this.x, this.y, this.width, this.height);
    //pop();
    image(this.monsterImg, this.x, this.y, this.width, this.height);
    this.move();
  }

  move() {
    this.x -= 3;
  }
}
