const db = require('./database');

const getAllUsers = (callback) => {
    db.all(
         `SELECT users.userId, users.firstName, users.birthYear, users.age, users.email, countries.name AS countryName 
              FROM users 
              LEFT JOIN countries ON users.countryId = countries.rowid`, [], callback);
};

const addNewUser = (data, callback) => {
    db.run('INSERT INTO users (firstName, birthYear, age, email, countryId) VALUES (?,?,?,?,?)', data, callback);
}

const getUser = (userId, callback) => {
    db.get('SELECT userId, firstName, birthYear, age, email, countryId FROM users WHERE userId = ?', [userId], callback);

}

module.exports = { getAllUsers, addNewUser, getUser };