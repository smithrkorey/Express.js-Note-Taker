const path = require('path');

// ROUTING
module.exports = (app) => {

  // GET Return the notes.html file
  app.get("/notes", function (req, res) {
      res.sendFile(path.join(__dirname, "./public/notes.html"));
  });
  
  // GET Return the index.html file
  app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "./public/index.html"));
  });
};
