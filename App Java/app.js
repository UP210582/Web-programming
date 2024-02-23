let counterClicks = document.getElementById('count');
let btnIncrement = document.querySelector('.btn-primary');
let btnDecrement = document.querySelector('.btn-secondary');
let btnReset = document.querySelector('.btn-reset');
let clicks = 0;

document.addEventListener('DOMContentLoaded', () => {
  counterClicks.innerText = clicks;
  btnIncrement.addEventListener("click", function(){
    clicks++;
    counterClicks.innerText = clicks;
  });
  btnDecrement.onclick = function(){
    if(clicks > 0){
      clicks--;
      counterClicks.innerHTML = clicks;
    }
    else{
      alert("El contador ya esta en cero");
    }
  }
  btnReset.addEventListener("click", function(){
    if(clicks == 0){
      alert("El contador ya esta en ceros")
    }
    clicks = 0;
    counterClicks.innerHTML = clicks;
  });
});
//document.getElementById('count').style.backgroundColor = "#000"; 
//counterClicks.style.color = "#fff";