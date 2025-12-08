const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Anna ensimmäinen luku: ", (n1) => {
    rl.question("Anna toinen luku: ", (n2) => {

        const num1 = Number(n1);
        const num2 = Number(n2);

        if (isNaN(num1) || isNaN(num2)) {
            console.log("Virhe: molempien täytyy olla numeroita.");
        } else if (num1 > num2) {
            console.log("Suurempi luku on:", num1);
        } else if (num2 > num1) {
            console.log("Suurempi luku on:", num2);
        } else {
            console.log("Luvut ovat yhtä suuret.");
        }

        rl.close();
    });
});