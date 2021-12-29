import BarBlock from "./class/BarBlock";
import SquareBlock from "./class/SquareBlock"
import TetrisBlock, { BlockCoords } from "./class/BasicBlock";
import HatBlock from "./class/HatBlock";
import Playground from "./class/Playground";
import { forceCrashBlock, moveDown, moveLeft, moveRight, rotateBlock, willCollideY } from "./controls";

const gameCanvas = document.querySelector("#game_canvas") as HTMLCanvasElement;
const gameCtx = gameCanvas.getContext("2d") as CanvasRenderingContext2D;

const GROUND_X = 0;
const GROUND_Y = 0;
const GROUND_WIDTH = 300;
const GROUND_HEIGHT = 600;
const BLOCK_WIDTH = 25;
const BLOCK_HEIGHT = 25;

const playground = new Playground(GROUND_WIDTH, GROUND_HEIGHT, BLOCK_WIDTH, BLOCK_HEIGHT);
playground.makeGround();

let falling: TetrisBlock;

gameCanvas.width = GROUND_WIDTH;
gameCanvas.height = GROUND_HEIGHT;

function initializeFalling() {
    const random = Math.floor(Math.random() * 3);
    
    switch (random) {
        case 0: return falling = new BarBlock(GROUND_WIDTH / 2, GROUND_Y, BLOCK_WIDTH, BLOCK_HEIGHT);
        case 1: return falling  = new HatBlock(GROUND_WIDTH / 2, GROUND_Y, BLOCK_WIDTH, BLOCK_HEIGHT);
        case 2: return falling  = new SquareBlock(GROUND_WIDTH / 2, GROUND_Y, BLOCK_WIDTH, BLOCK_HEIGHT);
        default: falling = new BarBlock(GROUND_WIDTH / 2, GROUND_Y, BLOCK_WIDTH, BLOCK_HEIGHT);
    }    
}

function moveBlock(e: KeyboardEvent) {
    switch (e.key) {
        case ' ': return forceCrashBlock(falling, playground);
        case 'ArrowUp': return rotateBlock(falling, playground);
        case 'ArrowDown': return moveDown(falling);
        case 'ArrowRight': return moveRight(falling, playground);
        case 'ArrowLeft': return moveLeft(falling, playground);
        default: return;
    }
}

function lineClear(stacktedY: Set<number>, playground: Playground) {
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

function stack(blockCoords: BlockCoords, playground: Playground) {
    const stackedY: Set<number> = new Set();

    for (const coords of blockCoords) {
        const x = playground.getCoordX(coords.x);
        const y = playground.getCoordY(coords.y);

        playground.recordBlockOnGround(x, y);

        stackedY.add(y);
    }

    lineClear(stackedY, playground);
}

function draw() {
    gameCtx.clearRect(GROUND_X, GROUND_Y, GROUND_WIDTH, GROUND_HEIGHT);
    playground.drawBlocksOnGround(gameCtx, '#00B0FF');
    falling.draw(gameCtx, '#F50057');

    falling.pixelTo += 1;
    falling.moveY();
    
    if (willCollideY(falling, playground)) {
        stack(falling.coordinateShape(), playground);
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