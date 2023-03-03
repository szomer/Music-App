const songs = [
  {
    name: 'Tropic Love',
    artist: 'Diviners & Contacreast',
    album: 'Tropic Love',
    release: '2015',
    time: '04:41',
    track_id: 'track6',
    img_id: 'track6',
  },
  {
    name: 'On & On',
    artist: 'Cartoon & Daniel Levi',
    album: 'On & On',
    release: '2015',
    time: '03:28',
    track_id: 'track1',
    img_id: 'track1',
  },
  {
    name: 'My Heart',
    artist: 'Different Heaven & EH!DE',
    album: 'My Heart',
    release: '2014',
    time: '04:27',
    track_id: 'track2',
    img_id: 'track2',
  },
  {
    name: 'Mortals',
    artist: 'Warriyo & Laura Brehm',
    album: 'Mortals',
    release: '2016',
    time: '03:48',
    track_id: 'track3',
    img_id: 'track3',
  },
  {
    name: 'Invisible',
    artist: 'Zeus X Crona',
    album: 'Invisible',
    release: '2018',
    time: '03:21',
    track_id: 'track4',
    img_id: 'track4',
  },
  {
    name: 'Make Me Move',
    artist: 'Culture Code & KARRA',
    album: 'Make Me Move',
    release: '2016',
    time: '03:17',
    track_id: 'track5',
    img_id: 'track5',
  },
];

window.onload = () => {
  loadSongs();
};

// load the playlist songs
function loadSongs() {
  var songWrapper = document.getElementById('song-wrapper');
  var str = '';

  songs.forEach((element) => {
    str = str.concat(
      `<div class="song" onClick="onSongClick(${songs.indexOf(element)})">
            <div class="song-component">${element.artist} - ${
        element.name
      }</div>
            <div class="song-component">
            ${element.time}</div>
            </div>`
    );
    str = str.concat('<br>');

    songWrapper.innerHTML = str;
  });
}

// Handle song click
function onSongClick(song_index) {
  // Set track data
  setTrackAudio(song_index);
  setTrackInfo(song_index);

  // Handle audio player
  player1 = document.getElementById('player2');
  player1.paused = false;
  player1.play();
}

// Set current track audio
function setTrackAudio(song_index) {
  var audio = document.getElementById('player2');
  var source = document.getElementById('audio-source');
  source.src = `/public/tracks/${songs[song_index].track_id}.mp3`;
  audio.load();
}

// Set current track data
function setTrackInfo(song_index) {
  var cover = document.getElementById('playing-image');
  var artist = document.getElementById('current-artist');
  var title = document.getElementById('current-title');
  var album = document.getElementById('current-album');
  var release = document.getElementById('current-release');

  cover.style.backgroundImage = `url("/public/img/${songs[song_index].img_id}.jpg")`;
  artist.innerHTML = songs[song_index].artist;
  title.innerHTML = songs[song_index].name;
  album.innerHTML = `Album: ${songs[song_index].album}`;
  release.innerHTML = `Released In ${songs[song_index].release}`;
}
