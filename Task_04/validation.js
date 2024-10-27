function validate() {
    let valid = true;  
    let isAnyError = false;

    let title = document.getElementById("title");
    let t_error = document.querySelector('#title_error');
    if (title.value.length < 2) {
        valid = false;
        title.classList.add("error");
        let errorMsg = 'Title should have at least 2 characters.';
        t_error.innerText = errorMsg;
        isAnyError = true;
    } else {
        title.classList.remove("error");
        t_error.innerText = '';
    }

    let author = document.getElementById("author");
    let a_error = document.querySelector('#author_error');
    if (!/^[A-Z]/.test(author.value)) {
        valid = false;
        author.classList.add("error");
        let errorMsg = 'Author name should start with an uppercase letter.';
        a_error.innerText = errorMsg;
        isAnyError = true;
    } else {
        author.classList.remove("error");
        a_error.innerText = '';
    }

    let year = document.getElementById("year");
    let y_error = document.querySelector('#year_error');
    const d = new Date();
    let currentYear = d.getFullYear();
    if (year.value > currentYear || year.value < 1000) {
        valid = false;
        year.classList.add("error");
        let errorMsg = 'Release year must be between 1000 and the current year.';
        y_error.innerText = errorMsg;
        isAnyError = true;
    } else {
        year.classList.remove("error");
        y_error.innerText = '';
    }

    let key = document.getElementById("personal_key");
    let k_error = document.querySelector('#key_error');
    let keyErrors = [];
    if (key.value.length < 5) {
        valid = false;
        keyErrors.push('Personal key must be at least 5 characters long.');
    }
    if (!/[A-Z]/.test(key.value)) {
        valid = false;
        keyErrors.push('Personal key must contain at least 1 uppercase letter.');
    }
    if (!/[a-z]/.test(key.value)) {
        valid = false;
        keyErrors.push('Personal key must contain at least 1 lowercase letter.');
    }
    if (!/=$/.test(key.value)) {
        valid = false;
        keyErrors.push('Personal key must end with "=".');
    }

    if (keyErrors.length > 0) {
        key.classList.add("error");
        k_error.innerText = keyErrors.join("\n");
        valid = false;
    } else {
        key.classList.remove("error");
        k_error.innerText = '';
    }

    let anyError = document.getElementById("anyError");
    if (valid === false) {
        anyError.innerText = "Correct all errors in order to submit.";
        return false;  
    } else {
        anyError.innerText = "";
        displayBook();  
        return false; 
    }
}

function displayBook() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let year = document.getElementById("year").value;
    let publisher = document.getElementById("publisher").value;

    document.getElementById("titleApproved").innerText = `Title: ${title}`;
    document.getElementById("authorApproved").innerText = `Author: ${author}`;
    document.getElementById("yearApproved").innerText = `Release Year: ${year}`;
    document.getElementById("publisherApproved").innerText = `Publisher: ${publisher}`;
}
