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
spotify.search({type:"track", query: userSearch, limit: 1}, function(err, data){
    if (err){
        return console.log("Error occured + err");
    }
    // console.log(data.tracks.items[0]);
    // Here, add these points from the response object:
        // artist(s)
        console.log("Artist: " + data.tracks.items[0].artists[0].name);
        // song name
        console.log("Song Name: " + data.tracks.items[0].name);
        // preview link of the song from Spotify
        console.log("Link: " + data.tracks.items[0].external_urls.spotify);
        // album name
        console.log("Album Name: " + data.tracks.items[0].album.name);
    // console.log(JSON.stringify(data[0]));
});
};

// begin Axios
// Axios for OMDB
// queryURL has OMDB api key
function findMovie(userSearch){
var queryURL1 = "http://www.omdbapi.com/?t=" + userSearch + "&y=&plot=short&apikey=trilogy";
// console.log(queryURL1)
// create axios object get request
axios.get(queryURL1).then(
    // callback function to get response
    function(response) {
        // console.log(response.data)
    // Here, add these points from the response object
        // title of the movie
        console.log("Title: " + response.data.Title);
        // year movie was released
        console.log("Year Released: " + response.data.Year);
        // imdb rating
        console.log("IMDB Rating: " + response.data.imdbRating);
        // rotten tomatoes rating
        console.log("Rotten Tomatoes rating: " + response.data.Ratings[1].Value)
        // country where movie was produced
        console.log("Country: " + response.data.Country)
        // language of the movie
        console.log("Language: " + response.data.Language);
        // plot 
        console.log("Plot: " + response.data.Plot);
        // actors
        console.log("Actors: " + response.data.Actors);
    }
);
};

// BandsInTown Axios
function findConcert(userSearch){
    // bandsintown queryURL/api
    var QueryURL2 = "https://rest.bandsintown.com/artists/" + userSearch + "/events?app_id=codingbootcamp";
    axios.get(QueryURL2).then(
        function(response){
            // console.log(response)
            // console.log(response.data[0])
        // Here, add these points from the response object:
            // Artist name
            console.log("Artist: " + response.data[0].lineup[0])
            // Venue Name
            console.log("Venue: " + response.data[0].venue.name)
            // Venue location
            // var locationArr = [];
            var city = console.log(response.data[0].venue.city);
            var state = console.log(response.data[0].venue.region);
            // locationArr.push(city, state);
            // console.log(locationArr);
            // Event Date (using mm/dd/yyyy)
            var date = console.log(response.data[0].datetime);
            // var d = new Date("2019-05-03T12:00:00"); 
            // console.log(d.toLocaleString()); 
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
