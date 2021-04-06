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

exports.NoteModel = Mongoose.model("Note", NoteSchema);