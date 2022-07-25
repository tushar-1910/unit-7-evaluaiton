const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: String,
    note: String,
    label: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
})


const Notes = mongoose.model('Notes', NoteSchema);

module.exports = { Notes };