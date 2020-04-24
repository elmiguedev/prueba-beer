import * as Phaser from "phaser";
import Monkey from "../entities/monkey.entity";

export default class MainScene extends Phaser.Scene {

    // properties
    // ----------------------

    private tecla:any;
    private mono:Monkey;

    // constructor
    // ----------------------


    constructor() {
        super({
            key: "MainScene"
        })
    }

    // methods
    // ----------------------

    init() {
        this.tecla = this.input.keyboard.addKey("RIGHT");

        this.add.text(20,20,"HOLA BEER JS yay");
        this.mono = new Monkey(this,100,30);

    }

    update() {
        if (this.tecla.isDown) {
            this.mono.mover();
        }
    }

}
