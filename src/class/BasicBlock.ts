/**
 * Types
 */
export type BlockCoords = number[][];

/**
 * Class
 */
export default abstract class TetrisBlock {
    private _x: number;
    private _y: number;

    private _shape: number = 1;
    private _shapeCoords: BlockCoords = [];

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    };

    /**
     * Getters
     */
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }

    get shape() {
        return this._shape;
    }
    get shapeCoords() {
        return this._shapeCoords;
    }

    /**
     * Setters
     */
    set x(x) {
        this._x = x;
    }
    set y(y) {
        this._y = y;
    }
    set shape(state) {
        this._shape = state;
    }
    set shapeCoords(coords: BlockCoords) {
        this._shapeCoords = coords;
    }

    /**
     * Methods
     */
    abstract changeShape(): void;
    abstract coordinateShape(): void;

    changeBack(): void {
        this.shape--;
    }
    
    moveX(x: number) {
        this.x += x;
    }
    moveY(y: number) {
        this.y += y;
    }

    draw(ctx: CanvasRenderingContext2D, style: CanvasFillStrokeStyles['fillStyle']): void {
        ctx.fillStyle = style;

        this.shapeCoords.forEach((rows, y) => {
            rows.forEach((value, x) => {
                if (value > 0) {
                    ctx.fillRect(this.x + x, this.y + y, 1, 1);
                }
            });
        });
    }
}