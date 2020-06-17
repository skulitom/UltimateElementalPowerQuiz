import 'phaser';

export default class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'Game', active: false });
        this.button1;
        this.label1;
        this.button2;
        this.label2;
        this.button3;
        this.label3;
        this.button4;
        this.label4;
        this.title;
        this.score = 0;
        this.questionNumber = 0;
        this.questionTotal = 2;
        this.questions = [
            'Which color do you prefer?',
            'Where would you rather spend a holiday?',
            'Which animal do you prefer?'
        ];

        this.answerLabels = [
            'Black',
            'Red',
            'Green',
            'Blue',
            'Home',
            'Beach',
            'Forest',
            'Mountains',
            'Lizard',
            'Cat',
            'Fish',
            'Dog',
        ];
        this.onClickButton = this.onClickButton.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.createAllElements = this.createAllElements.bind(this);
        this.removeAllElements = this.removeAllElements.bind(this);
    }

    preload() {

    }

    create() {
        this.createAllElements();
    }


    createButton(position, func) {
        const width = this.game.config.width;
        const height = this.game.config.height;
        let button = this.add.graphics();
        button.fillStyle(0x000000, 0.6); // color, alpha
        button.fillRoundedRect(0, 0, width/2, 100); // x, y, width, height, radius
        button.lineStyle(3, 0xffffff, 1); // lineWidth, color, alpha
        button.strokeRoundedRect(0, 0, width/2, 100); // x, y, width, height, radius
        button.setInteractive(new Phaser.Geom.Rectangle(0, 0, width/2, 100), Phaser.Geom.Rectangle.Contains);
        button.input.cursor = "pointer";
        button.name = "button_test";
        button.x = width/4;
        button.y = 100 + (position*150);
        button.setInteractive();
        button.on('pointerdown', func);
        return button;
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

    createLabel(position, text) {
        const width = this.game.config.width;
        let label = this.add.text(width/2,150 + (position*150),text,{
            fontFamily:'Arial',
            color:'#ffffff',
            align:'center',
        }).setFontSize(18);
        label.setOrigin(0.5);
        return label;
    }

    onClickButton(score) {
        this.score += score;
        this.nextQuestion();
    }

    nextQuestion() {
        if(this.questionNumber >= this.questionTotal) {
            this.removeAllElements();
        } else {
            this.questionNumber+=1;
            this.removeAllElements();
            this.createAllElements();
        }
    }

    createAllElements() {
        this.title = this.createTitle(this.questions[this.questionNumber]);
        this.button1 = this.createButton(0, () => this.onClickButton( -2));
        this.label1 = this.createLabel(0, this.answerLabels[this.questionNumber*4]);
        this.button2 = this.createButton(1, () => this.onClickButton( -1));
        this.label2 = this.createLabel(1, this.answerLabels[this.questionNumber*4 + 1]);
        this.button3 = this.createButton(2, () => this.onClickButton( +1));
        this.label3 = this.createLabel(2, this.answerLabels[this.questionNumber*4 + 2]);
        this.button4 = this.createButton(3, () => this.onClickButton( +2));
        this.label4 = this.createLabel(3, this.answerLabels[this.questionNumber*4 + 3]);
    }

    removeAllElements() {
        this.button1.destroy();
        this.label1.destroy();
        this.button2.destroy();
        this.label2.destroy();
        this.button3.destroy();
        this.label3.destroy();
        this.button4.destroy();
        this.label4.destroy();
        this.title.destroy();
    }


}