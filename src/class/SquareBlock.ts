import TetrisBlock from "./BasicBlock";

export default class SquareBlock extends TetrisBlock {
    constructor(x: number, y: number) {
        super(x, y);
    }

    changeShape(): void {
        this.shape = 1;
    }

    coordinateShape() {
        this.shapeCoords = [
            [1, 1],
            [1, 1],
        ];
    }
}