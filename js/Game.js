class Game {
  constructor() {
    //I create the new player and assign it initials position values:
    this.player = new Player(200, 225);
    //this.healthbar = new HealthBar();
    this.score = 0;
    this.monsters = [];
  }
  //1.2 The setup of the game and I call it in the main.js : I build the canvas//
  setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  }
  /*1.4 I create the element of the game with players and monsters or whatever: I call
 all the draw functions here and after I'll call the game function in the main file*/
  draw() {
    background(backgroundImg); // Background always before the player draw!
    //this.healthbar.draw();

    //1.7 I call the player draw
    this.player.draw();
    //Now I decide to have a new monster every 1.5 second and add
    //to the initial empty array (this.monsters) :
    if (frameCount % 120 === 0) {
      this.monsters.push(new Monster());
    }
    //Now we call the draw of the monster :
    this.monsters.forEach((monster, index) => {
      monster.draw();
      //I create monsters but once they disappear from the screen,
      //I need to remove them from the array so ;
      if (monster.x + monster.width <= 0) {
        this.monsters.splice(index, 1);
      }
      if (this.collisionCheck(this.player, monster)) {
        this.player.receiveDamage(monster.damage);
        //this.gameDifficulty = 1;
        scoreHolder.innerText = this.score;
        // this.player.speed = ;
        if (this.player.health === 0) {
          noLoop();
        }
      }
    });
  }

  //keypressed()

  collisionCheck(player, monster) {
    // UA > TB
    // RA > LB
    // LA < RB
    // TA < UB

    if (player.bottomSide < monster.topSide) {
      return false;
    }

    if (player.rightSide < monster.leftSide) {
      return false;
    }

    if (player.leftSide > monster.rightSide) {
      return false;
    }

    if (player.topSide > monster.bottomSide) {
      return false;
    }

    return true;
  }
}
