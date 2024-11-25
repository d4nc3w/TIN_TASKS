const repository = require('../javascripts/repository');

const validateBook = (bookData) => {
    const { title, author, year, serialNum } = bookData;
    const errors = {};
    let hasErrors = false;

    if (!title) {
        errors.title = "Title cannot be empty";
        hasErrors = true;
    } else if (title.length < 2) {
        errors.title = "Title should have at least 2 letters.";
        hasErrors = true;
    }
    if (!author) {
        errors.author = "Author cannot be empty";
        hasErrors = true;
    } else if (!/^[A-Z]/.test(author)) {
        errors.author = "Author name should start with a capital letter.";
        hasErrors = true;
    }
    const currentYear = new Date().getFullYear();
    if (!year) {
        errors.year = "Year cannot be empty";
        hasErrors = true;
    } else if (year > currentYear) {
        errors.year = "Year can't be later than the current year";
        hasErrors = true;
    }
    if (!serialNum) {
        errors.serialNum = "Serial Number cannot be empty";
        hasErrors = true;
    } else if (!/^b-\d{4,}$/.test(serialNum)) {
        errors.serialNum = "Serial Number must follow the structure 'b-XXXX' where X's are numbers";
        hasErrors = true;
    }

    return { errors, hasErrors };
};

exports.showHomePage = (req, res) => {
    repository.getAllBooks((err, books) => {
        if (err) {
            return res.status(500).send("Something went wrong when retrieving all books from db.");
        }

        res.render('index', { books, errors: {} });
    });
};

exports.addBook = async (req, res) => {
    const bookData = req.body;
    const { errors, hasErrors } = validateBook(bookData);

    if (hasErrors) {
        return repository.getAllBooks((err, books) => {
            if (err) {
                return res.status(500).send("Something went wrong when retrieving all books from db.");
            }
            errors.general = "Correct all errors to proceed.";
            res.render('index', { errors, books });
        });
    }

    try {
        await repository.addBook(bookData);
        res.redirect('/');
    } catch (error) {
        res.status(500).send("Error occurred while adding the book.");
    }
};
