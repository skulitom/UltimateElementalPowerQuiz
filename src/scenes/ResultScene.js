import 'phaser';

export default class ResultScene extends Phaser.Scene {
    constructor() {
        super({ key: 'Result', active: false });

        this.result = 'Fire';

        this.elementalPowers = [
            'Darkness',
            'Fire',
            'Wind',
            'Earth',
            'Space',
            'Time',
            'Water',
            'Ice',
            'Electricity',
            'Light'
        ];

        this.calculateResult = this.calculateResult.bind(this);
        this.createTitle = this.createTitle.bind(this);
        this.createButton = this.createButton.bind(this);
        this.createLabel = this.createLabel.bind(this);
        this.shareClicked = this.shareClicked.bind(this);
    }

    init(data) {
        this.score = data.score;
        this.calculateResult();
    }

    preload() {
        this.load.image('Fire', 'src/assets/fire.jpg');
        this.load.image('Light', 'src/assets/light.jpg');
        this.load.image('Darkness', 'src/assets/darkness.jpg');
        this.load.image('Earth', 'src/assets/earth.jpg');
        this.load.image('Electricity', 'src/assets/electricity.jpg');
        this.load.image('Ice', 'src/assets/ice.jpg');
        this.load.image('Space', 'src/assets/space.jpg');
        this.load.image('Time', 'src/assets/time.jpg');
        this.load.image('Water', 'src/assets/water.jpg');
        this.load.image('Wind', 'src/assets/wind.jpg');
    }

    create() {
        this.imageResult = this.add.image(this.game.config.width / 2, this.game.config.height / 2, this.result);
        this.imageResult.displayWidth = this.game.config.width / 2;
        this.imageResult.scaleY = this.imageResult.scaleX;
        this.imageResult.y = 90 + (this.imageResult.scaleY*this.imageResult.height)/2;
        this.createTitle('Your elemental power is: '+this.result+'!');
        this.createButton(this.shareClicked);
        this.createLabel('Share your result!');
    }

    createButton(func) {
        const width = this.game.config.width;
        let button = this.add.graphics();
        button.fillStyle(0x000000, 0.6); // color, alpha
        button.fillRoundedRect(0, 0, width/2, 100); // x, y, width, height, radius
        button.lineStyle(3, 0xffffff, 1); // lineWidth, color, alpha
        button.strokeRoundedRect(0, 0, width/2, 100); // x, y, width, height, radius
        button.setInteractive(new Phaser.Geom.Rectangle(0, 0, width/2, 100), Phaser.Geom.Rectangle.Contains);
        button.input.cursor = "pointer";
        button.name = "button_test";
        button.x = width/4;
        button.y = 120 + (this.imageResult.scaleY*this.imageResult.height);
        button.setInteractive();
        button.on('pointerdown', func);
        return button;
    }

    createLabel(text) {
        const width = this.game.config.width;
        let label = this.add.text(width/2,170 + (this.imageResult.scaleY*this.imageResult.height),text,{
            fontFamily:'Arial',
            color:'#ffffff',
            align:'center',
        }).setFontSize(18);
        label.setOrigin(0.5);
        return label;
    }

    createTitle(text) {
        const width = this.game.config.width;
        let label = this.add.text(width/2,50,text,{
            fontFamily:'Arial',
            color:'#ffffff',
            align:'center',
        }).setFontSize(32);
        label.setOrigin(0.5);
        return label;
    }

    shareClicked(){
        FBInstant.shareAsync({
            intent: 'SHARE',
            image: FBInstant.player.getPhoto(),
            text: FBInstant.player.getName() + ' elemental power is: ' + this.result + '. Check what your power is now!',
            data: { myReplayData: '...' },
        }).then(function() {
            // continue with the game.
        });
    }

    calculateResult() {
        if(this.score <= -16) {
            this.result = this.elementalPowers[0];
        } else if(this.score <= -12) {
            this.result = this.elementalPowers[1];
        } else if(this.score <= -8) {
            this.result = this.elementalPowers[2];
        } else if(this.score <= -4) {
            this.result = this.elementalPowers[3];
        } else if(this.score <= 0) {
            this.result = this.elementalPowers[4];
        } else if(this.score <= 4) {
            this.result = this.elementalPowers[5];
        } else if(this.score <= 8) {
            this.result = this.elementalPowers[6];
        } else if(this.score <= 12) {
            this.result = this.elementalPowers[7];
        } else if(this.score <= 16) {
            this.result = this.elementalPowers[8];
        } else {
            this.result = this.elementalPowers[9];
        }
    }

}