const songs = [
  {
    title: "Perfect",
    artist: "Ed Sheeran",
    src: "songs/perfect.mp3",
    banner: "maxresdefault.jpg",
    duration: "4:23",
    bgColor: "#1e3c72"
  },
  {
    title: "Paint The Town Red",
    artist: "Doja Cat",
    src: "songs/paint_the_town_red.mp3",
    banner: "https___hypebeast.com_image_2023_08_doja-cat-paint-the-town-red-single-music-video-stream-1.avif",
    duration: "3:51",
    bgColor: "#8b0000"
  },
  {
    title: "Wild Flower",
    artist: "RM ft. Youjeen",
    src: "songs/wildflower.mp3",
    banner: "sddefault.jpg",
    duration: "4:33",
    bgColor: "#003366"
  }
];

let currentIndex = 0;
let isPlaying = false;

const audio = document.getElementById("audio");
const bannerImg = document.querySelector(".banner-img");
const title = document.querySelector(".title");
const artist = document.querySelector(".artist");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("current-time");
const totalTimeEl = document.getElementById("total-time");

function loadSong(song) {
  title.textContent = song.title;
  artist.textContent = song.artist;
  audio.src = song.src;
  bannerImg.src = song.banner;
  totalTimeEl.textContent = song.duration;
  document.body.style.background = song.bgColor;
}

function playSong() {
  audio.play();
  playBtn.textContent = "⏸";
  isPlaying = true;
}

function pauseSong() {
  audio.pause();
  playBtn.textContent = "▶";
  isPlaying = false;
}

playBtn.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  loadSong(songs[currentIndex]);
  playSong();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % songs.length;
  loadSong(songs[currentIndex]);
  playSong();
});

audio.addEventListener("timeupdate", () => {
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  progress.value = progressPercent || 0;

  let minutes = Math.floor(audio.currentTime / 60);
  let seconds = Math.floor(audio.currentTime % 60);
  if (seconds < 10) seconds = `0${seconds}`;
  currentTimeEl.textContent = `${minutes}:${seconds}`;
});

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

audio.addEventListener("ended", () => {
  nextBtn.click();
});

loadSong(songs[currentIndex]);
