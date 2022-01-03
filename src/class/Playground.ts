export default class Playground {
    private _blockWidth: number;
    private _blockHeight: number;
    private _cols: number;
    private _rows: number;
    
    public coords: number[][] = [];
    public stackCount: number[] = [];

    constructor(bWidth: number, bHeight: number, cols: number, rows: number) {
        this._blockWidth = bWidth;
        this._blockHeight = bHeight;
        this._cols = cols;
        this._rows = rows;
    }

    /**
     * Getters
     */
    get cols(): number {
        return this._cols;
    }
    get rows(): number {
        return this._rows;
    }
    get B_WIDTH(): number {
        return this._blockWidth;
    }
    get B_HEIGHT(): number {
        return this._blockHeight;
    }
    get GROUND_WIDTH(): number {
        return this.cols * this.B_WIDTH;
    }
    get GROUND_HEIGHT(): number {
        return this.rows * this.B_HEIGHT;
    }
    get MAX_X_INDEX(): number {
        return this._cols - 1;
    }
    get MAX_Y_INDEX(): number {
        return this._rows - 1;
    }
    get ground(): number[][] {
        return this.coords;
    }

    /**
     * Methods
     */

    getCoordX(x: number) {
        return Math.floor(x / this.B_WIDTH);
    }

    getCoordY(y: number) {
        return Math.floor(y / this.B_HEIGHT);
    }

    getCoordBottomY(y: number) {
        return Math.ceil(y / this.B_HEIGHT);
    }

    makeGround() {
        for (let i = 0; i <= this.MAX_X_INDEX; i++) {
            this.coords[i] = [];
            for (let j = 0; j <= this.MAX_Y_INDEX; j++) {
                this.coords[i][j] = 0;

                if (i === 0) {
                    this.stackCount.push(0);
                }
            }
        }
    }

    recordBlockOnGround(x: number, y: number, colorIndex: number) {
        this.coords[x][y] = 1 + colorIndex;
        this.stackCount[y] += 1;
    }

    drawBlocksOnGround(ctx: CanvasRenderingContext2D, style: string[]) {
        for (let x = 0; x <= this.MAX_X_INDEX; x++) {
            for (let y = 0; y <= this.MAX_Y_INDEX; y++) {
                if (this.coords[x][y] > 0) {
                    ctx.fillStyle = style[this.coords[x][y] - 1];
                    ctx.fillRect(x, y, 1, 1);
                }
            }
        }
    }
}