const express = require("express");

const setupContactRoutes = require("./app/routes/index");


// cors mongoose 
const cors = require("cors");

//instant express
const app = express();

app.use(cors());

// parse request of content type - application/json
app.use(express.json());

// parse request of content type - application/urlencorded
app.use(express.urlencoded({ extended: true }));

//simple route

app.get("/", (req, res) => {
    res.json({ message: "welcom to contact book application" });

});


setupContactRoutes(app);


module.exports = app;
