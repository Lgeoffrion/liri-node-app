# liri-node-app README
LIRI Bot - Using Node.js

#The LIRI Bot uses the following NPM packages.
1. DotEnv
2. Moment
3. axios
4. Spotify

#The LIRI Bot Has 4 main commands.
1.  `concert-this`
2.  `spotify-this-song`
3.  `movie-this`
4.  `do-what-it-says`

## `concert-this`
This command searches the BandsInTown API based on the band/artist listed in the 4th arguement and returns Venue name, location and date/time of upcoming shows for that band/artist. It then logs this information in the log.txt file.
![concert-this](readMePictures/concertThisActions.jpg)

## `spotify-this-song`
This command searches the Spotify API based on song listed in the 4th arguement and returns the top result for the song title and also displays the artists name, album name and a URL for a 30 seconds preview of the song.  It then logs this information in the log.txt file.
![spotify-this-song](readMePictures/spotifyAction.jpg)

## `movie-this`
This command searches the OMDB API based on movie title listed in the 4th arguement and returns a large amount of information regarding that movie; Title, Release Year, IMDB Rating, Rotten Tomatoes Rating, County of Production, Language, Plot Synopsis, and Main Actors.  It then logs this information in the log.txt file.
![movie-this](readMePictures/movieAction.jpg)

## `do-what-it-says`
This command reads the random.txt file and executes 1 of the first 3 commands based on the text written in that file. No forth arguement is needed as it will also pull that information from the random.txt file. It then logs the result of the command run in the log.txt file.
![do-what-it-says](readMePictures/doWhatAction.jpg)

### `log.txt`
The log.txt found in the github resources will show the logging of the 4 actions executed in the screen shots displaying the actions used and displayed results.

### `random.txt format`
To run the first line of this document should read one of the 3 main commands and the corresponding artist,song, or movie needed for that command.