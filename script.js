
const videoList = [
  { name: "rain", link: "https://videos.pexels.com/video-files/5447344/5447344-hd_2048_1080_24fps.mp4" },
  { name: "waves", link: "https://videos.pexels.com/video-files/1181911/1181911-uhd_4096_2160_24fps.mp4" },
  { name: "fire", link: "https://videos.pexels.com/video-files/5593044/5593044-uhd_3840_2160_24fps.mp4" },
];

let loop = true;

const myVideo = document.querySelector("#my-video");
  const videoName = document.querySelector("#video-name");

  const firstVideoButton = document.querySelector("#first-video-btn");
  firstVideoButton.addEventListener("click", function playIt() {
    myVideo.pause();
    playVideo(0);
  });

  const secondVideoButton = document.querySelector("#second-video-btn");
  secondVideoButton.addEventListener("click", function playIt() {
    myVideo.pause();
    playVideo(1);
  });

  const thirdVideoButton = document.querySelector("#third-video-btn");
  thirdVideoButton.addEventListener("click", function playIt() {
    myVideo.pause();
    playVideo(2);
  });

function playVideo(no) {
  myVideo.pause();
  myVideo.src = videoList[no].link;
  videoName.textContent = videoList[no].name;
  myVideo.load();
  myVideo.play();
}
  
// I used ChatGPT a bit to help me with the sound controls as I found some difficulty connecting them to the sounds and not the video. However, wherever ChatGPT gave me a code I was not familiar with, I checked with the code from Media Player example and joined them together if I could and found that it worked sometimes. Sometimes, it would also work if I just changed the myVideo to mySound so I didn't have to use ChatGPT for that.
  const soundList = [
    { name: "Rain", link: "rain.mp3" },
    { name: "Ocean", link: "ocean.mp3" },
    { name: "Fire", link: "fire.mp3" },
  ];

  // Get references to sound-related elements
  const mySound = document.querySelector("#my-sound");
  const soundTime = document.querySelector("#sound-time");

  const firstSoundButton = document.querySelector("#first-sound-btn");
  firstSoundButton.addEventListener("click", function playIt() {
    mySound.pause();
    playSound(0);
  });

  const secondSoundButton = document.querySelector("#second-sound-btn");
  secondSoundButton.addEventListener("click", function playIt() {
    mySound.pause();
    playSound(1);
  });

  const thirdSoundButton = document.querySelector("#third-sound-btn");
  thirdSoundButton.addEventListener("click", function playIt() {
    mySound.pause();
    playSound(2);
  });


  function playSound(no) {
    mySound.src = soundList[no].link;
    soundName.textContent = soundList[no].name; 
    mySound.play();
  }

  const soundName = document.querySelector("#sound-name");

const playPauseButton = document.querySelector("#play-pause-btn");
// Event listener to toggle between playing and pausing video on clicking the button
playPauseButton.addEventListener("click", togglePlay);
const playPauseImg = document.querySelector("#play-pause-img");

const muteUnmuteButton = document.querySelector("#mute-unmute-btn");
// Event listener to mute or unmute audio on clicking the button
muteUnmuteButton.addEventListener("click", toggleAudio);
const muteUnmuteImg = document.querySelector("#mute-unmute-img");

const increaseVolumeButton = document.querySelector("#increase-volume-btn");
increaseVolumeButton.addEventListener("click", increaseVolume);

const decreaseVolumeButton = document.querySelector("#decrease-volume-btn");
decreaseVolumeButton.addEventListener("click", decreaseVolume);

// Function to toggle play/pause and change button icon
function togglePlay() {
  if (mySound.paused || mySound.ended) {
    mySound.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    mySound.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}

//to mute the video we check if it is already muted or not, if not
//mute it or unmute it.
function toggleAudio() {
  if (mySound.muted) {
    mySound.muted = false;
    muteUnmuteButton.style.backgroundColor = "#d5cea3";
  } else {
    mySound.muted = true;
    muteUnmuteButton.style.backgroundColor = "#7b775e";
  }
}

// Function to increase volume
function increaseVolume() {
  if (mySound.volume < 1) {
    mySound.volume = Math.min(1, mySound.volume + 0.1); // Ensure volume doesn't exceed 1
  }
}

// Function to decrease volume
function decreaseVolume() {
  if (mySound.volume > 0) {
    mySound.volume = Math.max(0, mySound.volume - 0.1); // Ensure volume doesn't go below 0
  }
}

function toggleAudio() {
  if (mySound.muted) {
    mySound.muted = false;
    muteUnmuteButton.style.backgroundColor = "#EBDBE4";
  } else {
    mySound.muted = true;
    muteUnmuteButton.style.backgroundColor = "#F7B2D9";
  }
}

// I found a lot of difficulty trying to get the loop button to work but then I figured out that I forgot to add in the soundTime.
const loopButton = document.querySelector("#loop-btn");
loopButton.addEventListener("click", toggleLoop);

function toggleLoop() {
  console.log("Loop button clicked");
  loop = !loop;
  console.log("Loop value:", loop);
  mySound.loop = loop; // Set the loop property of the audio element
  if (loop) {
    loopButton.style.backgroundColor = "#EBDBE4";
  } else {
    loopButton.style.backgroundColor = "#F7B2D9";
  }
}

const prevButton = document.querySelector("#previous-btn");
prevButton.addEventListener("click", prevTrack);

const nextButton = document.querySelector("#next-btn");
nextButton.addEventListener("click", nextTrack);

let currentIndex = 0;

function prevTrack() {
  currentIndex = (currentIndex - 1 + soundList.length) % soundList.length;
  playSoundAtIndex(currentIndex);
}

function nextTrack() {
  currentIndex = (currentIndex + 1) % soundList.length;
  playSoundAtIndex(currentIndex);
}

// Function to play audio at a specific index
function playSoundAtIndex(index) {
  mySound.pause(); // Pause the audio before changing source
  mySound.src = soundList[index].link;
  mySound.load(); // Load the new source
  mySound.play(); // Play the audio
}

const progressBar = document.querySelector("#progress-bar-fill");
// myVideo.removeAttribute("controls");

// Event listener to check time update on sound to update the progress bar
mySound.addEventListener("timeupdate", updateProgressBar);

// Function to update the progress bar
function updateProgressBar() {
  soundTime.textContent = mySound.currentTime.toFixed(2);
  const value = (mySound.currentTime / mySound.duration) * 100;
  progressBar.style.width = value + "%";
}

// Overall, the sound buttons took me the longest to do. I found that I had to use ChatGPT to help explain the code. It was also helpful as it also told me what I did well. 
