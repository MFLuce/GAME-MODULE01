let backgroundImg;
let spaceshipImg;
let ship1Img;
let ship2Img;
let ship3Img;
let ship4Img;
let ship5Img;
let ship6Img;
let ship1Hit1;
let ship2Hit1;
let ship3Hit1;
let ship4Hit1;
let ship5Hit1;
let ship6Hit1;
let ship1Hit2;
let ship2Hit2;
let ship3Hit2;
let ship4Hit2;
let ship5Hit2;
let ship6Hit2;

function preload() {
  backgroundImg = loadImage("./assets/space-background.jpg");
  spaceshipImg = loadImage("./assets/spaceship-img.png");
  ship1Img = loadImage("./assets/ship1.png");
  ship2Img = loadImage("./assets/ship2.png");
  ship3Img = loadImage("./assets/ship3.png");
  ship4Img = loadImage("./assets/ship4.png");
  ship5Img = loadImage("./assets/ship5.png");
  ship6Img = loadImage("./assets/ship6.png");

  ship1Hit1 = loadImage("./assets/ship-Explosions1/Ship1_Explosion_001.png");
  ship2Hit1 = loadImage("./assets/ship-Explosions1/Ship2_Explosion_001.png");
  ship3Hit1 = loadImage("./assets/ship-Explosions1/Ship3_Explosion_001.png");
  ship4Hit1 = loadImage("./assets/ship-Explosions1/Ship4_Explosion_001.png");
  ship5Hit1 = loadImage("./assets/ship-Explosions1/Ship5_Explosion_001.png");
  ship6Hit1 = loadImage("./assets/ship-Explosions1/Ship6_Explosion_001.png");

  ship1Hit2 = loadImage("./assets/ship-Explosions2/Ship1_Explosion_002.png");
  ship2Hit2 = loadImage("./assets/ship-Explosions2/Ship2_Explosion_002.png");
  ship3Hit2 = loadImage("./assets/ship-Explosions2/Ship3_Explosion_002.png");
  ship4Hit2 = loadImage("./assets/ship-Explosions2/Ship4_Explosion_002.png");
  ship5Hit2 = loadImage("./assets/ship-Explosions2/Ship5_Explosion_002.png");
  ship6Hit2 = loadImage("./assets/ship-Explosions2/Ship6_Explosion_002.png");

  MONSTERS_GALLERY = [
    [ship1Img, ship1Hit1, ship1Hit2],
    [ship2Img, ship2Hit1, ship2Hit2],
    [ship3Img, ship3Hit1, ship3Hit2],
    [ship4Img, ship4Hit1, ship4Hit2],
    [ship5Img, ship5Hit1, ship5Hit2],
    [ship6Img, ship6Hit1, ship6Hit2],
  ];

  //  MONSTERS_GALLERY = [ship1Img, ship2Img, ship3Img, ship4Img, ship5Img, ship6Img];
}
