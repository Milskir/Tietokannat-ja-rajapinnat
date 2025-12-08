const bookArray = [
    { id_book: 1, name: "Everything You Ever Wanted to Know", author: "Upton", isbn: "082305649x" },
    { id_book: 2, name: "Photography", author: "Vilppu", isbn: "205711499" },
    { id_book: 3, name: "Drawing Manual Vilppu", author: "Zelanshi", isbn: "1892053039" },
    { id_book: 4, name: "TBA", author: "Zelanshi", isbn: "0534613932" },
    { id_book: 5, name: "Shaping Space", author: "Speight", isbn: "0534613934" },
];

console.log("Tietotyyppi:", typeof bookArray);
console.log("Koko bookArray:", bookArray);
console.log("Ensimmäinen rivi:", bookArray[0]);
console.log("Ensimmäisen kirjan nimi:", bookArray[0].name);
console.log("Rivien määrä:", bookArray.length);

console.log("Kaikkien kirjojen nimet:");
for (let book of bookArray) {
    console.log(book.name);
}