const timer = document.querySelector('.timer')
const startButton = document.querySelector('.start-btn')
const stopButton = document.querySelector('.stop-btn')
const resetButton = document.querySelector('.reset-btn')

const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')
const milliSeconds = document.querySelector('.milli-seconds')
let mSeconds = 0
let second =  mSeconds * 1000
let minute = second * 60

function setTimer() {
    mSeconds++
    milliSeconds.innerHTML = mSeconds
    seconds.innerHTML = second
    minutes.innerHTML = minute
    
    if(mSeconds == 99) {
        second++
        mSeconds = 0
    }
    if(second == 59) {
        minute++
    }
    if(second == 59) {
        second = 1
    }
    if(second < 10) {
        seconds.innerHTML = `0${second}`
    }
    if(minute < 10) {
        minutes.innerHTML = `0${minute}`
    }
    if(mSeconds < 10) {
        milliSeconds.innerHTML = `0${mSeconds}`
    }
}

startButton.onclick = function () {
    interval = setInterval(setTimer, 10)
}

function resetTimer() {
    resetButton.addEventListener('click', () => {
        minutes.innerHTML = "00"
        seconds.innerHTML = "00"
        milliSeconds.innerHTML = "00"
        second = 0
        minute = 0
        mSeconds = 0
        clearInterval(interval)
    })
}

resetTimer()

function stopTimer() {
    stopButton.addEventListener('click', () => {
        clearInterval(interval)
    })
}

stopTimer()