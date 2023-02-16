import './styles.css';

const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const btnPrev = document.getElementById('prev');
const btnPlay = document.getElementById('play');
const btnNext = document.getElementById('next');

// Music
const songs=[{
    name: 'jacinto-1',
    displayName: 'Electic Chill Machine',
    artist: 'Jacinto Design',
    },
    {name: 'jacinto-2',
    displayName: 'Seven Nation Army (Remix)',
    artist: 'Jacinto Design',
    },
    {name: 'jacinto-3',
    displayName: 'Goodnight, Disco Queen',
    artist: 'Jacinto Design',
    },
    {name: 'metric-1',
    displayName: 'Front Row (Remix)',
    artist: 'Metric/Jacinto Design',
    },
]
    


let isPlaying = false;

function playSong(){
    isPlaying = true;
    btnPlay.classList.replace('fa-play', 'fa-pause');
    btnPlay.setAttribute('title','Pause');
    music.play();
}


function pauseSong(){
    isPlaying = false;
    btnPlay.classList.replace('fa-pause','fa-play');
    btnPlay.setAttribute('title','Play');
    music.pause();
}


// Play or Pause Event Listener
btnPlay.addEventListener('click', ()=>(isPlaying ? pauseSong():playSong()));

// Update DOM
function loadSong(song){
    console.log(song);
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `./assets/music/${song.name}.mp3`;
    image.src = `./assets/images/${song.name}.jpg`;
}

let songIndex = 0;

function prevSong(){
    songIndex--;
    if (songIndex<0){
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

function nextSong(){
    songIndex++;
    if (songIndex>songs.length - 1){
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

// On load - Select first song
loadSong(songs[songIndex]);

// Event Listeners
btnPrev.addEventListener('click',prevSong);
btnNext.addEventListener('click',nextSong);