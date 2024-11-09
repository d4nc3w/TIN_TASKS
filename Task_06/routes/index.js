var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController");

router.get('/', userController.showHomePage);
router.get('/showForm', userController.showUserForm);
router.post('/addUser', userController.addUser);
router.get('/deleteUser/:phoneNum', userController.deleteUser);

module.exports = router;
