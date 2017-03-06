window.onload = () => {

    //generate the array & set the first two elements to 0
    let sieve = new Array(1000).fill(1).map((value, index) => index > 1 ? 1 : 0);

    //find all of the primes within the array
    for (let prime = 2; prime < Math.sqrt(1000); prime++) {
        if (sieve[prime] == 1) {
            for (let j = 2 * prime; j < 1000; j += prime) {
                sieve[j] = 0;
            }
        }
    }

    //convert 1's to their index's and filter out all 0's then print out the remaining joined by a comma
    primes.textContent = `Prime numbers from 0-1000 are: ${sieve.map((item, index) => item > 0 ? index : item).filter(item => item != 0).join(", ")}`

};