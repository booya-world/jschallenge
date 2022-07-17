const clock = document.getElementById("clock");

function getClock() {
    const today = new Date();
    const today_hour = String(today.getHours()).padStart(2,"0");
    const today_minute = String(today.getMinutes()).padStart(2,"0");
    const today_second = String(today.getSeconds()).padStart(2,"0");

    clock.innerText = `${today_hour}:${today_minute}:${today_second}`;
}

getClock();
setInterval(getClock,1000);
