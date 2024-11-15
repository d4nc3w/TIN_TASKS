const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run("CREATE TABLE countries (name TEXT)");
    const stmt1 = db.prepare("INSERT INTO countries VALUES(?)");
    stmt1.run("Poland");
    stmt1.run("England");
    stmt1.run("Germany");
    stmt1.run("France");
    stmt1.run("Spain");
    stmt1.run("Italy");
    stmt1.run("Japan");
    stmt1.finalize();

db.run("CREATE TABLE users (userId INTEGER PRIMARY KEY AUTOINCREMENT, firstName TEXT, lastName TEXT, birthYear INTEGER, age INTEGER, phoneNum TEXT, email TEXT, countryId INTEGER, FOREIGN KEY (countryId) REFERENCES countries(id))");
    const stmt2 = db.prepare("INSERT INTO users VALUES (?,?,?,?,?,?,?,?)");
    stmt2.run(1,"Thierry", "Henry", 1977, 44, "999012654", "thiery09@gmail.com", 1);
    stmt2.run(2, "Joe", "Biden", 1942, 79, "982655999", "joebiden@gmail.com", 2);
    stmt2.run(3, "Donald", "Trump", 1946, 75, "897213666", "greatagain@gmail.com", 2);
    stmt2.run(4, "Robert", "Lewandowski", 1985, 39, "555231776", "rl9@gmail.com", 1);
    stmt2.run(5, "Iga", "Swiatek", 1995, 29, "443321954", "igatennis@gmail.com", 1);
    stmt2.run(6, "Kamil", "Stoch", 1987, 42, "555321954", "kamils@gmail.com", 1);
    stmt2.run(7, "Jin", "Sakai", 1991, 31, "786443001", "tsushima@gmail.com", 7);
    stmt2.finalize();
});

module.exports = db;