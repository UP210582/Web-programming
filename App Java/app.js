let clicks = 0;
const countClicks = document.querySelector('#count');
const [increment, decrement, reset] = document.querySelectorAll('button');

document.addEventListener('DOMContentLoaded', () => {
  increment.onclick = () => {
    clicks++;
    countClicks.innerHTML = clicks;
  };

  decrement.onclick = () => {
    clicks--;
    countClicks.innerHTML = clicks;
  };

  reset.onclick = () => {
    clicks = 0;
    countClicks.innerHTML = 0;
  };
  
});