class Game {
  constructor() {
    //I create the new player and assign it initials position values:
    this.healthBar = new HealthBar();
    this.setEverything();
  }

  setEverything() {
    this.player = new Player(200, 225);
    this.score = 0;
    this.monsters = [];
    this.bullets = [];
    this.gameDifficulty = 1; //The speed of monsters
    this.bulletEfficiency = 50; //The damage of bullets
    this.bulletSpeed = 1; //The speed of bullets
    this.isPlaying = true;
    this.healthBar.healthOfChar = 100;
  }

  restartGame() {
    // if (isLooping()) {
    //   return;
    //  }
    /*    this.player = new Player(200, 225);
    this.score = 0;
    this.monsters = [];
    this.bullets = [];
    this.gameDifficulty = 1; //The speed of monsters
    this.bulletEfficiency = 50; //The damage of bullets
    this.bulletSpeed = 1; //The speed of bullets
    this.healthBar = new HealthBar(); */
    //backgroundImg;
    this.setEverything();
    this.healthBar.xText = 77;
    this.healthBar.yText = 14;
    soundGame.loop();
    soundGame.setVolume(0.05);
    loop();
  }

  //1.2 The setup of the game and I call it in the main.js : I build the canvas//
  setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    soundGame.loop();
    soundGame.setVolume(0.05);
  }
  /*1.4 I create the element of the game with players and monsters or whatever: I call
 all the draw functions here and after I'll call the game function in the main file*/
  draw() {
    clear();
    background(backgroundImg); // Background always before the player draw!
    this.player.draw(); //1.7 I call the player draw
    this.healthBar.draw();
    //Now I decide to have a new monster every 1.5 second and add
    //to the initial empty array (this.monsters) :
    if (frameCount % 120 === 0) {
      this.monsters.push(new Monster(this.gameDifficulty));
    }
    scoreHolder.innerText = this.score;
    //if (frameCount % (60 * 5) === 0) {
    //this.gameDifficulty += 1;
    //}
    //Now we call the draw of the monster :
    this.monsters.forEach((monster, index) => {
      monster.draw();
      //create monsters but once they disappear from the screen,
      // need to remove them from the array:
      if (monster.x + monster.width <= 0) {
        this.monsters.splice(index, 1);
      }
      if (monster.health <= 0) {
        this.monsters.splice(index, 1);
        explosMonstSound.play();
        explosMonstSound.setVolume(2);
        this.score += 400;
        scoreHolder.innerText = this.score;
        this.player.speed += 0.25;
        this.bulletSpeed += 5;
      }
      //collisionCheck is true so remove health of player
      if (this.playerCollisionCheck(this.player, monster, this.healthBar)) {
        console.log("TOUCHIT");
        this.player.receiveDamage(monster.strength);
        // console.log(
        //    `Monster Health= ${monster.health} and Player Health = ${this.player.health}`
        //  );
        this.healthBar.healthOfChar -= monster.strength / 5;

        //this.gameDifficulty = 1;
        // this.player.speed = ;
      }
    });

    if (this.player.health <= 0) {
      //alert("GAME OVER");
      this.healthBar.healthOfChar === 0;
      this.isPlaying = false;
      soundGame.stop();
      //bulletSound.stop();
      fill(255);
      textAlign(CENTER, CENTER);
      push();
      textSize(80);
      text("GAME OVER", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
      pop();
      noLoop();
    }

    this.bullets.forEach((bullet, index) => {
      bullet.draw();
      this.monsters.forEach((monster, idx) => {
        if (this.bulletCollisionCheck(bullet, monster)) {
          //  console.log("BULLET HIT");
          monster.health -= this.bulletEfficiency;
          //   console.log(`monster health =${monster.health}`);
          monster.numberOfHits++;
        }
      });

      if (bullet.x - bullet.radius >= CANVAS_WIDTH) {
        this.bullets.splice(index, 1);
      }
      //bulletMonsterCollisionCheck is true so remove health of monster
      /*  if (this.bulletMonsterCollisionCheck(monster, bullet)) {
        console.log("BULLET HIT");
        
        if (monster.health <= 0) {
          gameOver.innerText = "GAME OVER";
          noLoop();
        }
      } */
    });
  }
  // lets have bullet from middle of spaceship
  // you had a problem, because bullets dont know what player is
  // we need to have the game pass necessary information to the bullet
  // you need to pass the x position to the bullet: player.rightSide
  // you need to pass the y - it will be the middle of the player:
  // player.topSide + (player.height / 2)

  /*Bullet draw:
    if (keyIsDown(SPACE_BAR)) {
      if (frameCount % 60 === 0) {
        this.bullets.push(
          new Bullet(
            this.player.rightSide,
            this.player.topSide + this.player.height / 2
          )
        );
      }

      this.bullets.forEach((bullet, index) => {
        bullet.draw();
        //create bullets but once they disappear from the screen,
        // need to remove them from the array:
        //if (bullet.x + bullet.d <= 0) {
        //this.bullets.splice(index, 1);
        //}
      });
    }*/
  keyPressed() {
    if (keyCode === 32) {
      //    if (frameCount % 30 === 0) {
      this.bullets.push(
        new Bullet(
          this.player.rightSide,
          this.player.topSide + this.player.height / 2,
          2,
          this.bulletEfficiency
        )
      );
      if (this.isPlaying) {
        bulletSound.play();
      } else {
        bulletSound.stop();
      }
    }
    if (keyCode === ENTER_RESETGAME) {
      this.restartGame();
    }
    //  }
  }

  playerCollisionCheck(player, monster) {
    // UA > TB
    // RA > LB
    // LA < RB
    // TA < UB

    if (player.bottomSide < monster.topSide) {
      return false; //They don't touch each other
    }

    if (player.rightSide < monster.leftSide) {
      return false; //They don't touch each other
    }

    if (player.leftSide > monster.rightSide) {
      return false; //They don't touch each other
    }

    if (player.topSide > monster.bottomSide) {
      return false; //They don't touch each other
    }

    if (monster.hasHit) {
      return false;
    }

    //if it reaches here, its touching the player
    monster.hasHit = true;
    return true;
  }

  bulletCollisionCheck(bullet, monster) {
    // UA > TB
    // RA > LB
    // LA < RB
    // TA < UB

    if (bullet.bottomSide < monster.topSide) {
      return false; //They don't touch each other
    }

    if (bullet.rightSide < monster.leftSide) {
      return false; //They don't touch each other
    }

    if (bullet.leftSide > monster.rightSide) {
      return false; //They don't touch each other
    }

    if (bullet.topSide > monster.bottomSide) {
      return false; //They don't touch each other
    }

    if (bullet.hasHit) {
      return false;
    }

    //if it reaches here, its touching the monster
    bullet.hasHit = true;
    return true;
  }
  //create bullets but once they disappear from the screen,
  // need to remove them from the array:
  //if (bullet.x + bullet.r <= 0) {
  //this.bullets.splice(index, 1);
  //}
  //I check if the bullet collides the monster so
  //I use the dist method to mesure the distance between
  //the center of the circle and the position of the monster.
  //If the distance is more than the radius of the circle,
  //they don't touch.
  bulletMonsterCollisionCheck(monster, bullet) {
    if (
      dist(
        this.player.rightSide,
        this.player.topSide + this.player.height / 2,
        monster.leftSide,
        monster.topSide
      ) > bullet.radius
    ) {
      return false;
    }

    if (
      dist(
        this.player.rightSide,
        this.player.topSide + this.player.height / 2,
        monster.leftSide,
        monster.bottomSide
      ) > bullet.radius
    ) {
      return false;
    }

    if (
      dist(
        this.player.rightSide,
        this.player.topSide + this.player.height / 2,
        monster.rightSide,
        monster.topSide
      ) > bullet.radius
    ) {
      return false;
    }

    if (
      dist(
        this.player.rightSide,
        this.player.topSide + this.player.height / 2,
        monster.rightSide,
        monster.bottomSide
      ) > bullet.radius
    ) {
      return false;
    }

    if (bullet.bulletHit) {
      return false;
    }

    //if it reaches here, its touching the bullet
    bullet.bulletHit = true;
    return true;
  }
}
