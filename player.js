class Player{
    constructor(){

    }
 getPlayerCount(){
     var playerCountReference=database.ref('playerCount');
     playerCountReference.on("value",function(data){playerCount=data.val();})
 }
 updatePlayerCount(){
     database.ref('/').update({playerCount:playerCount})
  
 }
 updatePlayername(MyName){
     var playerIndex="player"+playerCount
     database.ref('playerIndex').update({Name:MyName})
 }
}