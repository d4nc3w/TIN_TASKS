var express = require('express');
var router = express.Router();
const bookController = require('../public/javascripts/bookController');

router.get('/', bookController.showHomePage);
router.post('/addBook', bookController.addBook);
router.get('/newBooks', (req, res) => {
    const randomBook = {
        title: `${Math.random().toString(36).substring(6)}`,
        author: `${Math.random().toString(36).substring(5)}`,
        year: Math.floor(Math.random() * 50) + 1900,
        serialNum: `b-${Math.floor(Math.random() * 10000)}`
    };
    res.json(randomBook);
});

module.exports = router;
