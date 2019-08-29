const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    name: String,
    gender: String,
    location: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);