import TetrisBlock from "./class/BasicBlock";
import Playground from "./class/Playground";

/**
 * 블룩 충돌 검사
 */
export function isValidMoveY(nextBlock: TetrisBlock, playground: Playground): boolean {
    return nextBlock.shapeCoords.every((rows, y) => {
        return rows.every((value, x) => {
            if (value > 0) {
                const gX = nextBlock.x + x;
                const gBy= Math.ceil(nextBlock.y + y);

                return (
                    gBy <= playground.MAX_Y_INDEX &&
                    playground.ground[gX][gBy] === 0
                );
            }
            return true;
        });
    });
}
function isValidMoveX(nextBlock: TetrisBlock, playground: Playground) {
    return nextBlock.shapeCoords.every((rows, y) => {
        return rows.every((value, x) => {
            if (value > 0) {
                const gX = nextBlock.x + x;
                const gY = Math.floor(nextBlock.y + y);
                const gBy= Math.ceil(nextBlock.y + y);

                return (
                    gX >= 0 &&
                    gX <= playground.MAX_X_INDEX &&
                    playground.ground[gX][gY] === 0 &&
                    playground.ground[gX][gBy] === 0
                );
            }
            return true;
        });
    });
}

/**
 * @spacebar 블록 강제 충돌
 */
export function hardDrop(block: TetrisBlock, playground: Playground) {
    moveDown(block);

    if (!isValidMoveY(block, playground)) {
        return block.moveY(-1);
    }

    hardDrop(block, playground);
}

/**
 * @arrowup 블록 모양을 바꿈
 */
export function rotateBlock(block: TetrisBlock, playground: Playground) {
    block.changeShape();
    block.coordinateShape();
    
    if (!isValidMoveY(block, playground)) {
        block.changeBack();
        block.coordinateShape();
    }
}

/**
 * @arrowdown 블록을 아래로 이동
 */
export function moveDown(block: TetrisBlock) {
    block.moveY(1);
}

/**
 * @arrowright 블록을 오른쪽으로 이동
 */
export function moveRight(block: TetrisBlock, playground: Playground) {
    block.moveX(1);

    if (!isValidMoveX(block, playground)) {
        block.moveX(-1);
    }
}

/**
 * @arrowleft 블록을 왼쪽으로 이동
 */
export function moveLeft(block: TetrisBlock, playground: Playground) {
    block.moveX(-1);

    if (!isValidMoveX(block, playground)) {
        block.moveX(1);
    }
}