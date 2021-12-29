import TetrisBlock, { BlockCoords } from "./BasicBlock";

export default class BarBlock extends TetrisBlock {
    constructor(x: number, y: number, w: number, h: number) {
        super(x, y, w, h);
    }

    changeShape(): void {
        if (this.shape > 1) {
            this.shape = 1;
        } else {
            this.shape++;
        }
    }

    coordinateShape(): BlockCoords {
        switch (this.shape) {
            case 1: return [
                { x: this.x, y: this.y },
                { x: this.x, y: this.y + this.h },
                { x: this.x, y: this.y + this.h * 2 },
                { x: this.x, y: this.y + this.h * 3},
            ];
            case 2: return [
                { x: this.x, y: this.y },
                { x: this.x + this.w, y: this.y },
                { x: this.x + this.w * 2, y: this.y },
                { x: this.x + this.w * 3, y: this.y },
            ];
            default: return [
                { x: this.x, y: this.y },
                { x: this.x, y: this.y + this.h },
                { x: this.x, y: this.y + this.h * 2 },
                { x: this.x, y: this.y + this.h * 3},
            ];
        }
    }
}