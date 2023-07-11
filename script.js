let time;
let interval;

function startTimer() {
   const minutesDisplay = document.getElementById("minutes");
   const secondsDisplay = document.getElementById("seconds");

   let minutes = parseInt(minutesDisplay.innerText);
   let seconds = parseInt(secondsDisplay.innerText);

   if (interval) {
      clearInterval(interval);
   }

   interval = setInterval(() => {
      if (minutes === 0 && seconds === 0) {
         clearInterval(interval);
         return;
      }

      if (seconds === 0) {
         minutes--;
         seconds = 59;
      } else {
         seconds--;
      }

      minutesDisplay.innerText = formatTime(minutes);
      secondsDisplay.innerText = formatTime(seconds);
   }, 1000);
}

function resetTimer() {
   clearInterval(interval);
   document.getElementById("minutes").innerText = "25";
   document.getElementById("seconds").innerText = "00";
}

function formatTime(time) {
   return time < 10 ? `0${time}` : time.toString();
}
