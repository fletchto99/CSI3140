window.onload = () => {
    //some vars used throughout the program
    let selected = null;
    let shuffled = [];
    let tiles = document.getElementsByTagName('td');

    //draw the tiles, 16 represents the empty tile and will be replaced with a blank value
    let drawBoard = () => [].forEach.call(tiles, (item, index) => item.textContent = shuffled[index] != 16 ? shuffled[index] : "");



    //bind the click event to each of the tiles
    [].forEach.call(tiles, item => item.onclick = event => {

        //check if we've already selected a tile
        if (selected == null) {
            selected = event.target;
            selected.classList.add('selected')
        } else {
            //find the value of the selected tile. Defaults to 16 (the blank tile)
            let selectedValue = parseInt(event.target.textContent) || 16;
            let value = parseInt(selected.textContent) || 16;

            //ensure that one of the selected tiles is the blank tile
            if (selectedValue == 16 || value == 16) {

                //find the indicies where the two selected tiles are in the board array
                let index = shuffled.indexOf(selectedValue);
                let selectedIndex = shuffled.indexOf(value);
                let higher = Math.max(index, selectedIndex);
                let lower = Math.min(index, selectedIndex);

                //ensure that the tiles are adjacent
                if (lower == higher - 4 || (lower == higher - 1 && higher % 4 != 0)) {

                    //swap the tiles
                    let tmp = shuffled[lower];
                    shuffled[lower] = shuffled[higher];
                    shuffled[higher] = tmp;
                    selected.classList.remove('selected');
                    selected = null;

                    //check for the win condition
                    let win = true;
                    for (let i = 1; i < shuffled.length; i++) {
                        if (shuffled[i - 1] != i) {
                            win = false;
                            break;
                        }
                    }
                    if (win) {
                        //allow the user to play again if they won
                        if (confirm('You win! Play again?')) {
                            setup(shuffled);
                        }
                    }

                    //redraw the new board
                    drawBoard();
                } else {
                    alert("Tiles are not adjacent!");
                    selected.classList.remove('selected');
                    selected = null;
                }
            } else {
                alert("One of the tiles must be blank!");
                selected.classList.remove('selected');
                selected = null;
            }

        }
    });

    let setup = boardToSave => {
        let board = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        boardToSave.length = 0;
        while (board.length !== 0) {
            let rand = Math.floor(board.length * Math.random());
            boardToSave.push(board[rand]);
            board.splice(rand, 1)
        }

    };

    setup(shuffled);
    shuffled = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 15];
    drawBoard();
};