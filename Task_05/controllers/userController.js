exports.showUserForm = (req, res, next) => {
    res.render('userForm', { errors: {}, values: {} });
}

exports.addUser = (req, res, next)  => {
    let { firstName, lastName, birthYear, age, phoneNum, email } = req.body;
    console.log("addUser");
    console.log(req.body);

    const errors = {};
    const values = {};

    let hasErrors = false;
    if(!/^[A-Z]/.test(firstName)){
        errors.firstName = "First name is required";
        hasErrors = true;
    }
    if(!/^[A-Z]/.test(lastName)){
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
    if(phoneNum.length < 9){
        errors.phoneNum = "Invalid phone number";
        hasErrors = true;
    }
    if(!email.includes("@")){
        errors.email = "Invalid email address";
        hasErrors = true;
    }
    if(hasErrors === true){
        errors.general = "Correct all errors to proceed";
        res.render('userForm', { errors });
    } else {
        values.fn = firstName;
        values.ln = lastName;
        values.by = birthYear;
        values.a = age;
        values.pn = phoneNum;
        values.e = email;
        res.render('userForm', { errors: {}, values });
    }
}
