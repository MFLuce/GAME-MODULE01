/* 1.1 I put the P5 functions that I need*/

//I create the constant game to initiate the game
const game = new Game();

/*1.3 This function is called once and before the others except preload 
This function creates set up logic of the game.All setup functions are 
in the Game Class, so I just call the game setup*/
function setup() {
  game.setup();
}
/* 1.5 This function is called 60 times/seconde and it's where I must call 
the game functions I define in the Game class */
function draw() {
  game.draw();
}

function keyPressed() {
  game.keyPressed();
}
