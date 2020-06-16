import 'phaser';

export default class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'Game', active: false });
    }

    preload() {
        this.load.image('logo', 'src/assets/logo.png');
    }

    create() {
        try{
            FBInstant.startGameAsync()
                .then(function() {
                    let contextId = FBInstant.context.getID();
                    let contextType = FBInstant.context.getType();

                    let playerName = FBInstant.player.getName();
                    let playerPic = FBInstant.player.getPhoto();
                    let playerId = FBInstant.player.getID();
                });
        }
        catch(err) {
            console.log('Analytics Connection Error');
        }
        const width = this.game.config.width;
        const height = this.game.config.height;
        this.add.image(width/2, height/2, 'logo');
    }
}