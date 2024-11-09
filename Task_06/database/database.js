const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run("CREATE TABLE countries (name TEXT)");
    const stmt1 = db.prepare("INSERT INTO countries VALUES(?)");
    // let countriesList = ["Poland", "England", "Germany", "France", "Spain", "Italy"];
    // let placeholders = countriesList.map((country) => '(?)').join(',');
    // let sql = 'INSERT INTO countries (name) VALUES ' + placeholders;
    stmt1.run("Poland");
    stmt1.run("England");
    stmt1.run("Germany");
    stmt1.run("France");
    stmt1.run("Spain");
    stmt1.run("Italy");
    stmt1.finalize();

db.run("CREATE TABLE users (firstName TEXT, lastName TEXT, birthYear INTEGER, age INTEGER, phoneNum TEXT, email TEXT, countryId INTEGER, FOREIGN KEY (countryId) REFERENCES countries(id))");
    const stmt2 = db.prepare("INSERT INTO users VALUES (?,?,?,?,?,?,?)");
    stmt2.run("Thierry", "Henry", 1977, 44, "999012654", "thiery09@gmail.com", 1);
    stmt2.run("Joe", "Biden", 1942, 79, "982655999", "joebiden@gmail.com", 1);
    stmt2.run("Donald", "Trump", 1946, 75, "897213666", "greatagain@gmail.com", 3);
    stmt2.finalize();

    db.each("SELECT rowid AS id, * FROM users", (err, row) => {
        console.log(row.id + ": " + row.firstName + " " + row.lastName + " " + row.birthYear + " " + row.age + " " + row.phoneNum + " " + row.email + " " + row.countryId);
    });

    db.each("SELECT rowid AS id, * FROM countries", (err, row) => {
        console.log(row.id + ": " + row.name);
    });
});

// // db.close();
// db.run("CREATE TABLE countries (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)");
// users(firstName, lastName, birthYear, age, phoneNum, email, countryId)
//db.run("CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, firstName TEXT, lastName TEXT, birthYear INTEGER, age INTEGER, phoneNum TEXT, email TEXT, countryId INTEGER, FOREIGN KEY (countryId) REFERENCES countries(id))");
module.exports = db;