// script.js
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.data span');

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 2000; // المدة الزمنية للعد بالملي ثانية
        const frameRate = 1000 / 60; // معدل الإطارات في الثانية (60 إطار في الثانية)
        const totalFrames = Math.round(duration / frameRate);
        const increment = target / totalFrames;

        let currentNumber = 0;
        let frame = 0;

        const updateCounter = () => {
            frame++;
            currentNumber += increment;
            if (frame < totalFrames) {
                counter.textContent = Math.round(currentNumber).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toLocaleString();
            }
        };

        requestAnimationFrame(updateCounter);
    });
});
