import 'phaser';

export default class ResultScene extends Phaser.Scene {
    constructor() {
        super({ key: 'Result', active: false });
        this.facebookStuff = {
            name: FBInstant.player.getName(),
            picture: FBInstant.player.getPhoto()
        };

        this.result = 'Fire';

        this.elementalPowers = [
            'Darkness',
            'Fire',
            'Earth',
            'Light'
        ];

        this.calculateResult = this.calculateResult.bind(this);
    }

    init(data) {
        this.score = data.score;
        this.calculateResult();
    }

    preload() {
        this.load.image('profilepicture', this.facebookStuff.picture);
        this.load.image('Fire', 'src/assets/fire.jpg');
        this.load.image('Light', 'src/assets/light.jpg');
        this.load.image('Darkness', 'src/assets/darkness.jpg');
        this.load.image('Earth', 'src/assets/earth.jpg');
    }

    create() {
        console.log(this.score);
        this.add.image(this.game.config.width / 2, 0, this.result);
        this.add.image(this.game.config.width / 2, this.game.config.height / 2, "profilepicture");
    }

    calculateResult() {
        if(this.score <= -4) {
            this.result = this.elementalPowers[0];
        } else if(this.score <= -1) {
            this.result = this.elementalPowers[1];
        } else if(this.score <= 2) {
            this.result = this.elementalPowers[2];
        } else {
            this.result = this.elementalPowers[3];
        }
    }

}