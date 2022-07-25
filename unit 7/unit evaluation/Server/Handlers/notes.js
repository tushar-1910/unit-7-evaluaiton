const { Notes } = require('../Database/notes');
const jwt = require('jsonwebtoken');

const getAllNotes = async (req, res) => {
    try {
        const { token } = req.headers;
        let user = jwt.decode(token);
        const notes = await Notes.find({ user: user.id });
        res.status(200).send(notes);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const createNote = async (req, res) => {
    try {
        const { token } = req.headers;
        // console.log(token)
        let user = jwt.decode(token);
        // console.log(user)
        let newNote = req.body;
        newNote.user = user.id;
        let Note = await Notes(newNote);
        await Note.save();
        res.status(201).send(Note);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const updateNote = async (req, res) => {
    try {
        const { token } = req.headers;
        let user = jwt.decode(token);
        let note = req.body;
        note.user = user.id;
        let updatedNote = await Notes.findByIdAndUpdate(note.id, note, { new: true });
        res.status(200).send(updatedNote);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const deleteNote = async (req, res) => {
    try {
        let {id} = req.body;
        console.log(id)
        await Notes.findByIdAndDelete(id);
        res.status(200).send({ message: 'Note deleted' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}



module.exports = {
    getAllNotes,
    createNote,
    updateNote,
    deleteNote
}