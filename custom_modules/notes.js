class Note{
    constructor(id, note, priority, author, title, type){
        this.note = note;
        this.title = title;
        this.priority = priority;
        this.author = author;
        this.id = id;
        this.type = type;
    }
}

const notes = [
    new Note(0, "blabla asase sae as wouf wouf", "urgent", "Jimbo Jones","Titre de la note", "mongo"),
    new Note(1, "blabla aes fase afs eaf easfa s", "urgent", "Bart Simpson","Titre 2", "mongo"),
    new Note(2, "wouf wouf yutujtyutyut ut e rt", "urgent", "Eric Cartman","Titre cool", "node"),
    new Note(3, "blawouf wouf erth ertherthert h", "urgent", "Ikigai Susurasho","Le grand titre", "node")
];

exports.addNote = function(data){
    let id = notes.length;
    notes.push(new Note(id, data.note, data.priority, data.author, data.title));
    return true;
}

exports.getByType = function (type) {
    var data = [];
    for ( let i = 0 ; i < notes.length ; i++){
        if (notes[i].type == type){
            data.push(notes[i]);
        }
    }
    return data;
}


exports.getNoteById = function(id){
    return notes[id];
}

exports.allNotes = notes;