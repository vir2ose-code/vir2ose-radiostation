// Master Playlist mit allen Tracks
const masterPlaylist = [
    "AUDIO-LIBRARY/1-22.08.26.mp3",
    "AUDIO-LIBRARY/1_27.08.26.mpeg",
    "AUDIO-LIBRARY/2-22.08.26.mp3",
    "AUDIO-LIBRARY/2_27.08.26.mpeg",
    "AUDIO-LIBRARY/3-22.08.26.mp3",
    "AUDIO-LIBRARY/3_27.08.26.mpeg",
    "AUDIO-LIBRARY/4-22.08.26.mp3",
    "AUDIO-LIBRARY/4_27.08.26.mpeg",
    "AUDIO-LIBRARY/5_22.08.26.mp3",
    "AUDIO-LIBRARY/5_27.08.26.mpeg",
    "AUDIO-LIBRARY/ADVENTURE WORLD by vir2ose 2024.mp3",
    "AUDIO-LIBRARY/BY YOUR SIDE by vir2ose.mp3",
    "AUDIO-LIBRARY/FUEGO ELEMENT by vir2ose 2024.mp3",
    "AUDIO-LIBRARY/GHOST OF THE PRODUCTION by vir2ose.mp3",
    "AUDIO-LIBRARY/GLADIATOR (Hans Zimmer) Remix and Remaster by vir2ose 2025.mp3",
    "AUDIO-LIBRARY/I DON'T KNOW WHY by vir2ose 2024.mp3",
    "AUDIO-LIBRARY/IN MY HEAD by vir2ose 2024.mp3",
    "AUDIO-LIBRARY/Let's_go_into_the_future_together.mp3",
    "AUDIO-LIBRARY/Mein Leben Lang_RadioRemix_ (Caleidio).mp3",
    "AUDIO-LIBRARY/NEW WORLD ORDER by vir2ose 2024.mp3",
    "AUDIO-LIBRARY/NEW_BEGINNING_EOV_by_vir2ose.mp3",
    "AUDIO-LIBRARY/PASSIONATELY - EOV by vir2ose 2025.mp3",
    "AUDIO-LIBRARY/PHANTOM OF THE EDM by vir2ose 2025.mp3",
    "AUDIO-LIBRARY/RHAPSODY OF MY LIFE by vir2ose 2023.mp3",
    "AUDIO-LIBRARY/SAND OF THE DESSERT by vir2ose 2024.mp3",
    "AUDIO-LIBRARY/Sommerzeit (Reggae) - Caleidio.mp3",
    "AUDIO-LIBRARY/TERRA NATURI by vir2ose 2024.mp3",
    "AUDIO-LIBRARY/TIME (Hans Zimmer) Remix ans Remaster by vir2ose 2025.mp3",
    "AUDIO-LIBRARY/VIOLIN PROJECT by vir2ose 2024.mp3",
    "AUDIO-LIBRARY/WENN DU ... EOV ... by vir2ose 2023.mp3"
];

