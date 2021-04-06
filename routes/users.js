var express = require('express');
var router = express.Router();
let usersController = require('../controllers/usersController')

/* GET users listing. */
router.get('/register', usersController.index);
router.get('/login', usersController.login);

router.post('/register', usersController.registerUser);
router.post('/login', usersController.loginUser);

module.exports = router;
