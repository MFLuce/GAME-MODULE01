class Game {
  constructor() {
    //I create the new player and assign it initials position values:
    this.player = new Player(200, 225);
    //this.healthbar = new HealthBar();
    this.score = 0;
    this.monsters = [];
    this.bullets = [];
    this.gameDifficulty = 1;
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
    this.player.draw(); //1.7 I call the player draw
    //Now I decide to have a new monster every 1.5 second and add
    //to the initial empty array (this.monsters) :
    if (frameCount % 90 === 0) {
      this.monsters.push(new Monster(this.gameDifficulty));
    }
    if (frameCount % (60 * 5) === 0) {
      this.gameDifficulty += 1;
    }
    //Now we call the draw of the monster :
    this.monsters.forEach((monster, index) => {
      monster.draw();
      //create monsters but once they disappear from the screen,
      // need to remove them from the array:
      if (monster.x + monster.width <= 0) {
        this.monsters.splice(index, 1);
      }
      //collisionCheck is true so remove health of player
      if (this.collisionCheck(this.player, monster)) {
        this.player.receiveDamage(monster.strength);
        //this.gameDifficulty = 1;
        scoreHolder.innerText = this.score;
        // this.player.speed = ;
        if (this.player.health === 0) {
          gameOver.innerText = "GAME OVER";
          noLoop();
        }
      }
    });

    //Bullet draw:
    //if (keyIsDown(SPACE_BAR)) {
    if (frameCount % 90 === 0) {
      this.bullets.push(new Bullet());
    }
    //}
    this.bullets.forEach((bullet, index) => {
      bullet.draw();
      //create bulletss but once they disappear from the screen,
      // need to remove them from the array:
      /*if (.x + monster.width <= 0) {
        this.monsters.splice(index, 1);
      }*/
    });
  }

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
