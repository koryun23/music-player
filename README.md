# Music Player Interface
The aim of the task was to create a music player interface with ReactJS, which integrated with a back-end API would be a completely functional music player.

# Technologies Used
The technologies used to accomplish the task were HTML, CSS, JS, ReactJS

# Structure of the Application
The main component - MusicPlayer, has three major children-components - ```Toolbar```, ```SongList```, ```SongUploadForm```.

* The ```Toolbar``` component is the topmost component containing three children-components - ```PlayAll```, ```AddAll```, ```Filter```.

    * The ```AddAll``` component is supposed to add songs to a queue accordingly to the user's request.
    
    * The ```PlayAll``` component is supposed to play all the songs that are in a queue.
    
    * The ```Filter``` component is supposed to filter songs satisfying to user's input.

* The ```SongList``` component is right below ```Toolbar``` and it:
  * Is responsive
  * Represents all songs through a list of ```SongRow``` components.

* The ```SongRow``` component:
  * Is responsive 
  * Displays the name of the song, the name of the artist, and the track number
  * Provides the opportunity to play and pause a song. The pause works without losing the progress of the song(i.e. in case of playing the song after pausing it, the track will go on from where it was paused.)
  * Provides the opportunity to add a song to the list of favorite songs
  * Provides the opportunity to remove a song from the list of favorite songs
  * Provides the opportunity to stop the song, which, unlike the pause button, does not keep track of the song progress.
  * Provides the opportuinty to quickly transition to the next song.

* The ```SongUploadForm``` component:
  * Is responsive
  * Adds a song to the playlist by selecting the appropriate audio file(.mp3 or .wav) from the local machine, writing the name of the song and the name of the artist.
  * When the user tries to add the song to the playlist, the application delays the process and provides a spinner indicating that the upload is still in progress.

# State Management Approach
* The main component of the application(```MusicPlayer```) keeps track of the following:
  * The playlist, which is referenced by ```songList``` throughout the task. Default value is an empty array.
  * The list of favorite songs, which is referenced by ```favoriteSongList``` throughout the task. Default value is an empty array.
  * The queue of songs, which is referenced by ```currentQueue``` throughout the task. Default value is an empty array.
  * The list of songs filtered according to the content of the ```Filter``` component. During the component mounting its value gets set to the whole playlist, and afterwards gets adjusted depending on the user's input in the ```Filter```. 
  * The file name of the song that is currently being played.
  * A flag indicating whether or not a song is playing at the given moment.

* The ```Toolbar``` component does not have any state variables. It simply organizes its children components in a responsive way.
  * The ```PlayAll``` component represents a dropdown button, which, after getting clicked, shows two options - going through the queue of songs only once and playing each song once, or playing the queue in a cycle, i.e. infinitiely, until indicated otherwise by the user. However, this feature has not yet been implemented. The ```PlayAll``` component contains single state variable which indicates whether or not a dropdown is open.
  * The ```AddAll``` component represents a dropdown button, which, after getting clicked, shows two options - adding all the songs of the playlist to a queue sequentially, i.e. in the same sequence as they are   given in the playlist, or in a shuffled order. The ```AddAll``` component contains single state variable which indicates whether or not a dropdown is open.
  * The ```Filter``` component represents an input field, which accepts any text and automatically filters the whole playlist looking for songs with a ```songName``` or ```artistName``` that contain the input word. The ```Filter``` component contains single state variable which indicates the inputted word. This is necessary for getting controlled form.

* The ```SongList``` component does not have any state variables. It is a table with as many rows as there are songs in the list of songs passed to it via props from a parent component.
  * The ```SongRow``` component gets all the necessary information(the song name, the artist name, the file name, the track number) from the parent component. It does not have any state variables. It represents a responsive table row which displays the song name, artist name, track number, and provides additional functinoality.
* The ```SongUploadForm``` component contains the following state variables:
`* file name
 * song name
 * artist name
 * upload indicator, which is set to true when the user tries to add a song to the playlist. This state variable is essential for implementing the artificial delay in uploading the song to the playlist.

# Additional Features and/or assumptions
* If any of the validations fails, an error message pops up at the top of the screen, and then starts to fade away until it finally disappears in several seconds.
* It is possible to play a song individually. However, the feature of playing all the songs in a queue one by one has not yet been implemented.
