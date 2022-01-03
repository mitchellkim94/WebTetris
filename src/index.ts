import TetrisBlock, { BlockCoords } from "./class/BasicBlock";
import HatBlock from "./class/HatBlock";
import Playground from "./class/Playground";
import { hardDrop, isValidMoveY, moveDown, moveLeft, moveRight, rotateBlock } from "./controls";
import { COLORS, GROUND_X, GROUND_Y, BLOCK_WIDTH, BLOCK_HEIGHT, SIZE_COLS, SIZE_ROWS } from "./constants";

const gameCanvas = document.querySelector("#game_canvas") as HTMLCanvasElement;
const gameCtx = gameCanvas.getContext("2d") as CanvasRenderingContext2D;

const playground = new Playground(BLOCK_WIDTH, BLOCK_HEIGHT, SIZE_COLS, SIZE_ROWS);
playground.makeGround();

let falling: TetrisBlock;
let colorIdx = 0;

gameCanvas.width = playground.GROUND_WIDTH;
gameCanvas.height = playground.GROUND_HEIGHT;
gameCtx.scale(BLOCK_WIDTH, BLOCK_HEIGHT);

function initializeFalling() {
    colorIdx = colorIdx < COLORS.length ? colorIdx + 1 : 0;
    const random = Math.floor(Math.random() * 3);
    const startPoint = Math.floor(SIZE_COLS / 2);
    
    falling  = new HatBlock(startPoint, 0);

    falling.coordinateShape();
}

function moveBlock(e: KeyboardEvent) {
    switch (e.key) {
        case ' ': return hardDrop(falling, playground);
        case 'ArrowUp': return rotateBlock(falling, playground);
        case 'ArrowDown': return moveDown(falling);
        case 'ArrowRight': return moveRight(falling, playground);
        case 'ArrowLeft': return moveLeft(falling, playground);
        default: return;
    }
}

function clearLine(stacktedY: Set<number>, playground: Playground) {
    for (const y of stacktedY) {
        if (playground.stackCount[y] > playground.MAX_X_INDEX) {
            for (let x=0; x<= playground.MAX_X_INDEX; x++) {
                playground.coords[x].splice(y, 1);
                playground.coords[x].unshift(0);
            }
            playground.stackCount.splice(y, 1);
            playground.stackCount.unshift(0);
        }
    }
}

function stack(stackCoords: TetrisBlock, playground: Playground, style: number) {
    const stackedY: Set<number> = new Set();

    stackCoords.shapeCoords.forEach((rows, y) => {
        rows.forEach((value, x) => {
            if (value > 0) {
                const gX = stackCoords.x + x;
                const gY = Math.floor(stackCoords.y + y);
                playground.recordBlockOnGround(gX, gY, style);
                
                stackedY.add(gY);
            }
        });
    });

    clearLine(stackedY, playground);
}

function draw() {
    gameCtx.clearRect(GROUND_X, GROUND_Y, SIZE_COLS, SIZE_ROWS);
    playground.drawBlocksOnGround(gameCtx, COLORS);

    falling.draw(gameCtx, COLORS[colorIdx]);

    falling.moveY(1 / playground.B_HEIGHT);
    
    if (!isValidMoveY(falling, playground)) {        
        stack(falling, playground, colorIdx);
        initializeFalling();
    }

    requestAnimationFrame(draw);
}

function init() {
    addEventListener("keydown", moveBlock);
    initializeFalling();
    requestAnimationFrame(draw);
}

init();