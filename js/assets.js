let backgroundImg;
let spaceshipImg;

let ship01;
let ship01Hit01;
let ship01Hit02;
let ship01Hit03;
let ship01Hit04;
let ship01Hit05;
let ship01Hit06;
let ship01Hit07;
let ship01Hit08;
let ship01Hit09;
let ship01Hit10;

let ship02;
let ship02Hit01;
let ship02Hit02;
let ship02Hit03;
let ship02Hit04;
let ship02Hit05;
let ship02Hit06;
let ship02Hit07;
let ship02Hit08;
let ship02Hit09;
let ship02Hit10;
let ship02Hit11;
let ship02Hit12;

let ship03;
let ship03Hit01;
let ship03Hit02;
let ship03Hit03;
let ship03Hit04;
let ship03Hit05;
let ship03Hit06;
let ship03Hit07;
let ship03Hit08;
let ship03Hit09;
let ship03Hit10;
let ship03Hit11;

let ship04;
let ship04Hit01;
let ship04Hit02;
let ship04Hit03;
let ship04Hit04;
let ship04Hit05;
let ship04Hit06;
let ship04Hit07;
let ship04Hit08;
let ship04Hit09;
let ship04Hit10;
let ship04Hit11;

let ship05;
let ship05Hit01;
let ship05Hit02;
let ship05Hit03;
let ship05Hit04;
let ship05Hit05;
let ship05Hit06;
let ship05Hit07;
let ship05Hit08;
let ship05Hit09;
let ship05Hit10;
let ship05Hit11;

let ship06;
let ship06Hit01;
let ship06Hit02;
let ship06Hit03;
let ship06Hit04;
let ship06Hit05;
let ship06Hit06;
let ship06Hit07;
let ship06Hit08;
let ship06Hit09;
let ship06Hit10;
let ship06Hit11;

let soundGame;
let bulletSound;

