const fs = require('fs');
const path = require('path');

module.exports = (app) => {
    
        fs.readFile("db/db.json","utf8", (err, data) => {
        if (err) throw err;
        var notes = JSON.parse(data);

        //GET api/notes route
        app.get("/api/notes", function(req, res) {
            res.json(notes);
        });

        //POST api/notes
        app.post("/api/notes", function(req, res) {
            //Receives note and adds to db.json
            //Returns note
            let newNote = req.body;
            notes.push(newNote);
            updateDb();
            return console.log("Note: "+newNote.title);
        });

        //GET specific note by id
        app.get("/api/notes/:id", function(req,res) {
            res.json(notes[req.params.id]);
        });

        //DELETE note by specific id 
        app.delete("/api/notes/:id", function(req, res) {
            notes.splice(req.params.id, 1);
            updateDb();
            console.log("Deleted note with id "+req.params.id);
        });
        })}