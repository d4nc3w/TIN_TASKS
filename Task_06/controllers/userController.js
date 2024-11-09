const userRepository = require('../database/repository');

exports.showHomePage = (req, res) => {
    userRepository.getAllUsers((err, users) => {
        if (err) return res.status(500).send("Error retrieving users");
        res.render('index', { users });
    });
};

exports.showUserForm = (req, res, next) => {
    res.render('userForm', { errors: {}, users: {} });
}

exports.addUser = (req, res, next)  => {
    let {firstName, lastName, birthYear, age, phoneNum, email} = req.body;
    console.log("addUser");
    console.log(req.body);

    const errors = {};
    const users = {};

    let hasErrors = false;
    if (!/^[A-Z]/.test(firstName)) {
        errors.firstName = "First name is required";
        hasErrors = true;
    }
    if (!/^[A-Z]/.test(lastName)) {
        errors.lastName = "Last name is required";
        hasErrors = true;
    }
    const currentYear = new Date().getFullYear();
    if (!birthYear || birthYear < 1900 || birthYear > currentYear) {
        errors.birthYear = "Please enter a valid birth year between 1900 and " + currentYear;
        hasErrors = true;
    } else {
        age = currentYear - birthYear;
    }
    if (phoneNum.length < 9) {
        errors.phoneNum = "Invalid phone number";
        hasErrors = true;
    }
    if (!email.includes("@")) {
        errors.email = "Invalid email address";
        hasErrors = true;
    }
    if (hasErrors === true) {
        errors.general = "Correct all errors to proceed";
        res.render('userForm', {errors, users: {}});
    } else {
        users.fn = firstName;
        users.ln = lastName;
        users.by = birthYear;
        users.a = age;
        users.pn = phoneNum;
        users.e = email;

        userRepository.addNewUser([firstName, lastName, birthYear, age, phoneNum, email], (err) => {
            if (err){
                return res.status(500).send("Error when trying to add given user");
            }
            res.redirect('/');
        });
    }
}

exports.deleteUser = (req, res) => {
    const phoneNum = req.params.phoneNum;

    userRepository.deleteUser(phoneNum, (err) => {
        if (err){
            return res.status(500).send("Error when trying to delete user");
        }
        res.redirect('/');
    });
};