require("dotenv").config();

var fs = require("fs");
var moment = require("moment");
var axios = require("axios");
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

// Operators for if functions
let operator = process.argv[2];
let operator2 = process.argv.slice(3).join("+"); //this might be the only one i need
let artistName = process.argv.slice(3).join(" ");

// * `concert-this`
// `node liri.js concert-this <artist/band name here>`
if (operator === "concert-this") {
    axios
        .get("https://rest.bandsintown.com/artists/" + operator2 + "/events?app_id=codingbootcamp")
        .then(function (response) {
            eventData = response.data;
            for (var i = 0; i < eventData.length; i++) {
                console.log("\nBand/Artist: " + artistName +
                    "\nVenue Name: " + eventData[i].venue.name +
                    "\nVenue Location: " + eventData[i].venue.city + " " + eventData[i].venue.region + " " + eventData[i].venue.country +
                    "\nDate/Time: " + moment(eventData[i].datetime).format('MMMM Do YYYY, h:mm a'));
                fs.appendFile("log.txt",
                    "\nBand/Artist: " + artistName +
                    "\nVenue Name: " + eventData[i].venue.name +
                    "\nVenue Location: " + eventData[i].venue.city + " " + eventData[i].venue.region + " " + eventData[i].venue.country +
                    "\nDate/Time: " + moment(eventData[i].datetime).format('MMMM Do YYYY, h:mm a') + "\n",
                    function (err) {
                        if (err) throw err;
                    });
            }
        })
}

// * `spotify-this-song`
// `node liri.js spotify-this-song '<song name here>'`
if (operator === "spotify-this-song") {
    // let trackName = process.argv.slice(3).join(" ");
    spotify.search({ type: 'track', query: '"' + operator2 + '"' }, function (error, data) {
        if (!error) {
            var songData = data.tracks.items[0];
            console.log
                (
                    "\nArtist: " + songData.artists[0].name +
                    "\nSong: " + songData.name +
                    "\nPreview URL: " + songData.preview_url +
                    "\nAlbum: " + songData.album.name
                );
            fs.appendFile("log.txt",
                "\nArtist: " + songData.artists[0].name +
                "\nSong: " + songData.name +
                "\nPreview URL: " + songData.preview_url +
                "\nAlbum: " + songData.album.name + "\n",
                function (err) {
                    if (err) throw err;
                });
        }
        else {
            console.log('Error occurred.');
        }
    });
}

// * `movie-this`
// `node liri.js movie-this '<movie name here>'`
if (operator === "movie-this") {
    axios
        .get("http://www.omdbapi.com/?apikey=trilogy&t=" + operator2)

        .then(function (response) {
            var data = response.data;
            console.log("\nTitle: " + data.Title +
                "\nRelease Year: " + data.Year +
                "\nIMDB Rating: " + data.imdbRating +
                "\nRotten Tomatoes Rating: " + data.Ratings[1].Value +
                "\nProduced In: " + data.Country +
                "\nLanguage: " + data.Language +
                "\nPlot: " + data.Plot +
                "\nActors: " + data.Actors
            )
            fs.appendFile("log.txt", "\nTitle: " + data.Title +
                "\nRelease Year: " + data.Year +
                "\nIMDB Rating: " + data.imdbRating +
                "\nRotten Tomatoes Rating: " + data.Ratings[1].Value +
                "\nProduced In: " + data.Country +
                "\nLanguage: " + data.Language +
                "\nPlot: " + data.Plot +
                "\nActors: " + data.Actors + "\n",
                function (err) {
                    if (err) throw err;
                });
        }
        );
}


// * `do-what-it-says`
// other options to put into random.txt
// spotify-this-song,"I Want it That Way"
// movie-this,The Fifth Element
// concert-this,The Killers

if (operator === "do-what-it-says") {
    fs.readFile("random.txt", "utf8", function (error, data) {

        // If the code experiences any errors it will log the error to the console.
        if (error) {
            return console.log(error);
        }

        var dataArr = data.split(",");
        let operator = dataArr[0];
        let operator2 = dataArr[1];

        if (operator === "concert-this") {
            axios
                .get("https://rest.bandsintown.com/artists/" + operator2 + "/events?app_id=codingbootcamp")
                .then(function (response) {
                    eventData = response.data;
                    for (var i = 0; i < eventData.length; i++) {
                        console.log("\nBand/Artist: " + artistName +
                            "\nVenue Name: " + eventData[i].venue.name +
                            "\nVenue Location: " + eventData[i].venue.city + " " + eventData[i].venue.region + " " + eventData[i].venue.country +
                            "\nDate/Time: " + moment(eventData[i].datetime).format('MMMM Do YYYY, h:mm a'));
                        fs.appendFile("log.txt",
                            "\nBand/Artist: " + artistName +
                            "\nVenue Name: " + eventData[i].venue.name +
                            "\nVenue Location: " + eventData[i].venue.city + " " + eventData[i].venue.region + " " + eventData[i].venue.country +
                            "\nDate/Time: " + moment(eventData[i].datetime).format('MMMM Do YYYY, h:mm a') + "\n",
                            function (err) {
                                if (err) throw err;
                            });
                    }
                })
        }

        // * `spotify-this-song`
        // `node liri.js spotify-this-song '<song name here>'`
        if (operator === "spotify-this-song") {
            // let trackName = process.argv.slice(3).join(" ");
            spotify.search({ type: 'track', query: '"' + operator2 + '"' }, function (error, data) {
                if (!error) {
                    var songData = data.tracks.items[0];
                    console.log
                        (
                            "\nArtist: " + songData.artists[0].name +
                            "\nSong: " + songData.name +
                            "\nPreview URL: " + songData.preview_url +
                            "\nAlbum: " + songData.album.name
                        );
                    fs.appendFile("log.txt",
                        "\nArtist: " + songData.artists[0].name +
                        "\nSong: " + songData.name +
                        "\nPreview URL: " + songData.preview_url +
                        "\nAlbum: " + songData.album.name + "\n",
                        function (err) {
                            if (err) throw err;
                        });
                }
                else {
                    console.log('Error occurred.');
                }
            });
        }

        // * `movie-this`
        // `node liri.js movie-this '<movie name here>'`
        if (operator === "movie-this") {
            axios
                .get("http://www.omdbapi.com/?apikey=trilogy&t=" + operator2)

                .then(function (response) {
                    var data = response.data;
                    console.log("\nTitle: " + data.Title +
                        "\nRelease Year: " + data.Year +
                        "\nIMDB Rating: " + data.imdbRating +
                        "\nRotten Tomatoes Rating: " + data.Ratings[1].Value +
                        "\nProduced In: " + data.Country +
                        "\nLanguage: " + data.Language +
                        "\nPlot: " + data.Plot +
                        "\nActors: " + data.Actors
                    )
                    fs.appendFile("log.txt", "\nTitle: " + data.Title +
                        "\nRelease Year: " + data.Year +
                        "\nIMDB Rating: " + data.imdbRating +
                        "\nRotten Tomatoes Rating: " + data.Ratings[1].Value +
                        "\nProduced In: " + data.Country +
                        "\nLanguage: " + data.Language +
                        "\nPlot: " + data.Plot +
                        "\nActors: " + data.Actors + "\n",
                        function (err) {
                            if (err) throw err;
                        });
                }
                );
        }
    });
}

