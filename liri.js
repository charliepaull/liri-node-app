// push into liri.js the .env folder with
// only my local ID & SECRET keys
require("dotenv").config();

// used to trigger and require Axios for this file
// module already installed
var axios = require("axios");
// push in key.js
var keys = require("./key.js");
// require npm Spotify package
var Spotify = require("node-spotify-api");
// push in keys.js, which has .env codes linked to it.
// this links in API for Spotify
var spotify = new Spotify(keys.spotify);
// make var command & set to process.argv[2]
var command = process.argv[2];
// use to format & join into a string from each user input after process.argv[2]
var userSearch = process.argv.slice(3).join(" ");

function spotifySong(userSearch){
// start Spotify request
spotify.search({type:"track", query: userSearch, limit: 3}, function(err, data){
    if (err){
        return console.log("Error occured + err");
    }
    console.log(data.tracks.items);
    // console.log(JSON.stringify(data[0]));
});
};

// begin Axios
// Axios for OMDB
// var movieName = userSearch
// // queryURL has OMDB api key
// var queryURL1 = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
// // console.log(queryURL1)
// // create axios object get request
// axios.get(queryURL1).then(
//     // callback function to get response
//     function(response) {
//         console.log(response.data)
//     }
// );

// BandsInTown Axios
function findConcert(userSearch){
    // bandsintown queryURL/api
    var QueryURL2 = "https://rest.bandsintown.com/artists/" + userSearch + "/events?app_id=codingbootcamp";
    axios.get(QueryURL2).then(
        function(response){
            console.log(response.data)
        }
    );

};

// // logic of 4 possible commands:
//     // concert-this
//     // spotify-this-song
//     // movie-this
//     // do-what-it-says
// use switch-case 
switch (command){
    case "concert-this":
    findConcert(userSearch);
    console.log("Concert ");
    break;

    case "spotify-this-song":
    spotifySong(userSearch);
    console.log("What song is this?");
    break;

    case "movie-this":
    findMovie(userSearch);
    console.log("Movie stats")
    // movieInfo();
    break;

    case "do-what-it-says":
    console.log("Nothing there");
    break;

    default: console.log("Nothing entered");
};
