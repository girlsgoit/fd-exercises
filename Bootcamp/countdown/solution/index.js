let intervalId;
let totalSeconds = 0;

document.getElementById('start-btn').addEventListener('click', handleStart);
document.getElementById('stop-btn').addEventListener('click', handleStop);

function handleStart() {
  if (secondsInput.value !== '' || secondsInput.value !== '0') {
    totalSeconds = Number(secondsInput.value);
    secondsInput.value = '';

    intervalId = setInterval(function() {
      tick();
    }, 1000);
  }
}
  
function handleStop() {
  clearInterval(intervalId);
  totalSeconds = 0;
  showProgress();
}

function tick() {
  totalSeconds--;
  
  if (totalSeconds === 0) {
    handleStop();
    
    alert('Time is up!');
  }
  
  showProgress();
}

function showProgress() {
  let minutes = Math.floor(totalSeconds / 60);
  minutesProgress.innerText = minutes < 10 ? '0' + minutes + 'm' : minutes + 'm';
  let seconds = totalSeconds % 60;
  secondsProgress.innerText = seconds < 10 ? '0' + seconds + 's' : seconds + 's';
}
