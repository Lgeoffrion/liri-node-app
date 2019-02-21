require("dotenv").config();

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

// Commands needed to be coded
//Need to set up variable for argu2 and argu3 
//argu 2 will be:  concert-this, spotify-this-song, movie-this, or do-what-it-says which will prompts different if functions

// * `concert-this`
// `node liri.js concert-this <artist/band name here>`
// * Name of the venue
// * Venue location
// * Date of the Event (use moment to format this as "MM/DD/YYYY")
// BandsInTown API info
`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`

// * `spotify-this-song`
// `node liri.js spotify-this-song '<song name here>'`
// * Artist(s)
// * The song's name
// * A preview link of the song from Spotify
// * The album that the song is from

// * `movie-this`
// `node liri.js movie-this '<movie name here>'`
// * Title of the movie.
// * Year the movie came out.
// * IMDB Rating of the movie.
// * Rotten Tomatoes Rating of the movie.
// * Country where the movie was produced.
// * Language of the movie.
// * Plot of the movie.
// * Actors in the movie.

// * `do-what-it-says`
// * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
// * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
// * Edit the text in random.txt to test out the feature for movie-this and concert-this.

