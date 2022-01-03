export  function $(id: string) {
    return document.querySelector(`#${id}`);
}

export const startButton = $('start_btn') as HTMLButtonElement;
export const scoreBoard = $('score') as HTMLElement;

export const leftButton = $('btn_left') as HTMLButtonElement;
export const upButton = $('btn_up') as HTMLButtonElement;
export const dropButton = $('btn_drop') as HTMLButtonElement;
export const downButton = $('btn_down') as HTMLButtonElement;
export const rightButton = $('btn_right') as HTMLButtonElement;

export const clickTrigger = (el: HTMLButtonElement, handler: Function, key: string) => {
    el.addEventListener("click", () => {
        handler(key);
    })
}

export const scoreUp = (score: number) => {
    scoreBoard.innerHTML = `${score}`;
};