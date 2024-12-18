const userRepository = require('../database/repository');

exports.showHomePage = (req, res) => {
    userRepository.getAllUsers((err, users) => {
        if (err){
            return res.status(500).send("Error occurred while retrieving users from database");
        }

        res.render('index', { users });
    });
};

exports.showUserForm = (req, res, next) => {
    res.render('userForm', { errors: {}, users: {} });
}

const validateUser = (userData) => {
    const { firstName, lastName, birthYear, phoneNum, email, countryId } = userData;

    const errors = {};
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
        errors.birthYear = `Please enter a valid birth year between 1900 and ${currentYear}`;
        hasErrors = true;
    }
    const age = birthYear ? currentYear - birthYear : null;
    if (phoneNum.length < 9) {
        errors.phoneNum = "Invalid phone number";
        hasErrors = true;
    }
    if (!email.includes("@")) {
        errors.email = "Invalid email address";
        hasErrors = true;
    }
    if (countryId > 7 || countryId < 1) {
        errors.countryId = "Invalid country";
        hasErrors = true;
    }

    return { errors, age, hasErrors };
};

exports.addUser = (req, res, next) => {
    const userData = req.body;
    const { errors, age, hasErrors } = validateUser(userData);

    if (hasErrors) {
        errors.general = "Correct all errors to proceed";
        return res.render('userForm', { errors, users: userData });
    }

    const { firstName, lastName, birthYear, phoneNum, email, countryId } = userData;
    userRepository.addNewUser([firstName, lastName, birthYear, age, phoneNum, email, countryId], (err) => {
        if (err) {
            return res.status(500).send("Error when trying to add given user");
        }
        res.redirect('/');
    });
};


exports.deleteUser = (req, res) => {
    const id = req.params.userId;

    userRepository.deleteUser(id, (err) => {
        if (err){
            return res.status(500).send("Error when trying to delete user");
        }
        res.redirect('/');
    });
};

exports.showEditForm = (req, res) => {
    const id = req.params.userId;

    userRepository.getUser(id, (err, user) => {
        if (!user) {
            return res.status(404).send("User not found");
        }

        res.render('userEditForm', { errors: {}, user });
    });
};

exports.editUser = (req, res) => {
    const userId = req.params.userId;
    const userData = req.body;
    const { errors, age, hasErrors } = validateUser(userData);

    if (hasErrors) {
        errors.general = "Correct all errors to proceed";
        return res.render('userEditForm', {
            errors,
            user: { ...userData, userId },
        });
    }

    const { firstName, lastName, birthYear, phoneNum, email, countryId } = userData;
    const updatedData = [firstName, lastName, birthYear, age, phoneNum, email, countryId];

    userRepository.editUser(userId, updatedData, (err) => {
        if (err) {
            return res.status(500).send("Error updating user data");
        }
        res.redirect('/');
    });
};
