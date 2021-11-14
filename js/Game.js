class Game {
  constructor() {}
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  update(state){
    database.ref("/").update({
      gameState: state
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();
    player1=createSprite(width / 4 - 200, height-300 );
      player1.addImage("playerpic",playerimg);
      player2=createSprite(width / 3 + 600, height -300);
      player2.addImage("playerpic2",playerimg2);
      player3=createSprite(width/2+800,height-300);
      player3.addImage("playerpic3",playerimg3);
      player4=createSprite(width/3+100,height-200);
      player4.addImage("playerpic4",playerimg4);
      players=[player1,player2,player3,player4];
      powerups=new Group();
      powerups2=new Group();
    //drawSprites();
  
  this.addSprites(
    powerups,
    18,
    powerupimg,
    0.3
  );

  }
  addSprites(spriteGroup, numberOfSprites, spriteImage, scale ){
    for (var i = 0; i < numberOfSprites; i++) {
      var x, y;

      //C41 //SA
      
        x = random(width / 2 + 150, width / 2 - 150);
        y = random(-height * 4.5, height - 400);
      
      var sprite = createSprite(x, y);
      sprite.addImage("sprite", spriteImage);

      sprite.scale = scale;
      spriteGroup.add(sprite);
    }
  }
  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");

  
  
  }

  play() {
    this.handleElements();
    Player.getPlayersInfo();

    
    if(allPlayers!==undefined){
      image(gameimage,0,0,width,height);
       var index = 0;
      for (var plr in allPlayers) {
        //add 1 to the index for every loop
        index = index + 1;

        //use data from the database to display the cars in x and y direction
        var x = allPlayers[plr].positionX;
        var y = height - allPlayers[plr].positionY;
        players[index - 1].position.x = x;
        players[index - 1].position.y = y;
      }
        this.handleControls();
    drawSprites();
  }

}
handleControls(){
  if(keyIsDown(LEFT_ARROW)){
    player.positionX -= 5;
    player.update();
  }
  if(keyIsDown(RIGHT_ARROW)){
    player.positionX += 5;
    player.update();

  }
  if(keyIsDown(UP_ARROW)){
    player.positionY += 5;
    player.update();
  }
  if(keyIsDown(DOWN_ARROW)){
    player.positionY -= 5;
    player.update();
  }}
  
}
