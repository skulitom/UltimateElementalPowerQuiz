import 'phaser';

export default class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'Game', active: false });
    }

    preload() {

    }

    create() {
        const width = this.game.config.width;
        const height = this.game.config.height;
        //CREATE A SIMPLE RECT WITH BORDER
        let button = this.add.graphics();
        button.fillStyle(0x000000, 0.6); // color, alpha
        button.fillRoundedRect(0, 0, width/2, 100); // x, y, width, height, radius
        button.lineStyle(3, 0x6a7901, 1); // lineWidth, color, alpha
        button.strokeRoundedRect(0, 0, width/2, 100); // x, y, width, height, radius
        button.setInteractive(new Phaser.Geom.Rectangle(0, 0, width/2, 100), Phaser.Geom.Rectangle.Contains);
        button.input.cursor = "pointer";
        button.name = "button_test";
        button.x = width/4;
        button.y = 100;
        button.setInteractive();
        button.on('pointerdown', this.onClickButton1);
        let label = this.add.text(width/2,150,'Hello World',{
            fontFamily:'Arial',
            color:'#ffffff',
            align:'center',
        }).setFontSize(18);
        label.setOrigin(0.5);

        //CREATE A BORDER ON TOP OF BUTTON
        let border = this.add.graphics();
        border.lineStyle(3, 0xffffff, 1);
        border.strokeRoundedRect(0, 0, width/2, 100, 10);
        border.x = width/4;
        border.y = 100;
        border.alpha = 0;

        //YOYO EFFECT ON BORDER
        let tween = this.tweens.add({
            targets: border,
            duration: 2000,
            delay: 1000,
            alpha: 1,
            repeat: -1,
            yoyo: true
        });
    }

    onClickButton1() {
        console.log('Click!');
    }
}