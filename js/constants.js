/* 1.0 I create the constants of the game*/

const CANVAS_HEIGHT = 500;

const CANVAS_WIDTH = 1000;

const SPACE_BAR = 32;

const DOWN_ARROW = 40;

const UP_ARROW = 38;

const LEFT_ARROW = 37;

const RIGHT_ARROW = 39;

let MONSTERS_GALLERY = [
  monster1Img,
  monster2Img,
  monster3Img,
  monster4Img,
  monster5Img,
  monster6Img,
];

//DOM MANIPULATIONS TO PERSONALIZE THE USER EXPERIENCE
//It's the selector where we want to put some informations
const scoreHolder = document.querySelector("h1 span");
const gameOver = document.getElementById("gameOver");
