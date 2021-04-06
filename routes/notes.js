const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController')
const auth = require("../middlewares/auth")

/* GET home page. */


router.get('/addnote', auth, noteController.addnote);

router.post('/addnote', auth, noteController.postnote);

router.get('/delete/:id', auth, noteController.deleteNote);

router.get('/:method/:id', auth, noteController.getNoteById);

router.post('/update/:id', auth, noteController.updateNote);

module.exports = router;
