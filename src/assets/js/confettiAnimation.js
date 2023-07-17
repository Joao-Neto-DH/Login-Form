function startconfetti() {
    var myCanvas = document.getElementById("canvas");
    var myConfetti = confetti.create(myCanvas, {
        resize: true,
        useWorker: true
    });

    myConfetti({
        particleCount: 100,
        spread: 160,
        shapes: ['circle', 'circle', 'square']
    });
}

startconfetti();

setInterval(() => startconfetti(), 5000);