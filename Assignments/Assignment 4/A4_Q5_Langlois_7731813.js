window.onload = () => {
    let ctx = canvas.getContext("2d");
    //set text options
    ctx.shadowColor = "gray";
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 5;
    ctx.shadowBlur = 6;
    ctx.font = "40px 'Helvetica'";

    //draw the text
    ctx.fillText("HTML5 Canvas", 0, 100);
};