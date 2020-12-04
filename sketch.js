var ball;
var form,player,game;
var playerCount;
var database;
var gameState=0;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    console.log("databaseConnected"+database);
    game = new Game();
    game.getGameState();
    game.start();
    //firebase.database(database);
}

function draw(){
    background("white");

}


