# liri-node-app

This is Liri. She is a functional application that takes in command line arguments and returns information based on your request. 

Liri returns information regarding concerts, movies, and songs from Spotify. 

Steps: 
    * The user decides if he or she would like to learn more about current concerts, past & present movies, or songs from Spotify. 
    ---------------------------------------------------------------

    The user must use the following commands in the terminal:
        * The first argument must be 'node.'
        * The second argument must be 'liri.js'.
        * Depending on the user's choice, the third command line argument will be one of these choices below. 
            * 'concert-this'
            * 'movie-this'
            * 'spotify-this-song'
            * 'do-what-it-says' (This will return the Spotify 
            song in the random.txt file within the application). Do not enter a fourth command if this option is chosen.
        * The fourth command line argument is optional. If the user chooses to omit it, a random Spotify song or movie will return, as chosen by the developer. If the user chooses to search for a concert but omits this argument, a specific message will appear.

    The following information is displayed based on the user's third command line preference:
        * concert-this returns: 
            * Artist's name
            * Name of the venue for their next concet
            * Venue's location
            * Venue's state & city
            * Date of the event
        * spotify-this-song returns: 
            * Artist's name
            * Song name
            * A link to the song on Spotify's website
            * Album name
        * movie-this returns:
            * Title of the movie
            * IMDB rating
            * Rotten Tomatoes rating
            * Country where the movie was produced
            * Languages of the movie
            * Plot of the movie
            * Actors in the movie

    Enjoy Liri! She's a smart one. 