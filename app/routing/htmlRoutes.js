// FriendFinder - htmlRoutes.js - UW Coding Bootcamp Week 13 Homework Assignment

// DEPENDENCIES
// Path package to get the correct file path for our html
var path = require("path");
var express = require("express");

// ROUTING
module.exports = function(app) {
  // HTML   GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
    app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // If no matching route is found default to home
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};