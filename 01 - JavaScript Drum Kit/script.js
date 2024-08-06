const audios = document.querySelectorAll('audio');

function handleKeyPressed(e) {
  let keyName = '';

  if (e.type === 'click') {
    keyName = e.target.parentElement.dataset.key;
  } else {
    keyName = e.keyCode;
  }

  const key = document.querySelector(`div[data-key="${keyName}"]`);
  const audio = document.querySelector(`audio[data-key="${keyName}"]`);
  

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
  setTimeout(() => {
    key.classList.remove('playing')
  }, 100);
}



document.addEventListener('keydown', handleKeyPressed);
document.addEventListener('click', handleKeyPressed);