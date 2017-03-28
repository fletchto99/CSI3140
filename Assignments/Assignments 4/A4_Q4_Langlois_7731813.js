window.onload = () => {

    //some vars used to store information each time a drag occurs
    let drag = false;
    let startX = 0;
    let startY = 0;
    let offsetX = 0;
    let offsetY = 0;

    cat.onmousedown = e => {
        //prevent the original event from occuring
        e.preventDefault();

        //grab start positions and start mouse positions
        drag = true;
        startX = parseInt(cat.style.left) || 0;
        startY = parseInt(cat.style.top) || 0;
        offsetX = e.clientX;
        offsetY = e.clientY;
    };
    document.onmousemove = e => {
        //update the position
        if (drag) {
            cat.style.left = startX + e.clientX - offsetX + 'px';
            cat.style.top = startY + e.clientY - offsetY + 'px';
        }
    };
    document.onmouseup = () => {
        //listen for mouse up at any point
        drag = false;
    }

};