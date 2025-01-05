function fireworksExploading() {
    const canvas = document.getElementById("backgroundCanvas");
    const ctx = canvas.getContext("2d");

    const fireworks = [];
    const particles = [];
    const colors = ["#FF1461", "#18FF92", "#5A87FF", "#FBF38C"];

    function createFirework() {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const color = colors[Math.floor(Math.random() * colors.length)];
        fireworks.push({ x, y, color });
        scheduleNextFirework();
    }

    function createParticles(x, y, color) {
        for (let i = 0; i < 100; i++) {
            const angle = Math.random() * 2 * Math.PI;
            const speed = Math.random() * 5;
            particles.push({
                x,
                y,
                color,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                alpha: 0.5 // Start with a lower initial alpha value
            });
        }
    }

    function updateParticles() {
        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.alpha -= 0.005; // Decrease alpha more gradually
            if (p.alpha <= 0) {
                particles.splice(i, 1);
            }
        }
    }

    function drawParticles() {
        particles.forEach(p => {
            ctx.globalAlpha = p.alpha;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 2, 0, 2 * Math.PI);
            ctx.fill();
        });
        ctx.globalAlpha = 1;
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fireworks.forEach(firework => {
            createParticles(firework.x, firework.y, firework.color);
        });
        fireworks.length = 0;
        updateParticles();
        drawParticles();
        requestAnimationFrame(animate);
    }

    function scheduleNextFirework() {
        const interval = Math.random() * 1000 + 500; // Random interval between 500ms and 1500ms
        setTimeout(createFirework, interval);
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    scheduleNextFirework();
    animate();
}

export { fireworksExploading };