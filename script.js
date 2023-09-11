const hourEL = document.querySelector('.hour')
const minuteEL = document.querySelector('.minute')
const secondEL = document.querySelector('.second')
const toggle = document.querySelector('.toggle')
const timeElement = document.querySelector('.time');
const dateElement = document.querySelector('.date');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const months = ["Jan", "Feb,", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "NOv", "Dec"]

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        toggle.innerHTML = 'Dark mode'; // Update the button text
    } else {
        html.classList.add('dark');
        toggle.innerHTML = 'Light mode'; // Update the button text
    }
});


function setTime() {
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const hours = time.getHours()
    const hoursForClock = hours % 12
    const minute = time.getMinutes()
    const second = time.getSeconds()

    hourEL.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`;
    minuteEL.style.transform = `translate(-50%, -100%) rotate(${scale(minute, 0, 59, 0, 360)}deg)`;
    secondEL.style.transform = `translate(-50%, -100%) rotate(${scale(second, 0, 59, 0, 360)}deg)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_max;
}

setTime();

setInterval(setTime, 1000);


function updateTimeAndDate() {

    const now = new Date();
    const options = { weekday: 'long', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const dateTimeString = now.toLocaleString('en-US', options);

    const [dayOfWeek, monthAndDate, time] = dateTimeString.split(', ');
    const [month, date] = monthAndDate.split(' ');

    timeElement.textContent = time;
    dateElement.textContent = `${dayOfWeek}, ${month},${date}`;
}

// Update time and date immediately
updateTimeAndDate();

// Update time and date every second (1000 milliseconds)
setInterval(updateTimeAndDate, 1000);