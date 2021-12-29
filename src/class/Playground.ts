export default class Playground {
    private _groundWidth: number;
    private _groundHeight: number;
    private _blockWidth: number;
    private _blockHeight: number;
    
    public coords: number[][] = [];
    public stackCount: number[] = [];

    constructor(g_width: number, g_height: number, b_width: number, b_height: number) {
        this._groundWidth = g_width;
        this._groundHeight = g_height;
        this._blockWidth = b_width;
        this._blockHeight = b_height;
    }

    /**
     * Getters
     */

    get G_WIDTH(): number {
        return this._groundWidth;
    }
    get G_HEIGHT(): number {
        return this._groundHeight;
    }
    get B_WIDTH(): number {
        return this._blockWidth;
    }
    get B_HEIGHT(): number {
        return this._blockHeight;
    }
    get MAX_X_INDEX(): number {
        return (this.G_WIDTH / this.B_WIDTH) - 1;
    }
    get MAX_Y_INDEX(): number {
        return (this.G_HEIGHT / this.B_HEIGHT) - 1;
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

    recordBlockOnGround(x: number, y: number) {
        this.coords[x][y] = 1;
        this.stackCount[y] += 1;
    }

    drawBlocksOnGround(ctx: CanvasRenderingContext2D, style: CanvasFillStrokeStyles['fillStyle']) {
        ctx.fillStyle = style;

        for (let i = 0; i < this.G_WIDTH / this.B_WIDTH; i++) {
            for (let j = 0; j < this.G_HEIGHT / this.B_HEIGHT; j++) {
                if (this.coords[i][j] === 1) {
                    ctx.fillRect(
                        i * this.B_WIDTH,
                        j * this.B_HEIGHT,
                        this.B_WIDTH,
                        this.B_HEIGHT
                    );
                }
            }
        }
    }
}