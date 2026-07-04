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
audio.crossOrigin = "anonymous"; // Wichtig, damit der AudioContext das Signal abfangen darf ohne CORS-Probleme
let isPlaying = false;

// --- Web Audio API (Mastering Limiter) Variablen ---
let audioContext;
let trackSource;
let compressor;
let outGain;

// Referenzen zu den 3 Hotspots
const playBtn = document.getElementById('playBtn');
const btnStop = document.getElementById('btnStop');
const btnPause = document.getElementById('btnPause');

// Lade den Track und encodiere Leerzeichen für Server wie Vercel
function loadTrack(index) {
    const safeUrl = encodeURI(playlist[index]);
    audio.src = safeUrl;
    audio.load();
}

// Initial den ersten Track laden
loadTrack(currentTrackIndex);

// Initialisiert den AudioContext und den Mastering-Limiter
function initAudioContext() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // 1. Audio-Element als Quelle einbinden
        trackSource = audioContext.createMediaElementSource(audio);
        
        // 2. Limiter / Compressor Node erstellen
        compressor = audioContext.createDynamicsCompressor();
        compressor.threshold.value = -24; // Signal kompakt halten und anheben
        compressor.knee.value = 30;
        compressor.ratio.value = 20;      // Ratio auf Maximum für Brickwall-Limiter-Verhalten
        compressor.attack.value = 0.003;  // 3ms Attack
        compressor.release.value = 0.25;  // 250ms Release
        
        // 3. GainNode als Ceiling-Schutz bei -1 dB True Peak
        outGain = audioContext.createGain();
        // -1 dB entspricht linear ca. 0.89125 ( 10^(-1/20) )
        outGain.gain.value = 0.89125; 
        
        // Routing: audio -> compressor -> outGain -> speakers
        trackSource.connect(compressor);
        compressor.connect(outGain);
        outGain.connect(audioContext.destination);
    }
}

function togglePlay() {
    if (!isPlaying) {
        playTrack();
    } else {
        pauseTrack();
    }
}

function playTrack() {
    // Sicherstellen, dass der AudioContext aufgebaut ist
    initAudioContext();
    
    // Zwingend für Smartphones: AudioContext muss durch User-Interaktion (Play-Klick) asynchron "resumed" werden
    if (audioContext && audioContext.state === 'suspended') {
        audioContext.resume().catch(err => console.error("AudioContext Resume Fehler:", err));
    }
    
    audio.play().then(() => {
        isPlaying = true;
    }).catch(err => {
        console.error("Wiedergabe fehlgeschlagen. Grund:", err);
    });
}

function pauseTrack() {
    audio.pause();
    isPlaying = false;
    // Optional: audioContext.suspend() könnte man hier aufrufen, aber audio.pause() unterbricht die Quelle zuverlässig.
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
    loadTrack(currentTrackIndex);
    playTrack(); 
}

function prevTrack() {
    currentTrackIndex--;
    if (currentTrackIndex < 0) {
        currentTrackIndex = playlist.length - 1; // Gehe zum letzten Track
    }
    loadTrack(currentTrackIndex);
    playTrack();
}

// Wenn ein Track zu Ende ist, automatisch den nächsten abspielen
audio.addEventListener('ended', () => {
    nextTrack();
});

// Event Listeners binden
if (playBtn) playBtn.addEventListener('click', togglePlay);
if (btnStop) btnStop.addEventListener('click', stopTrack);
if (btnPause) btnPause.addEventListener('click', pauseTrack);

// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Service Worker erfolgreich registriert auf Scope: ', reg.scope))
            .catch(err => console.error('Service Worker Registrierung fehlgeschlagen: ', err));
    });
}
