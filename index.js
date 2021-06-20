
let time = 0;
let status = "stopped";
let timerDiv = document.getElementById('timer')
let x;
function stopwatch() {
    timerDiv.innerText = (parseInt(time/3600)<10?"0":"") + parseInt(time/3600)+":"+(parseInt((time/60)%60)<10?"0":"")+parseInt((time/60)%60)+":"+(parseInt((time)%60)<10?"0":"")+parseInt((time)%60)
}

function start() {
    if (status==="stopped") {
        x = setInterval(() => {
            time = time + 0.1;
            stopwatch();
        }, 100);
        document.getElementById('start').setAttribute('disabled',true)
        document.getElementById('stop').removeAttribute('disabled')
        document.getElementById('pause').removeAttribute('disabled')       
         status = "started";
    }
}

function stop() {
    document.getElementById('start').removeAttribute('disabled')
    document.getElementById('pause').setAttribute('disabled',true)
    document.getElementById('pause').innerText = "pause"
    document.getElementById('stop').setAttribute('disabled',true)
    clearInterval(x)
    time = 0;
    stopwatch();
    status = "stopped";
}function pause() {    if (status=="started") {
        clearInterval(x)
        status = "stopped";
    document.getElementById('pause').innerText = "continue"
    }
    else {
    document.getElementById('pause').innerText = "pause"
        start()
     }
}
stopwatch();

