setInterval(() => {const currentDate = new Date();
const targetDate = new Date("11:30 Mar 1 2024")
const timeDifference = targetDate-currentDate;

const days = Math.floor(timeDifference / (1000*60*60*24));
const hours = Math.floor((timeDifference % (1000*60*60*24)) / (1000*60*60));
const minutes = Math.floor((timeDifference % (1000*60*60)) / (1000*60));
const seconds = Math.floor((timeDifference % (1000*60)) / 1000);
// console.log(`Remaining time until 28th February: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds.`);

document.getElementById("days").innerText = days;
document.getElementById("hours").innerText = hours;
document.getElementById("minutes").innerText = minutes;
document.getElementById("seconds").innerText = seconds;
});