const express = require('express'),
    router = express.Router(),
    notesController = require('../../controllers/api/apiNotesControllers');

/* GET routes */

router.get('/', notesController.getNotes)
router.get('/:id', notesController.getNoteById)

/** POST routes */
router.post('/', notesController.addNote)

/**DELETE routes */
router.delete('/:id', notesController.deleteNote)

/** PUT routes */
router.put('/:id', notesController.updateNote)


module.exports = router;