import rectangles from './Backgrounds/BackgroundRectangles'
function drawBackground() {
    const randomNum = Math.round(Math.random() * 10);
    console.log(randomNum);
    if (randomNum == 1) {
        rectangles();
    }}

export { drawBackground };