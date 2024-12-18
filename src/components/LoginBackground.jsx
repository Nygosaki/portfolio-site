import { skyline } from './Backgrounds/BackgroundSkyline'
import rectangles from './Backgrounds/BackgroundRectangles'
function drawBackground() {
    const randomNum = Math.round(Math.random() * 4);
    console.log(randomNum);
    if (randomNum == 1) {
        rectangles();
    } else if (randomNum == 2) {
        shapes();
    }}

export { drawBackground };