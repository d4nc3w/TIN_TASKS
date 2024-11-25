const db = require('./database');

const getAllBooks = (callback) => {
    db.all(
        `SELECT books.bookId, books.title, books.author, books.year, books.serialNum
              FROM books`, [], callback);
};

const addBook = async (book) => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO books (title, author, year, serialNum) VALUES (?, ?, ?, ?)`;
        db.run(sql, [book.title, book.author, book.year, book.serialNum], function (err) {
            if (err) {
                return reject(err);
            }
            resolve(this.lastID);
        });
    });
};

module.exports = { getAllBooks, addBook };