const db = require("../develop/db/db.json");
const fs = require('fs');
const path = require('path');

module.exports = (app) => {
    
    app.get('/notes', (req, res) => {
    store
      .getNotes()
      .then((notes) => {
        return res.json(notes);
      })
      .catch((err) => res.status(500).json(err));
  });
  
    app.post('/notes', (req, res) => {
    store
      .addNote(req.body)
      .then((note) => res.json(note))
      .catch((err) => res.status(500).json(err));
  });
  
  // DELETE "/api/notes" deletes the note with an id equal to req.params.id
  app.delete('/notes/:id', (req, res) => {
    store
      .removeNote(req.params.id)
      .then(() => res.json({ ok: true }))
      .catch((err) => res.status(500).json(err));
  });
}