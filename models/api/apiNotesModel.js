const Mongoose = require("mongoose");

let Schema = Mongoose.Schema;

let NoteSchema = new Schema({
    note: String,
    title: String,
    priority: String,
    author: String
},{
    timestamps:true
});

const notesModel = Mongoose.model('Notes', NoteSchema)

module.exports = {
    model: notesModel,
    getNotes: async ()=>{
        return await notesModel.find({})
    },
    getNoteById: async(id) =>{
        return await notesModel.findById(id)
    },
    deleteNote: async (id) =>{
        return await notesModel.deleteOne(id)
    },
    updateNote: async (id, data) =>{
        return await notesModel.updateOne({_id:id}, data)
    }
}