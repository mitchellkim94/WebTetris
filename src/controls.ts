import TetrisBlock from "./class/BasicBlock";
import Playground from "./class/Playground";

/**
 * 블룩 충돌 검사
 */
export function willCollideY(nextBlock: TetrisBlock, playground: Playground): boolean {
    for (const coords of nextBlock.coordinateShape()) {
        const gX = playground.getCoordX(coords.x);
        const gY = playground.getCoordY(coords.y);
        const gBY = playground.getCoordBottomY(coords.y);

        if (
            gX < 0 ||
            gX > playground.MAX_X_INDEX ||
            gBY > playground.MAX_Y_INDEX ||
            playground.ground[gX][gBY] === 1 ||
            playground.ground[gX][gY] === 1
        ) return true;
    }
    return false;
}
function willCollideX(nextBlock: TetrisBlock, playground: Playground) {
    for (const coords of nextBlock.coordinateShape()) {
        const gX = playground.getCoordX(coords.x);
        const gY = playground.getCoordY(coords.y);
        const gBY = playground.getCoordBottomY(coords.y)

        if (
            gX < 0 ||
            gX > playground.MAX_X_INDEX ||
            gY > playground.MAX_Y_INDEX ||
            playground.ground[gX][gY] === 1 ||
            playground.ground[gX][gBY] === 1
        ) return true;
    }
    return false;
}

/**
 * @spacebar 블록 강제 충돌
 */
export function forceCrashBlock(block: TetrisBlock, playground: Playground) {
    // 현재 x 값들 찾기
    // 각 x 값의 현재 y와 playground의 y의 좌표차이가 가장 작은 애를 찾기
    // 가장 작은애 만큼 기준 점의 y를 이동시키기
    let amountOfMoveY = playground.MAX_Y_INDEX;

    for (const coords of block.coordinateShape()) {
        let gY = playground.coords[playground.getCoordX(coords.x)].findIndex(el => { return el === 1 });

        if (gY < 0) gY = playground.MAX_Y_INDEX + 1;

        const distance = gY - playground.getCoordY(coords.y) - 1;

        if (amountOfMoveY > distance) amountOfMoveY = distance;
    }
    
    block.y += amountOfMoveY * block.h;
}

/**
 * @arrowup 블록 모양을 바꿈
 */
export function rotateBlock(block: TetrisBlock, playground: Playground) {
    block.changeShape();
    if (willCollideY(block, playground)) {
        block.changeBack();
    }
}

/**
 * @arrowdown 블록을 아래로 이동
 */
export function moveDown(block: TetrisBlock) {
    block.pixelTo = block.h;
}

/**
 * @arrowright 블록을 오른쪽으로 이동
 */
export function moveRight(block: TetrisBlock, playground: Playground) {
    block.moveX(block.w);

    if (willCollideX(block, playground)) {
        console.log("충돌");
        
        block.moveX(-block.w);
    }
}

/**
 * @arrowleft 블록을 왼쪽으로 이동
 */
export function moveLeft(block: TetrisBlock, playground: Playground) {
    block.moveX(-block.w);

    if (willCollideX(block, playground)) {
        console.log("충돌");
        
        block.moveX(block.w);
    }
}