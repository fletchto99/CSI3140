window.onload = () => {
    let ctx = canvas.getContext('2d');

    //draw a heart
    ctx.beginPath();
    ctx.moveTo(75, 40);
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);

    //fill it with 3 colors
    let grad = ctx.createLinearGradient(0, 40, 0, 90);
    grad.addColorStop(0, "red");
    grad.addColorStop(1, "pink");
    grad.addColorStop(0.5, "orange");

    //fill with our gradient
    ctx.fillStyle = grad;
    ctx.fill();
};