function fireworks() {
    const canvas = document.getElementById("backgroundCanvas");
    const ctx = canvas.getContext("2d");

    const fireworksArray = [];
    const numberOfFireworks = 1;
    let frame = 0;

    class Firework {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedY = Math.random() * 3 + 1;
            this.color = `hsl(${Math.random() * 360}, 100%, 50%, 0.6)`;
        }

        update() {
            this.y -= this.speedY;
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function handleFireworks() {
        for (let i = 0; i < fireworksArray.length; i++) {
            fireworksArray[i].update();
            fireworksArray[i].draw();
            if (fireworksArray[i].y < 0) {
                fireworksArray.splice(i, 1);
                i--;
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        handleFireworks();
        if (frame % 10 === 0) { // Adjust the modulus value to control the frequency of new fireworks
            for (let i = 0; i < numberOfFireworks; i++) {
                fireworksArray.push(new Firework());
            }
        }
        frame++;
        requestAnimationFrame(animate);
    }

    animate();
};

export { fireworks };