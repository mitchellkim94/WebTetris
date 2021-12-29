/**
 * Types
 */
export interface BasicCoords {
    x: number;
    y: number;
};

export type BlockCoords = BasicCoords[];

/**
 * Class
 */
export default abstract class TetrisBlock {
    private _x: number;
    private _y: number;
    private _w: number;
    private _h: number;

    private _shape: number = 1;
    private _pixelTo: number = 0;

    constructor(x: number, y: number, w: number, h: number) {
        this._x = x;
        this._y = y;
        this._w = w;
        this._h = h;
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
    get w() {
        return this._w;
    }
    get h() {
        return this._h;
    }

    get shape() {
        return this._shape;
    }
    get pixelTo() {
        return this._pixelTo;
    }

    /**
     * Setters
     */
    set x(x) {
        if (x < 0) throw new Error("coords X is too small");
        
        this._x = x;
    }
    set y(y) {
        if (y < 0) throw new Error("coords Y is too small");
        
        this._y = y;
    }
    set w(w) {
        if (w < 0) throw new Error("Width is too small");
        
        this._w = w;
    }
    set h(h) {
        if (h < 0) throw new Error("Height is too small");
        
        this._h = h;
    }
    set shape(state) {
        this._shape = state;
    }
    set pixelTo(pixel) {
        this._pixelTo = pixel;
    }

    /**
     * Methods
     */
    abstract changeShape(): void;
    abstract coordinateShape(): BlockCoords;

    changeBack(): void {
        this.shape--;
    }
    
    moveX(pixel: number) {
        const xPixel = this.x + pixel;
        this.x = xPixel > 0 ? xPixel : 0;
    }
    moveY() {
        this.y = this.pixelTo > this.h 
            ? this.y + this.h 
            : this.y + this.pixelTo;
        this.pixelTo = 0;
    }

    draw(ctx: CanvasRenderingContext2D, style: CanvasFillStrokeStyles['fillStyle']): void {
        for (const coord of this.coordinateShape()) {
            ctx.fillStyle = style + '80';
            ctx.fillRect(coord.x, coord.y, this.w, this.h);
        }
    }
}