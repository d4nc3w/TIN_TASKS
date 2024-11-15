const db = require('./database');

const getAllUsers = (callback) => {
    db.all(
         `SELECT users.userId, users.firstName, users.lastName, users.birthYear, users.age, users.phoneNum, users.email, countries.name AS countryName 
              FROM users 
              LEFT JOIN countries ON users.countryId = countries.rowid`, [], callback);
};


const addNewUser = (data, callback) => {
    db.run('INSERT INTO users (firstName, lastName, birthYear, age, phoneNum, email, countryId) VALUES (?,?,?,?,?,?,?)', data, callback);
}

const deleteUser = (userId, callback) => {
    db.run('DELETE FROM users WHERE userId = ?', userId, callback);
};

const editUser = (userId, data, callback) => {
    db.run(
        `UPDATE users SET firstName = ?, lastName = ?, birthYear = ?, age = ?, phoneNum = ?, email = ?, countryId = ? 
         WHERE userId = ?`,
        [...data, userId],
        callback
    );
};


const getUser = (userId, callback) => {
    db.get('SELECT userId, firstName, lastName, birthYear, age, phoneNum, email, countryId FROM users WHERE userId = ?', [userId], callback);

}

module.exports = { getAllUsers, addNewUser, deleteUser, editUser, getUser };