const artistPlaylists = {
    "Camadyn-AI-Independent-Music": [
        "AUDIO-LIBRARY/ARTISTS/Camadyn-AI-Independent-Music/1-22.08.26.mp3",
        "AUDIO-LIBRARY/ARTISTS/Camadyn-AI-Independent-Music/1_27.08.26.mpeg",
        "AUDIO-LIBRARY/ARTISTS/Camadyn-AI-Independent-Music/2-22.08.26.mp3",
        "AUDIO-LIBRARY/ARTISTS/Camadyn-AI-Independent-Music/2_27.08.26.mpeg",
        "AUDIO-LIBRARY/ARTISTS/Camadyn-AI-Independent-Music/3-22.08.26.mp3",
        "AUDIO-LIBRARY/ARTISTS/Camadyn-AI-Independent-Music/3_27.08.26.mpeg",
        "AUDIO-LIBRARY/ARTISTS/Camadyn-AI-Independent-Music/4-22.08.26.mp3",
        "AUDIO-LIBRARY/ARTISTS/Camadyn-AI-Independent-Music/4_27.08.26.mpeg",
        "AUDIO-LIBRARY/ARTISTS/Camadyn-AI-Independent-Music/5_22.08.26.mp3",
        "AUDIO-LIBRARY/ARTISTS/Camadyn-AI-Independent-Music/5_27.08.26.mpeg"
    ],
    "End Of Vision (BAND)": [
        "AUDIO-LIBRARY/ARTISTS/End Of Vision (BAND)/PASSIONATELY - EOV by vir2ose 2025.mp3",
        "AUDIO-LIBRARY/ARTISTS/End Of Vision (BAND)/WENN DU ... EOV ... by vir2ose 2023.mp3"
    ],
    "Waldemar Krucinski vir2ose": [
        "AUDIO-LIBRARY/ARTISTS/Waldemar Krucinski vir2ose/ADVENTURE WORLD by vir2ose 2024.mp3",
        "AUDIO-LIBRARY/ARTISTS/Waldemar Krucinski vir2ose/BY YOUR SIDE by vir2ose.mp3",
        "AUDIO-LIBRARY/ARTISTS/Waldemar Krucinski vir2ose/FUEGO ELEMENT by vir2ose 2024.mp3",
        "AUDIO-LIBRARY/ARTISTS/Waldemar Krucinski vir2ose/GHOST OF THE PRODUCTION by vir2ose.mp3",
        "AUDIO-LIBRARY/ARTISTS/Waldemar Krucinski vir2ose/GLADIATOR (Hans Zimmer) Remix and Remaster by vir2ose 2025.mp3",
        "AUDIO-LIBRARY/ARTISTS/Waldemar Krucinski vir2ose/I DON'T KNOW WHY by vir2ose 2024.mp3",
        "AUDIO-LIBRARY/ARTISTS/Waldemar Krucinski vir2ose/IN MY HEAD by vir2ose 2024.mp3",
        "AUDIO-LIBRARY/ARTISTS/Waldemar Krucinski vir2ose/NEW WORLD ORDER by vir2ose 2024.mp3",
        "AUDIO-LIBRARY/ARTISTS/Waldemar Krucinski vir2ose/PHANTOM OF THE EDM by vir2ose 2025.mp3",
        "AUDIO-LIBRARY/ARTISTS/Waldemar Krucinski vir2ose/RHAPSODY OF MY LIFE by vir2ose 2023.mp3",
        "AUDIO-LIBRARY/ARTISTS/Waldemar Krucinski vir2ose/SAND OF THE DESSERT by vir2ose 2024.mp3",
        "AUDIO-LIBRARY/ARTISTS/Waldemar Krucinski vir2ose/TERRA NATURI by vir2ose 2024.mp3",
        "AUDIO-LIBRARY/ARTISTS/Waldemar Krucinski vir2ose/TIME (Hans Zimmer) Remix ans Remaster by vir2ose 2025.mp3",
        "AUDIO-LIBRARY/ARTISTS/Waldemar Krucinski vir2ose/VIOLIN PROJECT by vir2ose 2024.mp3"
    ],
    "André Rössig_Caleidio": [
        "AUDIO-LIBRARY/ARTISTS/André Rössig_Caleidio/Mein Leben Lang_RadioRemix_ (Caleidio).mp3",
        "AUDIO-LIBRARY/ARTISTS/André Rössig_Caleidio/Sommerzeit (Reggae) - Caleidio.mp3"
    ]
};

