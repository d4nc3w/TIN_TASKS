const db = require('./database');

const getAllUsers = (callback) => {
    db.all('SELECT * FROM users', [], callback);
}

const addNewUser = (data, callback) => {
    db.run('INSERT INTO users (firstName, lastName, birthYear, age, phoneNum, email) VALUES (?,?,?,?,?,?)', data, callback);
}

const deleteUser = (phoneNumber, callback) => {
    db.run('DELETE FROM users WHERE phoneNum = ?', phoneNumber, callback);
}

module.exports = { getAllUsers, addNewUser, deleteUser }