function preload() {
  soundGame = loadSound(
    "./assets/Sounds/475620__tyops__game-intro-space-futuristic.wav"
  );
  bulletSound = loadSound(
    "./assets/Sounds/387867__runningmind__weapon-player-4.wav"
  );
  backgroundImg = loadImage("./assets/space-background.jpg");
  spaceshipImg = loadImage("./assets/spaceship-img.png");

  ship01 = loadImage("./assets/ship1/Ship1.png");
  ship01Hit01 = loadImage("./assets/ship1/Ship1_Explosion_001.png");
  ship01Hit02 = loadImage("./assets/ship1/Ship1_Explosion_002.png");
  ship01Hit03 = loadImage("./assets/ship1/Ship1_Explosion_003.png");
  ship01Hit04 = loadImage("./assets/ship1/Ship1_Explosion_004.png");
  ship01Hit05 = loadImage("./assets/ship1/Ship1_Explosion_005.png");
  ship01Hit06 = loadImage("./assets/ship1/Ship1_Explosion_006.png");
  ship01Hit07 = loadImage("./assets/ship1/Ship1_Explosion_007.png");
  ship01Hit08 = loadImage("./assets/ship1/Ship1_Explosion_008.png");
  ship01Hit09 = loadImage("./assets/ship1/Ship1_Explosion_009.png");
  ship01Hit10 = loadImage("./assets/ship1/Ship1_Explosion_010.png");

  ship02 = loadImage("./assets/ship2/Ship2.png");
  ship02Hit01 = loadImage("./assets/ship2/Ship2_Explosion_001.png");
  ship02Hit02 = loadImage("./assets/ship2/Ship2_Explosion_002.png");
  ship02Hit03 = loadImage("./assets/ship2/Ship2_Explosion_003.png");
  ship02Hit04 = loadImage("./assets/ship2/Ship2_Explosion_004.png");
  ship02Hit05 = loadImage("./assets/ship2/Ship2_Explosion_005.png");
  ship02Hit06 = loadImage("./assets/ship2/Ship2_Explosion_006.png");
  ship02Hit07 = loadImage("./assets/ship2/Ship2_Explosion_007.png");
  ship02Hit08 = loadImage("./assets/ship2/Ship2_Explosion_008.png");
  ship02Hit09 = loadImage("./assets/ship2/Ship2_Explosion_009.png");
  ship02Hit10 = loadImage("./assets/ship2/Ship2_Explosion_010.png");
  ship02Hit11 = loadImage("./assets/ship2/Ship2_Explosion_011.png");
  ship02Hit12 = loadImage("./assets/ship2/Ship2_Explosion_012.png");

  ship03 = loadImage("./assets/ship3/Ship3.png");
  ship03Hit01 = loadImage("./assets/ship3/Ship3_Explosion_001.png");
  ship03Hit02 = loadImage("./assets/ship3/Ship3_Explosion_002.png");
  ship03Hit03 = loadImage("./assets/ship3/Ship3_Explosion_003.png");
  ship03Hit04 = loadImage("./assets/ship3/Ship3_Explosion_004.png");
  ship03Hit05 = loadImage("./assets/ship3/Ship3_Explosion_005.png");
  ship03Hit06 = loadImage("./assets/ship3/Ship3_Explosion_006.png");
  ship03Hit07 = loadImage("./assets/ship3/Ship3_Explosion_007.png");
  ship03Hit08 = loadImage("./assets/ship3/Ship3_Explosion_008.png");
  ship03Hit09 = loadImage("./assets/ship3/Ship3_Explosion_009.png");
  ship03Hit10 = loadImage("./assets/ship3/Ship3_Explosion_010.png");
  ship03Hit11 = loadImage("./assets/ship3/Ship3_Explosion_011.png");

  ship04 = loadImage("./assets/ship4/Ship4.png");
  ship04Hit01 = loadImage("./assets/ship4/Ship4_Explosion_001.png");
  ship04Hit02 = loadImage("./assets/ship4/Ship4_Explosion_002.png");
  ship04Hit03 = loadImage("./assets/ship4/Ship4_Explosion_003.png");
  ship04Hit04 = loadImage("./assets/ship4/Ship4_Explosion_004.png");
  ship04Hit05 = loadImage("./assets/ship4/Ship4_Explosion_005.png");
  ship04Hit06 = loadImage("./assets/ship4/Ship4_Explosion_006.png");
  ship04Hit07 = loadImage("./assets/ship4/Ship4_Explosion_007.png");
  ship04Hit08 = loadImage("./assets/ship4/Ship4_Explosion_008.png");
  ship04Hit09 = loadImage("./assets/ship4/Ship4_Explosion_009.png");
  ship04Hit10 = loadImage("./assets/ship4/Ship4_Explosion_010.png");
  ship04Hit11 = loadImage("./assets/ship4/Ship4_Explosion_011.png");

  ship05 = loadImage("./assets/ship5/Ship5.png");
  ship05Hit01 = loadImage("./assets/ship5/Ship5_Explosion_001.png");
  ship05Hit02 = loadImage("./assets/ship5/Ship5_Explosion_002.png");
  ship05Hit03 = loadImage("./assets/ship5/Ship5_Explosion_003.png");
  ship05Hit04 = loadImage("./assets/ship5/Ship5_Explosion_004.png");
  ship05Hit05 = loadImage("./assets/ship5/Ship5_Explosion_005.png");
  ship05Hit06 = loadImage("./assets/ship5/Ship5_Explosion_006.png");
  ship05Hit07 = loadImage("./assets/ship5/Ship5_Explosion_007.png");
  ship05Hit08 = loadImage("./assets/ship5/Ship5_Explosion_008.png");
  ship05Hit09 = loadImage("./assets/ship5/Ship5_Explosion_009.png");
  ship05Hit10 = loadImage("./assets/ship5/Ship5_Explosion_010.png");
  ship05Hit11 = loadImage("./assets/ship5/Ship5_Explosion_011.png");

  ship06 = loadImage("./assets/ship6/Ship6.png");
  ship06Hit01 = loadImage("./assets/ship6/Ship6_Explosion_001.png");
  ship06Hit02 = loadImage("./assets/ship6/Ship6_Explosion_002.png");
  ship06Hit03 = loadImage("./assets/ship6/Ship6_Explosion_003.png");
  ship06Hit04 = loadImage("./assets/ship6/Ship6_Explosion_004.png");
  ship06Hit05 = loadImage("./assets/ship6/Ship6_Explosion_005.png");
  ship06Hit06 = loadImage("./assets/ship6/Ship6_Explosion_006.png");
  ship06Hit07 = loadImage("./assets/ship6/Ship6_Explosion_007.png");
  ship06Hit08 = loadImage("./assets/ship6/Ship6_Explosion_008.png");
  ship06Hit09 = loadImage("./assets/ship6/Ship6_Explosion_009.png");
  ship06Hit10 = loadImage("./assets/ship6/Ship6_Explosion_010.png");
  ship06Hit11 = loadImage("./assets/ship6/Ship6_Explosion_011.png");

  MONSTERS_GALLERY = [
    [
      ship01,
      ship01Hit01,
      ship01Hit02,
      ship01Hit03,
      ship01Hit04,
      ship01Hit05,
      ship01Hit06,
      ship01Hit07,
      ship01Hit08,
      ship01Hit09,
      ship01Hit10,
    ],
    [
      ship02,
      ship02Hit01,
      ship02Hit02,
      ship02Hit03,
      ship02Hit04,
      ship02Hit05,
      ship02Hit06,
      ship02Hit07,
      ship02Hit08,
      ship02Hit09,
      ship02Hit10,
      ship02Hit11,
      ship02Hit12,
    ],
    [
      ship03,
      ship03Hit01,
      ship03Hit02,
      ship03Hit03,
      ship03Hit04,
      ship03Hit05,
      ship03Hit06,
      ship03Hit07,
      ship03Hit08,
      ship03Hit09,
      ship03Hit10,
      ship03Hit11,
    ],
    [
      ship04,
      ship04Hit01,
      ship04Hit02,
      ship04Hit03,
      ship04Hit04,
      ship04Hit05,
      ship04Hit06,
      ship04Hit07,
      ship04Hit08,
      ship04Hit09,
      ship04Hit10,
      ship04Hit11,
    ],
    [
      ship05,
      ship05Hit01,
      ship05Hit02,
      ship05Hit03,
      ship05Hit04,
      ship05Hit05,
      ship05Hit06,
      ship05Hit07,
      ship05Hit08,
      ship05Hit09,
      ship05Hit10,
      ship05Hit11,
    ],
    [
      ship06,
      ship06Hit01,
      ship06Hit02,
      ship06Hit03,
      ship06Hit04,
      ship06Hit05,
      ship06Hit06,
      ship06Hit07,
      ship06Hit08,
      ship06Hit09,
      ship06Hit10,
      ship06Hit11,
    ],
  ];
}
