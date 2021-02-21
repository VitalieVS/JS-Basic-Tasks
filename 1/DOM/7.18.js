const player = document.getElementById("player");
const viewPort = document.getElementById("viewport");

const movePlayer = (e) => {
    const stylesPlayer = window.getComputedStyle(player);

    let top = parseInt(stylesPlayer.marginTop);
    let left = parseInt(stylesPlayer.marginLeft);

    switch (e.key) {
        case "ArrowUp":
            (top > 0) ? player.style.marginTop = top - 50 + "px" : 0;
            break;
        case "ArrowDown":
            (top < viewPort.clientHeight - 50) ? player.style.marginTop = top + 50 + "px" : 0;
            break;
        case "ArrowLeft":
            (left > 0) ? player.style.marginLeft = left - 50 + "px" : 0;
            break;
        case "ArrowRight" :
            (left < viewPort.clientWidth - 50) ? player.style.marginLeft = left + 50 + "px" : 0;
            break;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    addEventListener('keydown', movePlayer);
});