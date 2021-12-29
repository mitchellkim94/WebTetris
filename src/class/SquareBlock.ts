import TetrisBlock, { BlockCoords } from "./BasicBlock";

export default class HatBlock extends TetrisBlock {
    constructor(x: number, y: number, w: number, h: number) {
        super(x, y, w, h);
    }

    changeShape(): void {
        return;
    }

    coordinateShape(): BlockCoords {
        return [
            { x: this.x, y: this.y },
            { x: this.x + this.w, y: this.y },
            { x: this.x, y: this.y + this.h },
            { x: this.x + this.w, y: this.y + this.h },
        ];
    }
}