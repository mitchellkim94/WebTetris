import TetrisBlock from "./BasicBlock";

export default class BarBlock extends TetrisBlock {
    constructor(x: number, y: number) {
        super(x, y);
    }

    changeShape(): void {
        if (this.shape > 2) {
            this.shape = 1;
        } else {
            this.shape++;
        }
    }

    coordinateShape() {
        switch (this.shape) {
            case 1: 
                this.shapeCoords = [
                    [1, 1, 1, 1],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                ];
                break;
            case 2: 
                this.shapeCoords = [
                    [0, 1, 0, 0],
                    [0, 1, 0, 0],
                    [0, 1, 0, 0],
                    [0, 1, 0, 0],
                ];
                break;
            default: 
                this.shapeCoords = [
                    [1, 1, 1, 1],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                ]
        }
    }
}