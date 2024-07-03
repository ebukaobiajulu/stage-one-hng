const currentDay = document.querySelector('[data-testid="currentDay"]');
const currentTime = document.querySelector('[data-testid="currentTimeUTC"]');

// to get the current day of the week
currentDay.textContent = new Date().toLocaleString("en-US", {
  weekday: "long",
});


// to get the current time in UTC
setInterval(() => {
const now = new Date();

const hours = now.getUTCHours().toString().padStart(2, "0");

const minutes = now.getUTCMinutes().toString().padStart(2, "0");

const seconds = now.getUTCSeconds().toString().padStart(2, "0");

const utcTime = hours + ':' + minutes + ':' + seconds;

    
currentTime.innerHTML = utcTime + ' UTC';
}, 1000);

