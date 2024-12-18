function shapes() {
    const canvas = document.getElementById("backgroundCanvas");
    const ctx = canvas.getContext("2d");
    const shapesArray = [];

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function createShape() {
        const shapeTypes = ['circle', 'square', 'rectangle', 'star'];
        const type = shapeTypes[randomInt(0, shapeTypes.length - 1)];
        const x = randomInt(0, canvas.width);
        const y = randomInt(-canvas.height, 0);
        const size = randomInt(10, 50);
        const speed = randomInt(1, 3);
        const rotationSpeed = Math.random() * 0.05;
        return { type, x, y, size, speed, rotation: 0, rotationSpeed };
    }

    function drawShape(shape) {
        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation);
        ctx.beginPath();
        switch (shape.type) {
            case 'circle':
                ctx.arc(0, 0, shape.size, 0, Math.PI * 2);
                break;
            case 'square':
                ctx.rect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
                break;
            case 'rectangle':
                ctx.rect(-shape.size, -shape.size / 2, shape.size * 2, shape.size);
                break;
            case 'star':
                drawStar(0, 0, shape.size, 5, 0.5);
                break;
        }
        ctx.fillStyle = 'rgba(155, 135, 245, 0.3)';
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    }

    function drawStar(cx, cy, outerRadius, points, innerRadiusRatio) {
        const innerRadius = outerRadius * innerRadiusRatio;
        const angle = Math.PI / points;
        ctx.moveTo(cx + outerRadius, cy);
        for (let i = 1; i < 2 * points; i++) {
            const radius = i % 2 === 0 ? outerRadius : innerRadius;
            const x = cx + radius * Math.cos(i * angle);
            const y = cy + radius * Math.sin(i * angle);
            ctx.lineTo(x, y);
        }
        ctx.closePath();
    }

    function drawShapes() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        shapesArray.forEach(shape => {
            shape.y += shape.speed;
            shape.rotation += shape.rotationSpeed;
            if (shape.y > canvas.height) {
                shape.y = randomInt(-canvas.height, 0);
                shape.x = randomInt(0, canvas.width);
            }
            drawShape(shape);
        });
    }

    function animateShapes() {
        drawShapes();
        requestAnimationFrame(animateShapes);
    }

    for (let i = 0; i < 50; i++) {
        shapesArray.push(createShape());
    }

    animateShapes();
}

export default shapes;