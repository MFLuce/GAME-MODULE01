class Game {
  constructor() {
    //I create the new player and assign it initials position values:
    this.player = new Player(200, 225);
    //this.background = new Background();
    //this.obstacles = [];
    //this.monsters = [];
    //this.bonus =[];
  }
  //1.2 The setup of the game and i call it in the main.js : I build the canvas//
  setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  }
  /*1.4 I create the element of the game with players and obstacles or whatever: I call
 all the draw functions here and after I'll call the game function in the main file*/
  draw() {
    background("purple"); // Background always before the player draw!
    //1.7 I call the player draw
    this.player.draw(); // I call the player draw function
  }

  //keypressed()
}
