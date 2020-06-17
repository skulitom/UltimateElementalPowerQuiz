import 'phaser';

export default class ResultScene extends Phaser.Scene {
    constructor() {
        super({ key: 'Result', active: false });
        this.facebookStuff = {
            name: FBInstant.player.getName(),
            picture: FBInstant.player.getPhoto()
        };
    }

    init(data) {
        this.score = data.score;
    }

    preload() {
        this.load.image('profilepicture', this.facebookStuff.picture);
        this.load.image('fire', 'src/assets/fire.jpg');
    }

    create() {
        console.log(this.score);
        this.add.image(this.game.config.width / 2, 0, "fire");
        this.add.image(this.game.config.width / 2, this.game.config.height / 2, "profilepicture");
    }

}