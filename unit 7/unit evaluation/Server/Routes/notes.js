const express = require('express');
const { getAllNotes, createNote, deleteNote, updateNote } = require('../Handlers/notes');

const NotesRouter = express.Router();

NotesRouter.get('/getAllNotes',getAllNotes);
NotesRouter.post('/createNote',createNote);
NotesRouter.put('/updateNote',updateNote);
NotesRouter.delete('/deleteNote',deleteNote);


module.exports = NotesRouter;