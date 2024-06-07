function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`button[data-key="${e.keyCode}"]`);

  if (!audio) return; //This stops the function if no sound is found

  audio.currentTime = 0; //Makes it so audio is always played from the start if key is pressed multiple times, quickly
  audio.play();
  key.classList.add(playing); //Button animation
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll("drum");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
