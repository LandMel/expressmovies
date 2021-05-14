const NotesModel = require("../../models/api/apiNotesModel")

module.exports = {
    getNotes: async (req,res,next) => {
        try{
            let document = await NotesModel.getNotes()
            res.json(document)
        } catch(err){
            console.log(err)
            res.status(500).send("erreur interne")
        }
    },
    getNoteById: async (req,res,next) =>{
        try{
            let document = await NotesModel.getNotesById(req.params.id)
            res.json(document)
        } catch (error){
            console.log(err)
            res.status(500).send("erreur interne")
        }
    },
    addNote: async (req,res,next) =>{
        let data = new NotesModel.model(req.headers)
        data.save(function (err, data){
            if (err) console.log(err)
            res.json(data)
        })
    },
    deleteNote: async (req,res,next) =>{
        try {
            let note_id = req.params.id
            await NotesModel.deleteNote(note_id)
            res.status(200).send(`Note id ${note_id} détruite`)
        } catch (error) {
            console.log(err)
            res.status(500).send("erreur interne")
        }
    },
    updateNote: async (req,res,next) =>{
        try {
            let note_id = req.params.id
            await NotesModel.updateNote(note_id, req.headers)
            res.status(200).send(`Note id ${note_id} mise à jour`)
        } catch (error) {
            console.log(err)
            res.status(500).send("erreur interne")
        }
    }
}