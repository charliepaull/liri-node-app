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
// require moment npm package (used for mm/dd/yyyy)
var moment = require("moment");
// require fs package (used to read random.txt file)
var fs = require("fs");
var divider = "\n------------------------------\n";

function readRandom(){
    fs.readFile("random.txt", "utf8", function(error, data) {

        // If the code experiences any errors it will log the error to the console.
        if (error) {
          return console.log(error);
        }
        // We will then print the contents of data
        var dataArr = data.split(",");
        var readCommand = (dataArr[0]);
        var songArr = (dataArr[1]);
        command = readCommand;
        userSearch = songArr;
        // console.log(dataArr);
        // line above console.logs correctly: I Want it That Way
        spotifySong(userSearch);
});
};

function spotifySong(userSearch){
// start Spotify request
    if (command = "spotify-this-song"){
    }

    if (!userSearch){
        userSearch = "Too Much Time on My Hands"
    }
spotify.search({type:"track", query: userSearch, limit: 1}, function(err, data){
    if (err){
        return console.log("Error occured + err");
    }
    // Here, add these points from the response object:
        // artist(s)
        var songArtist = "Artist: " + data.tracks.items[0].artists[0].name;
        // song name
        var songName = "Song Name: " + data.tracks.items[0].name;
        // preview link of the song from Spotify
        var link = "Link: " + data.tracks.items[0].external_urls.spotify;
        // album name
        var albumName = "Album Name: " + data.tracks.items[0].album.name;

        for (x in data){
            console.log(songArtist, divider, songName, divider,
                link, divider, albumName, divider);
            return;
        }
});
};

// begin Axios
// Axios for OMDB
// queryURL has OMDB api key

function findMovie(userSearch){
    if (!userSearch){
        userSearch = "Blazing Saddles"
    }
var queryURL1 = "http://www.omdbapi.com/?t=" + userSearch + "&y=&plot=short&apikey=trilogy";
// console.log(queryURL1)
// create axios object get request
axios.get(queryURL1).then(
    // callback function to get response
    function(response) {
        // console.log(response.data)
    // Here, add these points from the response object
        // title of the movie
        var title = "Title: " + response.data.Title;
        // year movie was released
        var releaseYear = "Year Released: " + response.data.Year;
        // imdb rating
        var imdb = "IMDB Rating: " + response.data.imdbRating;
        // rotten tomatoes rating
        var rtRating = "Rotten Tomatoes rating: " + response.data.Ratings[1].Value;
        // country where movie was produced
        var country = "Country: " + response.data.Country;
        // language of the movie
        var language = "Language: " + response.data.Language;
        // plot 
        var plot = "Plot: " + response.data.Plot;
        // actors
        var actors = "Actors: " + response.data.Actors;

         for (x in response){
            console.log(title, divider, releaseYear, divider, imdb, divider, 
            rtRating, divider, country, divider, language, divider,
            plot, divider, actors);
            return;
        }
    }
);
};

// BandsInTown Axios
function findConcert(userSearch){
    if (!userSearch){
        console.log(divider,"Go find yourself a Nickleback concert, you dweeb.");
        return
    }
    // bandsintown queryURL/api
    var QueryURL2 = "https://rest.bandsintown.com/artists/" + userSearch + "/events?app_id=codingbootcamp";
    axios.get(QueryURL2).then(
        function(response){
            // console.log(response.data[0]);
        // // Here, add these points from the response object:
        //     // Artist name
            var concertArt = "Artist: " + response.data[0].lineup[0];
            // Venue Name
            var venue = "Venue: " + response.data[0].venue.name;
            // Venue location
            var city = "City: " + (response.data[0].venue.city);
            var state = "State: " + (response.data[0].venue.region);
            // Event Date (using mm/dd/yyyy)
            var date = response.data[0].datetime;
            date = "Date: " + moment(new Date()).format("DD/MM/YYYY");
            
            for (x in response){
                console.log(concertArt, divider, venue, divider, city,
                    divider, state, divider, date, divider);
                return
            }
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
    console.log("Concert details: ");
    break;

    case "spotify-this-song":
    spotifySong(userSearch);
    console.log("Song info: ");
    break;

    case "movie-this":
    findMovie(userSearch);
    console.log("Movie info: ")
    break;

    case "do-what-it-says":
    readRandom();
    console.log("The song is...");
    break;

    default: console.log("Enter a command.");
};