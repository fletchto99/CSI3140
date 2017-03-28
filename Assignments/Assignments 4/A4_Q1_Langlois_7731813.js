window.onload = () => {

    let board = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    let shuffled = [];
    while (board.length !== 0) {
        let rand = Math.floor(board.length * Math.random());
        shuffled.push(board[rand]);
        board.splice(rand, 1)
    }
    game.children.forEach((index, elemt) {

    });
};