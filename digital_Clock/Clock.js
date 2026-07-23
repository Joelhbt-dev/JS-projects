const div = document.querySelector("#clock");

function updateTime(){


    div.textContent = new Date().toLocaleTimeString();
}

updateTime();

setInterval(updateTime,1000);