import * as Phaser from "phaser";

export default class Monkey extends Phaser.GameObjects.Sprite {

    private stepSize:number = 2;

    constructor(scene:Phaser.Scene,x:number,y:number){
        super(scene,x,y, "monkey");
        this.scene.add.existing(this);

    }

    public mover() {
        this.x = this.x + this.stepSize;
    }

}

