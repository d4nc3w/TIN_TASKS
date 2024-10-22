function validate(){
    let valid = false;
    let allErrors = [];

    let title = document.getElementById("title");
    let t_error = document.querySelector('#title_error');
    if(title.value.length < 2){
        valid = false;
        title.classList.add("error");
        let errorMsg = 'Title should have at least 2 characters.'
        t_error.innerText = errorMsg;
        allErrors.push(errorMsg);
    } else {
        title.classList.remove("error");
        t_error.innerText = '';
    }

    let author = document.getElementById("author");
    let a_error = document.querySelector('#author_error');
    if(!/^[A-Z]/.test(author.value)){
        valid = false;
        author.classList.add("error");
        let errorMsg = 'Author name should be written starting from uppercase.';
        a_error.innerText = errorMsg;
        allErrors.push(errorMsg);
    } else {
        author.classList.remove("error");
        a_error.innerText = '';
    }

    let year = document.getElementById("year");
    let y_error = document.querySelector('#year_error');
    const d = new Date();
    let currentYear = d.getFullYear();
    if(year.value > currentYear || year.value < 1000){
        valid = false;
        year.classList.add("error");
        let errorMsg = 'You cant add book that is not yet released or is too old';
        y_error.innerText = errorMsg;
        allErrors.push(errorMsg);
    } else {
        year.classList.remove("error");
        y_error.innerText = '';
    }

    let key = document.getElementById("personal_key");
    let k_error = document.querySelector('#key_error');
    let keyErrors = [];

    if(key.value.length < 5){
        valid = false;
        keyErrors.push(' Given personal key is too short [key > 5]');
    }
    if(!/[A-Z]/.test(key.value)){
        valid = false;
        keyErrors.push('Personal key should have at least 1 uppercase char.');
    }
    if(!/[a-z]/.test(key.value)){
        valid = false;
        keyErrors.push('Personal key should have at least 1 lowercase char.');
    }
    if(!/=$/.test(key.value)) {
        valid = false;
        keyErrors.push('Personal key must end with "=" sign.');
    } 
    if (keyErrors.length > 0) {
        key.classList.add("error");
        k_error.innerText = keyErrors.join("\n");
    } else {
        key.classList.remove("error");
        k_error.innerText = '';
    }
    if(allErrors !== null){
        // let all_errors = document.querySelector('#all_errors');
        // allErrors.push(keyErrors);
        // all_errors.innerText = allErrors.join('\n');
        all_errors.innerText = "Correct all errors in order to submit.";
    }

    return valid;
}