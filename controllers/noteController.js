var notes = require('../custom_modules/notes')
var {NoteModel} = require('../models/notemodel')

exports.index = function(req, res, next) {
    res.render('index', { title: 'Base de donnée MongoDB' })
};

exports.indexNote = function(req, res, next) {
    NoteModel.find({}).then(function(document){
        res.render('notes/index', { title: 'Notes', notes: document})
    }).catch((err)=>console.log(err))
};

exports.addnote = function(req, res, next){
    res.render('notes/addnote')
}

exports.postnote = function(req, res, next){
    let data = new NoteModel(req.body)
    data.save(function(err, data){
        if(err) console.error(err)
        res.redirect('/notes')
    })
}

exports.getNoteById = function(req, res, next){
    NoteModel.findById(req.params.id).then(function(document){
        if(req.params.method !="update"){
            res.render('notes/note', {note:document})
        } else {
            res.render('notes/edit', {note:document})
        }
    }).catch((err)=>console.log(err));
}

exports.updateNote = function(req, res, next){
    NoteModel.updateOne({ _id: req.params.id }, req.body).then(function () {
        res.redirect('/notes')
    })
}

exports.deleteNote = function(req, res, next){
    NoteModel.findByIdAndDelete(req.params.id).then(function (err){
        if(err) console.log(err)
        res.redirect('/notes')
    })
}