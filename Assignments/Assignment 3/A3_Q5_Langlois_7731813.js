window.onload = () => {

    let race = {
        tick: 0,
        hare: 0,
        tortise: 0
    };

    //geenrates a random number between the min an max values specified
    let randomRange = (min, max) => Math.random() * (max - min) + min;

    go.onclick = () => {
        //prevent the user from starting over
        go.disabled = true;

        //output race has started
        console.log(`ON YOUR MARK, GET SET\nBANG!!!\nAND THEY'RE OFF!!!`);

        //interval on a 1 second tick time
        let interval = setInterval(() => {
            //increment the tick
            race.tick++;

            //the assignment said 1-10 but that doesn't make sense for percentages... should be 0-10 (0-100%)
            //0-1 = 10%
            //1-2 = 20%
            //2-3 = 30%
            //3-4 = 40%
            //4-5 = 50%
            //5-6 = 60%
            //6-7 = 70%
            //7-8 = 80%
            //8-9 = 90%
            //9-10 = 100%
            let tortise = randomRange(0, 10);
            let hare = randomRange(0, 10);

            //handle tortise table
            if (tortise <= 5) {
                race.tortise += 3;
            } else if (tortise <= 7) {
                race.tortise = Math.max(race.tortise - 6, 1);
            } else if (tortise <= 10) {
                race.tortise += 1;
            }

            //handle hare table
            if (hare <= 2) {
                //rest stop
            } else if (hare <= 4) {
                race.hare += 9;
            } else if (hare <= 5) {
                race.hare += 12;
            } else if (hare <= 8) {
                race.hare += 1;
            } else if (hare <= 10) {
                race.hare += 2;
            }

            //tortise bites hare
            if (race.hare == race.tortise) {
                console.log("OUCH!!!")
            } else {
                //print out positions
                console.log(new Array(70).fill(" ").map((val, idx) => {
                    if (idx == race.tortise) {
                        return "T"
                    } else {
                        return idx == race.hare ? "H" : val;
                    }
                }).join(""))
            }

            //determine win condition
            let winner = false;
            if (race.hare > 70 && race.tortise > 70) {
                winner = true;
                console.log("IT’S A TIE.");
            } else if (race.hare > 70) {
                winner = true;
                console.log("HARE WINS. YUCK!");
            } else if (race.tortise > 70) {
                winner = true;
                console.log("TORTOISE WINS!!! YAY!!!");
            }

            //someone won
            if (winner) {
                console.log(`Time elapsed ${race.tick}`);
                //game over stop looping
                clearInterval(interval);
            }
        }, 1000);
    }
};