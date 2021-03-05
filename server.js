const express = require('express');
var path = require("path");
var fs = require("fs")

//Initiate express
const app = express();

//Set PORT
const PORT = process.env.PORT || 3000;

//Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

//Listener
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
