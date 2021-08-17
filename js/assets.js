let backgroundImg;
let spaceshipImg;
let ship1Img;
let ship2Img;
let ship3Img;
let ship4Img;
let ship5Img;
let ship6Img;
let ship1Hit;
let ship2Hit;
let ship3Hit;
let ship4Hit;
let ship5Hit;
let ship6Hit;
let ship1Exploded;
let ship2Exploded;
let ship3Exploded;
let ship4Exploded;
let ship5Exploded;
let ship6Exploded;

function preload() {
  backgroundImg = loadImage("./assets/space-background.jpg");
  spaceshipImg = loadImage("./assets/spaceship-img.png");
  ship1Img = loadImage("./assets/ship1.png");
  ship2Img = loadImage("./assets/ship2.png");
  ship3Img = loadImage("./assets/ship3.png");
  ship4Img = loadImage("./assets/ship4.png");
  ship5Img = loadImage("./assets/ship5.png");
  ship6Img = loadImage("./assets/ship6.png");

  ship1Hit2 = loadImage("./assets/ship-Explosions2/Ship1_Explosion_002.png");
  ship2Hit2 = loadImage("./assets/ship-Explosions2/Ship2_Explosion_002.png");
  ship3Hit2 = loadImage("./assets/ship-Explosions2/Ship3_Explosion_002.png");
  ship4Hit2 = loadImage("./assets/ship-Explosions2/Ship4_Explosion_002.png");
  ship5Hit2 = loadImage("./assets/ship-Explosions2/Ship5_Explosion_002.png");
  ship6Hit2 = loadImage("./assets/ship-Explosions2/Ship6_Explosion_002.png");

  MONSTERS_GALLERY = [
    ship1Img,
    ship2Img,
    ship3Img,
    ship4Img,
    ship5Img,
    ship6Img,
  ];
}
