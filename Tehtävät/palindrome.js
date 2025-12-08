const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Anna sana: ", (word) => {

    const w = word.toLowerCase();

    const reversed = w.split("").reverse().join("");

    if (w === reversed) {
        console.log(`"${word}" on palindromi.`);
    } else {
        console.log(`"${word}" ei ole palindromi.`);
    }

    rl.close();
});