// cop menu PC to menu Mobile
const pcNav = document.querySelector("#pc-nav");
const mobileNav = document.querySelector("#mobile-nav");

// cop from PC nav to Mobile nav
mobileNav.innerHTML = pcNav.innerHTML;

// Controls media playback
const playBtn = document.querySelector(".about__play");
const video = document.querySelector(".about__video");
const introBtn = document.querySelector(".about__intro");
if (video && playBtn) {
  video.addEventListener("pause", () => {
    playBtn.style.visibility = "visible";
    playBtn.style.opacity = "1";
    playBtn.style.transition = "0.5s ease";
    introBtn.style.visibility = "visible";
    introBtn.style.opacity = "1";
    introBtn.style.transition = "0.5s ease";
    video.controls = false;
  });

  video.addEventListener("play", () => {
    playBtn.style.visibility = "hidden";
    playBtn.style.opacity = "0";
    playBtn.style.transition = "0.5s ease";
    introBtn.style.visibility = "hidden";
    introBtn.style.opacity = "0";
    introBtn.style.transition = "0.5s ease";
    video.controls = true;
  });

  video.addEventListener("ended", () => {
    video.load();
    video.controls = false;
    playBtn.style.visibility = "visible";
    playBtn.style.opacity = "1";
    playBtn.style.transition = "0.5s ease";
  });

  playBtn.addEventListener("touchmove", () => {
    if (video.paused) {
      video.play();
      video.controls = false;
    } else {
      video.pause();
      video.controls = true;
    }
  });

  playBtn.addEventListener("mousedown", () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
} else {
  console.error("Video element or play button not found");
}
