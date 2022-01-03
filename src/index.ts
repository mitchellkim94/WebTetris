import TetrisBlock from "./class/BasicBlock";
import HatBlock from "./class/HatBlock";
import Playground from "./class/Playground";
import { stack, hardDrop, isValidMove, moveDown, moveLeft, moveRight, rotateBlock } from "./controls";
import { COLORS, GROUND_X, GROUND_Y, BLOCK_WIDTH, BLOCK_HEIGHT, SIZE_COLS, SIZE_ROWS } from "./constants";
import { clickTrigger, downButton, dropButton, leftButton, rightButton, startButton, upButton } from "./dom";
import BarBlock from "./class/BarBlock";
import SquareBlock from "./class/SquareBlock";
import SBlock from "./class/SBlock";
import ReverseSBlock from "./class/ReverseSBlock";
import LBlock from "./class/LBlock";
import ReverseLBlock from "./class/ReverseLBlock";

/**
 * Game
 */

const gameCanvas = document.querySelector("#game_canvas") as HTMLCanvasElement;
const gameCtx = gameCanvas.getContext("2d") as CanvasRenderingContext2D;

const playground = new Playground(BLOCK_WIDTH, BLOCK_HEIGHT, SIZE_COLS, SIZE_ROWS);
playground.makeGround();

let ongoing: boolean = false;
let animID: number = 0;

let falling: TetrisBlock;
let colorIdx = 0;

gameCanvas.width = playground.GROUND_WIDTH;
gameCanvas.height = playground.GROUND_HEIGHT;
gameCtx.scale(BLOCK_WIDTH, BLOCK_HEIGHT);

function initializeFalling() {
    colorIdx = colorIdx < COLORS.length - 1 ? colorIdx + 1 : 0;

    const random = Math.floor(Math.random() * 7);
    const startPoint = Math.floor(SIZE_COLS / 2);

    switch (random) {
        case 0:
            falling  = new HatBlock(startPoint, 0);
            break;
        case 1:
            falling  = new BarBlock(startPoint, 0);
            break;
        case 2:
            falling  = new SquareBlock(startPoint, 0);
            break;
        case 3: 
            falling  = new SBlock(startPoint, 0);
            break;
        case 4: 
            falling  = new ReverseSBlock(startPoint, 0);
            break;
        case 5: 
            falling  = new LBlock(startPoint, 0);
            break;
        case 6: 
            falling  = new ReverseLBlock(startPoint, 0);
            break;
        default:
            break;
    }

    falling.coordinateShape();
}

function moveBlock(key: string) {
    switch (key) {
        case ' ': return hardDrop(falling, playground);
        case 'ArrowUp': return rotateBlock(falling, playground);
        case 'ArrowDown': return moveDown(falling);
        case 'ArrowRight': return moveRight(falling, playground);
        case 'ArrowLeft': return moveLeft(falling, playground);
        default: return;
    }
}

function draw() {
    gameCtx.clearRect(GROUND_X, GROUND_Y, SIZE_COLS, SIZE_ROWS);
    gameCtx.fillStyle = "black";
    gameCtx.fillRect(0, 0, playground.GROUND_WIDTH, playground.GROUND_HEIGHT);
    playground.drawBlocksOnGround(gameCtx, COLORS);

    falling.draw(gameCtx, COLORS[colorIdx]);

    falling.moveY(1 / playground.B_HEIGHT);
    
    if (!isValidMove(falling, playground)) {        
        stack(falling, playground, colorIdx);
        initializeFalling();
    }

    animID = requestAnimationFrame(draw);
}

function touchPad() {
    clickTrigger(leftButton, moveBlock, 'ArrowLeft');
    clickTrigger(upButton, moveBlock, 'ArrowUp');
    clickTrigger(dropButton, moveBlock, ' ');
    clickTrigger(downButton, moveBlock, 'ArrowDown');
    clickTrigger(rightButton, moveBlock, 'ArrowRight');
}

function init() {
    gameCtx.fillStyle = "black";
    gameCtx.fillRect(0, 0, playground.GROUND_WIDTH, playground.GROUND_HEIGHT);
    addEventListener("keydown", e => {
        moveBlock(e.key);
    });
    initializeFalling();

    startButton.addEventListener("click", () => {
        ongoing = !ongoing;

        if (ongoing) {
            animID = requestAnimationFrame(draw);
            startButton.innerHTML = 'PAUSE';
            startButton.classList.add('pause');
        } else {
            cancelAnimationFrame(animID);
            startButton.innerHTML = 'GAME START';
            startButton.classList.remove('pause');
        }

        startButton.blur();
    });

    touchPad();
}

init();