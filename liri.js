// push into liri.js the .env folder with
// only my local ID & SECRET keys
require("dotenv").config();
// push in keys.js, which has .env codes linked to it.
// this links in API for Spotify
// var spotify = new Spotify(keys.spotify);
// used to trigger and require Axios for this file
// module already installed
var axios = require("axios");

// begin Axios
// Axios for OMDB
// user enters movie title
var movieName = userChoice;
// queryURL has OMDB api key
var queryURL1 = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
// console.log(queryURL1)
// create axios object get request
axios.get(queryURL1).then(
    // callback function to get response
    function(response) {
        console.log(response.data)
    }
);

// BandsInTown Axios
var artist = userChoice;
// bandsintown queryURL/api
var QueryURL2 = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
console.log("queryURL2")
axios.get(QueryURL2).then(
    function(response){
        console.log(response.data)
    }
)

// // create command line interfaces for the user
var userInput1 = process.argv[2];
var userChoice = process.argv[3];
// // logic of 4 possible commands:
//     // concert-this
//     // spotify-this-song
//     // movie-this
//     // do-what-it-says
// use switch-case 
switch (userInput1){
    case "concert-this":
    // findConcert();
    console.log("Find a concert")
    break;

//     case "spotify-this-song":
//     spotifySong();
//     console.log("What song is this?")
//     break;

//     case "movie-this":
//     console.log("Movie stats")
//     // movieInfo();
//     break;

//     case "do-what-it-says":
//     default: console.log("Nothing there");
// }

// var details = {};
// function findConcert(){
//     switch (userChoice){
//         case details:
//     }
};