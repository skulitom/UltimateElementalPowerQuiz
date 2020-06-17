import 'phaser';

export default class ResultScene extends Phaser.Scene {
    constructor() {
        super({ key: 'Result', active: false });
    }

    preload() {

    }

    create() {
        this.createAllElements();
    }

}