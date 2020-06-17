//https://www.facebook.com/embed/instantgames/187465855983655/player?game_url=https://localhost:8080

import 'phaser';
import config from './config';
import GameScene from './scenes/GameScene';
import ResultScene from './scenes/ResultScene';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Game', GameScene);
    this.scene.add('Result', ResultScene);
    this.scene.start('Game');
  }
}

FBInstant.initializeAsync().then(function() {
  FBInstant.setLoadingProgress(100);
  try{
    FBInstant.startGameAsync()
        .then(function() {
          let contextId = FBInstant.context.getID();
          let contextType = FBInstant.context.getType();

          let playerName = FBInstant.player.getName();
          let playerPic = FBInstant.player.getPhoto();
          let playerId = FBInstant.player.getID();
          new Game();
        });
  }
  catch(err) {
    console.log('Analytics Connection Error');
  }
}).catch(function(error) {
  console.log(error.message);
});
