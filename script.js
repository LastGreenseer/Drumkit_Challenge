const pressedKeys = {}; //Needed to prevent looping audio by holdong the key

function playSound(e) {
  // Prevents audio from looping if key is held
  if (pressedKeys[e.keyCode]) return;
  pressedKeys[e.keyCode] = true;

  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`button[data-key="${e.keyCode}"]`);

  //This stops the function if no sound is found
  if (!audio) return;

  //Makes it so audio is always played from the start if key is pressed multiple times, quickly
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing'); //Button animation
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

function handleKeyUp(e) {
  pressedKeys[e.keyCode] = false;

  const key = document.querySelector(`button[data-key="${e.keyCode}"]`);
  if (!key) return;

  key.classList.remove("playing");
}

const keys = document.querySelectorAll("drum");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
window.addEventListener("keyup", handleKeyUp);
