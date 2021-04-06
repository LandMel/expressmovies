var express = require('express');
var router = express.Router();
var noteController = require('../controllers/noteController')
const auth = require("../middlewares/auth")

/* GET home page. */
router.get('/', auth, noteController.index);

router.get('/notes', auth, noteController.indexNote);

module.exports = router;
