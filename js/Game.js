class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    c1 = createSprite(300,1100,20,20) //0
    c2 = createSprite(600,1100,20,20) //1
    c3 = createSprite(900,1100,20,20)//2
    c4 = createSprite(1200,1100,20,20)//3

    c1.addImage(car1)
    c2.addImage(car2)
    c3.addImage(car3)
    c4.addImage(car4)

    carsArray = [c1,c2,c3,c4]

  }

  play(){
    background(trackpng)


    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();

    


    if(allPlayers !== undefined){

      image(trackjpg,0,-displayHeight*4+300,displayWidth,displayHeight*5);

      var display_position = 130;
      var index = 0
      var positionx = 400
    
      for(var plr in allPlayers){

        var positiony = displayHeight - allPlayers[plr].distance + 200

        if (plr === "player" + player.index){


    camera.position.x = displayWidth/2
    camera.position.y = carsArray[index].y

          
          fill("red")

         carsArray[index].shapeColor = "red"


        }else{
          fill("black");

        }


      //  textSize(15);
     //   text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)y

     carsArray[index].x=positionx
     carsArray[index].y=positiony
     positionx += 200



index = index+1
    
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      console.log(player.distance)
      player.update();
    }


    if(player.distance === 4150){
      gameState = 2

    }

drawSprites()


  }


}

end(){
  console.log("gameover")
  game.update(2);
}

}
