//https://www.youtube.com/watch?v=DUEyiEnMVj4
function clock() {
    //const, var or let
    const fullDate = new Date();
    var hours = fullDate.getHours();
    var mins = fullDate.getMinutes();
    var secs = fullDate.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (mins < 10) {
        mins = "0" + hours;
    }
    if (secs < 10) {
        secs = "0" + secs;
    }

    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = ":" + mins;
    document.getElementById('second').innerHTML = ":" + secs;
}
setInterval(clock, 100);
