import { skyline } from './Backgrounds/BackgroundSkyline'
import rectangles from './Backgrounds/BackgroundRectangles'
import shapes from './Backgrounds/BackgroundShapes';
import { fireworks } from './Backgrounds/BackgroundFireworks';
function drawBackground() {
    const randomNum = Math.round(Math.random() * 5);
    console.log(randomNum);
    if (randomNum == 1) {
        rectangles();
    } else if (randomNum == 2) {
        skyline();
    } else if (randomNum == 3) {
        shapes();
    } else if (randomNum == 4) {
        fireworks();
    }}

export { drawBackground };