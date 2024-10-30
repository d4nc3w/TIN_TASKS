var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController");

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/',userController.showUserForm);
router.post('/addUser', userController.addUser);
router.get('/addUser', userController.addUser);

module.exports = router;
