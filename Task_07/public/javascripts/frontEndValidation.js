function frontEndValidation(event) {
    event.preventDefault();

    let valid = true;

    const currentYear = new Date().getFullYear();

    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const year = document.getElementById('year');
    const serialNum = document.getElementById('serialNum');

    let t_error = document.querySelector('#frontEnd_title_error');
    if (!title.value || title.value.length < 2) {
        title.classList.add("error");
        valid = false;
        let errorMsg = 'Title should have at least 2 letters';
        t_error.innerText = errorMsg;
    } else {
        title.classList.remove("error");
        t_error.innerText = '';
    }

    let a_error = document.querySelector('#frontEnd_author_error');
    if (!author.value || !/^[A-Z]/.test(author.value)) {
        author.classList.add("error");
        valid = false;
        let errorMsg = 'Author name should start with a capital letter.';
        a_error.innerText = errorMsg;
    } else {
        author.classList.remove("error");
        a_error.innerText = '';
    }

    let y_error = document.querySelector('#frontEnd_year_error');
    if (!year.value || year.value > currentYear) {
        year.classList.add("error");
        valid = false;
        let errorMsg = 'Year cant be later than the current year';
        y_error.innerText = errorMsg;
    } else {
        year.classList.remove("error");
        y_error.innerText = '';
    }

    let s_error = document.querySelector('#frontEnd_serialNum_error');
    if (!serialNum.value || !/^b-\d{4,}$/.test(serialNum.value)) {
        serialNum.classList.add("error");
        valid = false;
        let errorMsg = 'Serial Number must follow the structure \'b-XXXX\' where X\'s are numbers';
        s_error.innerText = errorMsg;
    } else {
        serialNum.classList.remove("error");
        s_error.innerText = '';
    }

    let anyError = document.getElementById("frontEnd_general_error");
    if (valid) {
        anyError.innerText = "";
        document.querySelector("form").submit();
        return true;
    } else {
        anyError.innerText = "Correct all errors in order to submit.";
        return false;
    }
}
