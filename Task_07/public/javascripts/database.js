const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run("CREATE TABLE books (bookId INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, author TEXT, year INTEGER, serialNum TEXT)");
    const stmt1 = db.prepare("INSERT INTO books VALUES (?,?,?,?,?)");
    stmt1.run(1, "Dune", "Frank Herbert", 1965, "b-1230");
    stmt1.run(2, "Dune Messiah", "Frank Herbert", 1968, "b-1883");
    stmt1.run(3, "Clean Code", "Robert C. Martin", 1999, "b-2032");
    stmt1.run(4, "It", "Stephen King", 1976, "b-1892");
    stmt1.run(5, "Music Theory", "Chris Martin", 2012, "b-3902");
    stmt1.run(6, "Game Of Thrones", "George RR. Martin", 2001, "b-3271");
    stmt1.run(7, "Witcher", "Andrzej Sapkowski", 1989, "b-1275");
    stmt1.finalize();
});

module.exports = db;