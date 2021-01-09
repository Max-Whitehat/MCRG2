var canvas, backgroundImage;

var carsArray = []

var gameState = 0;
var playerCount;
var allPlayers;
var c1,c2,c3,c4
var distance = 0;
var database;

var form, player, game;

var car1, car2, car3, car4, ground, trackjpg, trackpng


function preload(){
  car1 = loadImage("images/car1.png")
  car2 = loadImage("images/car2.png")
  car3 = loadImage("images/car3.png")
  car4 = loadImage("images/car4.png")
  ground = loadImage("images/ground.png")
  trackjpg = loadImage("images/track.jpg")
  trackpng = loadImage("images/track.png")

}


function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2){
    clear();
    game.end();
  }

}
