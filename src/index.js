import './styles.css';

const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const btnPrev = document.getElementById('prev');
const btnPlay = document.getElementById('play');
const btnNext = document.getElementById('next');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');

// Music
const songs=[{
    name: 'track-01',
    displayName: 'Love is all around',
    artist: 'Wet Wet Wet',
    },
    {name: 'track-02',
    displayName: 'When You Say Nothing At All',
    artist: 'Ronan Keating',
    },
    {name: 'track-03',
    displayName: 'Open Arms',
    artist: 'Journey',
    },
    {name: 'track-04',
    displayName: 'Torn',
    artist: 'Natalie Imbruglia',
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


function updateProgressBar(e){
    if (isPlaying){

        //const {duration, currentTime} = e.srcElement;
        const {duration, currentTime} = this;
       
        // console.log(durationSeconds);
        if (duration){

            // Update progress bar width
            const progressPercent = (currentTime/duration) * 100;
            progress.style.width = `${progressPercent}%`
            // calculate display for duration
            const durationMinutes = Math.floor(duration / 60);

            let durationSeconds = Math.floor(duration % 60);

            if (durationSeconds < 10){
                durationSeconds = `0${durationSeconds}`;
            }
            
            durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
        }

        const currentMinutes = Math.floor(currentTime / 60);

        let currentSeconds = Math.floor(currentTime % 60);

        if (currentSeconds < 10){
            currentSeconds = `0${currentSeconds}`;
        }
        
        currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
        

    }
}


function setProgressBar(e){    
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const {duration} = music;    
    music.currentTime = clickX /width * duration;
}


// Event Listeners
btnPrev.addEventListener('click',prevSong);
btnNext.addEventListener('click',nextSong);

music.addEventListener('timeupdate',updateProgressBar);
music.addEventListener('ended',nextSong);
progressContainer.addEventListener('click',setProgressBar);