const genrePlaylists = {
    "POP": [
        "AUDIO-LIBRARY/GENRES/POP/Mein Leben Lang_RadioRemix_ (Caleidio).mp3",
        "AUDIO-LIBRARY/GENRES/POP/Sommerzeit (Reggae) - Caleidio.mp3"
    ],
    "ROCK": [
        "AUDIO-LIBRARY/GENRES/ROCK/NEW_BEGINNING_EOV_by_vir2ose.mp3",
        "AUDIO-LIBRARY/GENRES/ROCK/WENN DU ... EOV ... by vir2ose 2023.mp3"
    ],
    "PSYCHODELIC": [
        "AUDIO-LIBRARY/GENRES/PSYCHODELIC/1-22.08.26.mp3",
        "AUDIO-LIBRARY/GENRES/PSYCHODELIC/1_27.08.26.mpeg",
        "AUDIO-LIBRARY/GENRES/PSYCHODELIC/2-22.08.26.mp3",
        "AUDIO-LIBRARY/GENRES/PSYCHODELIC/2_27.08.26.mpeg",
        "AUDIO-LIBRARY/GENRES/PSYCHODELIC/3-22.08.26.mp3",
        "AUDIO-LIBRARY/GENRES/PSYCHODELIC/3_27.08.26.mpeg",
        "AUDIO-LIBRARY/GENRES/PSYCHODELIC/4-22.08.26.mp3",
        "AUDIO-LIBRARY/GENRES/PSYCHODELIC/4_27.08.26.mpeg",
        "AUDIO-LIBRARY/GENRES/PSYCHODELIC/5_22.08.26.mp3",
        "AUDIO-LIBRARY/GENRES/PSYCHODELIC/5_27.08.26.mpeg",
        "AUDIO-LIBRARY/GENRES/PSYCHODELIC/GHOST OF THE PRODUCTION by vir2ose.mp3",
        "AUDIO-LIBRARY/GENRES/PSYCHODELIC/Let's_go_into_the_future_together.mp3",
        "AUDIO-LIBRARY/GENRES/PSYCHODELIC/NEW WORLD ORDER by vir2ose 2024.mp3",
        "AUDIO-LIBRARY/GENRES/PSYCHODELIC/PASSIONATELY - EOV by vir2ose 2025.mp3",
        "AUDIO-LIBRARY/GENRES/PSYCHODELIC/PHANTOM OF THE EDM by vir2ose 2025.mp3"
    ],
    "AI Support": [
        "AUDIO-LIBRARY/GENRES/AI Support/1-22.08.26.mp3",
        "AUDIO-LIBRARY/GENRES/AI Support/1_27.08.26.mpeg",
        "AUDIO-LIBRARY/GENRES/AI Support/2-22.08.26.mp3",
        "AUDIO-LIBRARY/GENRES/AI Support/2_27.08.26.mpeg",
        "AUDIO-LIBRARY/GENRES/AI Support/3-22.08.26.mp3",
        "AUDIO-LIBRARY/GENRES/AI Support/3_27.08.26.mpeg",
        "AUDIO-LIBRARY/GENRES/AI Support/4-22.08.26.mp3",
        "AUDIO-LIBRARY/GENRES/AI Support/4_27.08.26.mpeg",
        "AUDIO-LIBRARY/GENRES/AI Support/5_22.08.26.mp3",
        "AUDIO-LIBRARY/GENRES/AI Support/5_27.08.26.mpeg"
    ],
    "EDM": [
        "AUDIO-LIBRARY/GENRES/EDM/ADVENTURE WORLD by vir2ose 2024.mp3",
        "AUDIO-LIBRARY/GENRES/EDM/BY YOUR SIDE by vir2ose.mp3",
        "AUDIO-LIBRARY/GENRES/EDM/Echoes_In_The_Void.mp3",
        "AUDIO-LIBRARY/GENRES/EDM/FUEGO ELEMENT by vir2ose 2024.mp3",
        "AUDIO-LIBRARY/GENRES/EDM/GHOST OF THE PRODUCTION by vir2ose.mp3",
        "AUDIO-LIBRARY/GENRES/EDM/I DON'T KNOW WHY by vir2ose 2024.mp3",
        "AUDIO-LIBRARY/GENRES/EDM/IN MY HEAD by vir2ose 2024.mp3",
        "AUDIO-LIBRARY/GENRES/EDM/PHANTOM OF THE EDM by vir2ose 2025.mp3",
        "AUDIO-LIBRARY/GENRES/EDM/RHAPSODY OF MY LIFE by vir2ose 2023.mp3",
        "AUDIO-LIBRARY/GENRES/EDM/SAND OF THE DESSERT by vir2ose 2024.mp3",
        "AUDIO-LIBRARY/GENRES/EDM/TERRA NATURI by vir2ose 2024.mp3"
    ]
};

