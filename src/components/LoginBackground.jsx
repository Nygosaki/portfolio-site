import { skyline } from './Backgrounds/BackgroundSkyline'
import rectangles from './Backgrounds/BackgroundRectangles'
import shapes from './Backgrounds/BackgroundShapes';
function drawBackground() {
    const randomNum = Math.round(Math.random() * 4);
    console.log(randomNum);
    if (randomNum == 1) {
        rectangles();
    } else if (randomNum == 2) {
        skyline();
    } else if (randomNum == 3) {
        shapes();
    }}

export { drawBackground };