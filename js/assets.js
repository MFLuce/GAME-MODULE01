let backgroundImg;
let spaceshipImg;
let monster1Img;
let monster2Img;
let monster3Img;
let monster4Img;
let monster5Img;
let monster6Img;

function preload() {
  backgroundImg = loadImage("./assets/space-background.jpg");
  spaceshipImg = loadImage("./assets/spaceship-img.png");
  monster1Img = loadImage("./assets/Monster1.png");
  monster2Img = loadImage("./assets/Monster2.png");
  monster3Img = loadImage("./assets/Monster3.png");
  monster4Img = loadImage("./assets/Monster4.png");
  monster5Img = loadImage("./assets/Monster5.png");
  monster6Img = loadImage("./assets/Monster6.png");
  MONSTERS_GALLERY = [
    monster1Img,
    monster2Img,
    monster3Img,
    monster4Img,
    monster5Img,
    monster6Img,
  ];
}
