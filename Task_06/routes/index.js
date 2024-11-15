var express = require('express');
var router = express.Router();
const userController = require("../public/javascripts/controllers/userController");

router.get('/', userController.showHomePage);
router.get('/showForm', userController.showUserForm);
router.post('/addUser', userController.addUser);
router.get('/deleteUser/:userId', userController.deleteUser);
router.get('/editUser/:userId', userController.showEditForm);
router.post('/editUser/:userId', userController.editUser);

module.exports = router;
