// FriendFinder - server.js - UW Coding Bootcamp Week 13 Homework Assignment

// Dependencies
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

// Express Configuration
// Tell Node we are setting up an express server
var app = express();

// Set port for server
var PORT = process.env.PORT || 3000;

// Use the express.static middleware to serve static content for the app from "public"
app.use(express.static("app/public"));


// BodyParser used for server to interpret data sent to it. (code is standard).
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));



// ROUTER
// Points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// LISTENER - Starts the server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });


