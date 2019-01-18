// FriendFinder - apiRoutes.js - UW Coding Bootcamp Week 13 Homework Assignment

// Require friends.js to access api/data
var friends = require("../data/friends");

module.exports = function(app) {
  // Get data from friends api in JSON format
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
  // Post data to friends api
  app.post("/api/friends", function(req, res) {
    // console.log(req.body.scores);

    // Set variable for user data (name, photo & scores)
    var user = req.body;

    // parseInt for scores so data can be used for math
    for(var i = 0; i < user.scores.length; i++) {
      user.scores[i] = parseInt(user.scores[i]);
    }

    // Set variable to hold index id of person in api that's the best match based on scores. Default is set to the first person in the API.
    var bestFriendIndex = 0;

    // Set variable to hold the closest matching score value calculations for each person to compare as we loop through the api to find the closest match.
    // default set to 40, which would be the widest difference in match if one user answers values of all "1" and the other answers with values of all "5".
    var minimumDifference = 40;

    // In this nested for-loop, we start off with a zero difference and compare the user's scores and the scores of each user in the array, one set at a time
    
    for(var i = 0; i < friends.length; i++) {
      var totalDifference = 0;
      for(var j = 0; j < friends[i].scores.length; j++) {
        var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
        totalDifference += difference;
      }

      // With each iteration, compare and update bestFriendIndex and minimumDifference score for the next comparison.
        if(totalDifference < minimumDifference) {
        bestFriendIndex = i;
        minimumDifference = totalDifference;
      }
    }

    // Push user data to friends API
    friends.push(user);
    // console.log(friends);

    // Send best friend match to the browser
    res.json(friends[bestFriendIndex]);
  });
};