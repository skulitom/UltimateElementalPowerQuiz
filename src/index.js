import 'phaser';
import config from './config';
import GameScene from './scenes/GameScene';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Game', GameScene);
    this.scene.start('Game');
  }
}

FBInstant.initializeAsync().then(function() {
  FBInstant.setLoadingProgress(100);
  new Game();
}).catch(function(error) {
  console.log(error.message);
});
