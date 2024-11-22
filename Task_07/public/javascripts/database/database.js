const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:', (err) =>{
    if(err){
        return console.error(err.message);
    }
    console.log("DB connection established")
});

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

db.run("CREATE TABLE users (userId INTEGER PRIMARY KEY AUTOINCREMENT, firstName TEXT, birthYear INTEGER, age INTEGER, email TEXT, countryId INTEGER, FOREIGN KEY (countryId) REFERENCES countries(id))");
    const stmt2 = db.prepare("INSERT INTO users VALUES (?,?,?,?,?,?)");
    stmt2.run(1, "Thierry Henry", 1977, 44,  "thiery09@gmail.com", 1);
    stmt2.run(2, "Joe Biden", 1942, 79, "joebiden@gmail.com", 2);
    stmt2.run(3, "Donald Trump", 1946, 75, "greatagain@gmail.com", 2);
    stmt2.run(4, "Robert Kubica", 1985, 39, "rl9@gmail.com", 1);
    stmt2.run(5, "Iga Curie", 1995, 29, "igatennis@gmail.com", 4);
    stmt2.run(6, "Lamine Yamal", 1987, 42, "kamils@gmail.com", 5);
    stmt2.run(7, "Jin Sakai", 1991, 31, "tsushima@gmail.com", 7);
    stmt2.finalize();
});

module.exports = db;