// Die aktive Playlist (Standardmäßig die Master Playlist kopieren)
let playlist = [...masterPlaylist];

// Funktion zum zufälligen Mischen der Playlist (Fisher-Yates Shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Playlist bei jedem Seitenaufruf neu mischen
shuffleArray(playlist);


let currentTrackIndex = 0;
let audio = new Audio();
audio.crossOrigin = "anonymous"; // Wichtig, damit der AudioContext das Signal abfangen darf ohne CORS-Probleme
let isPlaying = false;

// --- Web Audio API (Mastering Limiter) Variablen ---
let audioContext;
let trackSource;
let compressor;
let outGain;

// Referenzen zu den HTML-Elementen
const playBtn = document.getElementById('playBtn');
const btnStop = document.getElementById('btnStop');
const btnPause = document.getElementById('btnPause');
const layerActive = document.getElementById('layer-controls-active'); // Die glühende Photoshop-Ebene

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

function clearGlows() {
    if (playBtn) playBtn.classList.remove('glow-gold');
    if (btnPause) btnPause.classList.remove('glow-green');
    if (btnStop) btnStop.classList.remove('glow-red');
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
        if (layerActive) layerActive.classList.remove('hidden-layer'); // Leuchtende Ebene einblenden (Desktop)
        clearGlows();
        if (playBtn) playBtn.classList.add('glow-gold'); // Hitbox-Glow für Smartphone
    }).catch(err => {
        console.error("Wiedergabe fehlgeschlagen. Grund:", err);
    });
}

function pauseTrack() {
    audio.pause();
    isPlaying = false;
    if (layerActive) layerActive.classList.add('hidden-layer');
    clearGlows();
    if (btnPause) btnPause.classList.add('glow-green');
}

function stopTrack() {
    audio.pause();
    audio.currentTime = 0;
    isPlaying = false;
    if (layerActive) layerActive.classList.add('hidden-layer');
    clearGlows();
    
    if (btnStop) {
        btnStop.classList.add('glow-red');
        setTimeout(() => {
            btnStop.classList.remove('glow-red');
        }, 400); // Nur kurz anleuchten
    }
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
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('Service Worker erfolgreich registriert auf Scope: ', reg.scope))
            .catch(err => console.error('Service Worker Registrierung fehlgeschlagen: ', err));
    });
}

// --- Uhrzeit und Datum ---
// --- Uhrzeit und Datum ---
const clockDay = document.getElementById('clock-day');
const clockDate = document.getElementById('clock-date');
const clockTime = document.getElementById('clock-time');

const daysEnglish = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

function updateClock() {
    const now = new Date();
    
    if (clockDay) {
        clockDay.innerText = daysEnglish[now.getDay()];
    }
    
    if (clockDate) {
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();
        clockDate.innerText = `${day}.${month}.${year}`;
    }
    
    if (clockTime) {
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        clockTime.innerText = `${hours}:${minutes}:${seconds}`;
    }
}

// Jede Sekunde aktualisieren
setInterval(updateClock, 1000);
updateClock(); // Sofortiger Aufruf beim Start

// --- Modal & Dynamische Playlists ---
const modal = document.getElementById('menu-modal');
const closeModalBtn = document.getElementById('close-modal');
const modalTitle = document.getElementById('modal-title');
const modalList = document.getElementById('modal-list');
const btnArtists = document.getElementById('btn-artists');
const btnGenres = document.getElementById('btn-genres');

