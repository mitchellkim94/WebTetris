import TetrisBlock, { BlockCoords } from "./BasicBlock";

export default class HatBlock extends TetrisBlock {
    constructor(x: number, y: number, w: number, h: number) {
        super(x, y, w, h);
    }

    changeShape(): void {
        if (this.shape > 3) {
            this.shape = 1;
        } else {
            this.shape++;
        }
    }

    coordinateShape(): BlockCoords {
        switch (this.shape) {
            case 1: return [
                { x: this.x, y: this.y },
                { x: this.x - this.w, y: this.y + this.h },
                { x: this.x, y: this.y + this.h },
                { x: this.x + this.w, y: this.y + this.h },
            ];
            case 2: return [
                { x: this.x, y: this.y },
                { x: this.x - this.w, y: this.y - this.h },
                { x: this.x - this.w, y: this.y },
                { x: this.x - this.w, y: this.y + this.h },
            ];
            case 3: return [
                { x: this.x, y: this.y },
                { x: this.x - this.w, y: this.y - this.h },
                { x: this.x, y: this.y - this.h },
                { x: this.x + this.w, y: this.y - this.h },
            ];
            case 4: return [
                { x: this.x, y: this.y },
                { x: this.x + this.w, y: this.y - this.h },
                { x: this.x + this.w, y: this.y },
                { x: this.x + this.w, y: this.y + this.h },
            ];
            default: return [
                { x: this.x, y: this.y },
                { x: this.x + this.w, y: this.y - this.h },
                { x: this.x + this.w, y: this.y },
                { x: this.x + this.w, y: this.y - this.h },
            ]
        }
    }
}