function rectangles() {
    const canvas = document.getElementById("backgroundCanvas");
    const ctx = canvas.getContext("2d");

    function drawRectangles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < 50; i++) { // Reduced number of rectangles
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const radius = Math.random() * 3; // Smaller radius
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2, false);
            ctx.fillStyle = "rgba(155, 135, 245, 0.6)"; // Lower opacity
            ctx.fill();
        }
    }
    
    function animateRectangles() {
        drawRectangles();
        requestAnimationFrame(animateRectangles);
    }
    
    animateRectangles();
}

export default rectangles;