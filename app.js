// Playlist mit deinen Tracks aus der AUDIO-LIBRARY
const playlist = [
    "AUDIO-LIBRARY/ADVENTURE WORLD by vir2ose 2024.mp3",
    "AUDIO-LIBRARY/BY YOUR SIDE by vir2ose.mp3",
    "AUDIO-LIBRARY/FUEGO ELEMENT by vir2ose 2024.mp3",
    "AUDIO-LIBRARY/GHOST OF THE PRODUCTION by vir2ose.mp3",
    "AUDIO-LIBRARY/GLADIATOR (Hans Zimmer) Remix and Remaster by vir2ose 2025.mp3",
    "AUDIO-LIBRARY/I DON'T KNOW WHY by vir2ose 2024.mp3",
    "AUDIO-LIBRARY/IN MY HEAD by vir2ose 2024.mp3",
    "AUDIO-LIBRARY/INDIAN  MOON by vir2ose 2023.mp3",
    "AUDIO-LIBRARY/NEW WORLD ORDER by vir2ose 2024.mp3",
    "AUDIO-LIBRARY/PASSIONATELY - EOV by vir2ose 2025.mp3",
    "AUDIO-LIBRARY/PHANTOM OF THE EDM by vir2ose 2025.mp3",
    "AUDIO-LIBRARY/RHAPSODY OF MY LIFE by vir2ose 2023.mp3",
    "AUDIO-LIBRARY/SAND OF THE DESSERT by vir2ose 2024.mp3",
    "AUDIO-LIBRARY/TERRA NATURI by vir2ose 2024.mp3",
    "AUDIO-LIBRARY/TIME (Hans Zimmer) Remix ans Remaster by vir2ose 2025.mp3",
    "AUDIO-LIBRARY/VIOLIN PROJECT by vir2ose 2024.mp3",
    "AUDIO-LIBRARY/WENN DU ... EOV ... by vir2ose 2023.mp3"
];

let currentTrackIndex = 0;
let audio = new Audio();
let isPlaying = false;

// Referenzen zu den 5 Hotspots
const playBtn = document.getElementById('playBtn');
const btnStop = document.getElementById('btnStop');
const btnPause = document.getElementById('btnPause');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');

// Lade den ersten Track, sobald die App startet (ohne Autoplay)
audio.src = playlist[currentTrackIndex];

function togglePlay() {
    if (!isPlaying) {
        playTrack();
    } else {
        pauseTrack();
    }
}

function playTrack() {
    audio.play().then(() => {
        isPlaying = true;
    }).catch(err => {
        console.error("Wiedergabe fehlgeschlagen:", err);
    });
}

function pauseTrack() {
    audio.pause();
    isPlaying = false;
}

function stopTrack() {
    audio.pause();
    audio.currentTime = 0;
    isPlaying = false;
}

function nextTrack() {
    currentTrackIndex++;
    if (currentTrackIndex >= playlist.length) {
        currentTrackIndex = 0; // Gehe zurück zum ersten Track
    }
    audio.src = playlist[currentTrackIndex];
    if (isPlaying) {
        playTrack();
    }
}

function prevTrack() {
    currentTrackIndex--;
    if (currentTrackIndex < 0) {
        currentTrackIndex = playlist.length - 1; // Gehe zum letzten Track
    }
    audio.src = playlist[currentTrackIndex];
    if (isPlaying) {
        playTrack();
    }
}

// Wenn ein Track zu Ende ist, automatisch den nächsten abspielen
audio.addEventListener('ended', () => {
    nextTrack();
    playTrack();
});

// Event Listeners binden
if (playBtn) playBtn.addEventListener('click', togglePlay);
if (btnStop) btnStop.addEventListener('click', stopTrack);
if (btnPause) btnPause.addEventListener('click', pauseTrack);
if (btnPrev) btnPrev.addEventListener('click', prevTrack);
if (btnNext) btnNext.addEventListener('click', nextTrack);

// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Service Worker erfolgreich registriert auf Scope: ', reg.scope))
            .catch(err => console.error('Service Worker Registrierung fehlgeschlagen: ', err));
    });
}
