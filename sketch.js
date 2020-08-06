var gameState = 0 
var playerCount; 
var form,player,game;
var database; 
var allPlayers;

function setup(){
  database = firebase.database();
 game = new Game(); 
 game.getState(); 
 game.start();
 
}

function draw(){
  background("white");
  
   
  
}

