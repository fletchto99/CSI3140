window.onload = function() {

    /*
     * A simple function which uses regex to convert a word to its piglatin form
     * the assignment was a bit confusing here... it states that this must print the individual
     * words but then join them back together and print it out in a text area... Instead I return
     * the converted word so when mapping the values in the array it can generate the new pig latin
     * sentence
     */
    let pigLatinWord = val => `${val.replace(/(.)(.*)/, '$2$1')}ay`;

    //splits the string on spaces, generate the piglatin word, join it all together again using spaces
    convert.onclick = () => results.textContent += `${source.value.split(" ").map(pigLatinWord).join(" ")}\n`;
};