function openModal(title, dataObject) {
    modalTitle.innerText = title;
    modalList.innerHTML = ''; // Liste leeren

    // "ALL TRACKS" Option hinzufügen, um zurück zur Master-Playlist zu wechseln
    const allTracksItem = document.createElement('li');
    allTracksItem.classList.add('menu-list-item');
    allTracksItem.innerText = 'ALL TRACKS - RANDOM';
    allTracksItem.onclick = () => {
        changePlaylist(masterPlaylist);
        closeModal();
    };
    modalList.appendChild(allTracksItem);

    // Iteriere über die Kategorien (Artists oder Genres)
    for (const [name, tracks] of Object.entries(dataObject)) {
        if (tracks.length === 0) continue; // Leere Ordner ignorieren

        const li = document.createElement('li');
        li.classList.add('menu-list-item');
        li.innerText = name;
        li.onclick = () => {
            changePlaylist(tracks);
            closeModal();
        };
        modalList.appendChild(li);
    }

    modal.classList.remove('hidden');
}

function closeModal() {
    modal.classList.add('hidden');
}

function changePlaylist(newTracks) {
    // 1. Audio stoppen
    stopTrack();
    
    // 2. Playlist ersetzen (Kopie erstellen)
    playlist = [...newTracks];
    
    // 3. Neu mischen
    shuffleArray(playlist);
    
    // 4. Index zurücksetzen und starten
    currentTrackIndex = 0;
    loadTrack(currentTrackIndex);
    playTrack();
}

if (btnArtists) {
    btnArtists.addEventListener('click', () => {
        openModal('ARTISTS', artistPlaylists);
    });
}

if (btnGenres) {
    btnGenres.addEventListener('click', () => {
        openModal('GENRES', genrePlaylists);
    });
}

const btnAbout = document.getElementById('btn-about');
if (btnAbout) {
    btnAbout.addEventListener('click', () => {
        modalTitle.innerText = 'ABOUT';
        modalList.innerHTML = `
            <div class="about-text">
                <h4>VIR2OSE RADIO</h4>
                <h5>Initiated & Founded by Waldemar Krucinski</h5>
                <p class="highlight">By Creators. For Creators. Your Stage in the Ether.</p>
                <p>VIR2OSE Radio was born out of a clear vision: To build an independent platform where musicians and creatives can unleash their full potential. We firmly believe that genuine art deserves to be heard—regardless of massive budgets, expensive studio tours, or major-label backing.</p>
                <p>Here, it is all about the craft, the passion, and boundless creative freedom.</p>
                <br>
                <p class="highlight">What lies ahead:</p>
                <p><strong>A Stage for Independent Virtuosos:</strong> A home for emerging talents, independent soundscapes, and raw artistic expression.</p>
                <p><strong>Podcasts & Spotlight Sessions:</strong> Expanding our broadcast with artist-driven podcasts, deep-dive interviews, and behind-the-scenes stories where creators share their journey directly with the audience.</p>
                <br>
                <p style="font-style: italic; font-size: 1.1em;">Show your craft and get the audience you deserve.</p>
            </div>
        `;
        modal.classList.remove('hidden');
    });
}

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
}

// Modal schließen, wenn man außerhalb klickt
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// --- Random Repeater ---
const btnRandom = document.getElementById('btnRandom');
const layerRandom = document.getElementById('layer-random');

if (btnRandom) {
    btnRandom.addEventListener('click', () => {
        // Leuchteffekt und 360-Drehung triggern
        if (layerRandom) {
            layerRandom.classList.add('glow-effect', 'spin-anim');
            btnRandom.classList.add('glow-gold'); // Hitbox Glow für Smartphone
            
            setTimeout(() => {
                layerRandom.classList.remove('glow-effect', 'spin-anim');
                btnRandom.classList.remove('glow-gold');
            }, 600);
        }
        
        // Aktuelle Playlist neu mischen
        shuffleArray(playlist);
        currentTrackIndex = 0;
        
        // Wenn Musik bereits läuft, sofort den neuen ersten Track spielen
        if (isPlaying) {
            loadTrack(currentTrackIndex);
            playTrack();
        }
    });
}
