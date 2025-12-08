const book = {

    bookArray: [
        { id_book: 1, name: "Everything You Ever Wanted to Know", author: "Upton", isbn: "082305649x" },
        { id_book: 2, name: "Photography", author: "Vilppu", isbn: "205711499" },
        { id_book: 3, name: "Drawing Manual Vilppu", author: "Zelanshi", isbn: "1892053039" },
        { id_book: 4, name: "TBA", author: "Zelanshi", isbn: "0534613932" },
        { id_book: 5, name: "Shaping Space", author: "Speight", isbn: "0534613934" },
    ],


    getAllBooks() {
        console.log("Kaikki kirjat:");
        console.log(this.bookArray);
    },


    getOneBook(x) {
        if (x < 0 || x >= this.bookArray.length) {
            console.log("Virhe: indeksi ulkona taulukosta:", x);
            return;
        }
        console.log("Kirja indeksillä", x, ":");
        console.log(this.bookArray[x]);
    },


    addBook(id_book, name, author, isbn) {
        const newBook = { id_book, name, author, isbn };
        this.bookArray.push(newBook);
        console.log("Lisättiin kirja:");
        console.log(newBook);
    }
};


book.getAllBooks();

book.getOneBook(0);

book.addBook(6, "New Awesome Book", "Some Author", "1234567890");
book.getAllBooks();