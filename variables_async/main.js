function setAlarm(time, callback) {

    return function checktime(currentTime) {

        if (time === currentTime) {
            return callback();
        }
    }
}

function getCurrentTime() {
    let date = new Date();
    let hour = date.getUTCHours() + 3;
    let minute = date.getUTCMinutes();

    if (hour < 10) {
        hour = '0' + hour;
    }

    if (minute < 10) {
        minute = '0' + minute;
    }

    let clock = hour + ':' + minute;
    return clock;
}

function setDailyRhythm(wakeUpTime, bedTime) {
    const goodMorning = () => console.log('Доброе утро!');
    const checkWakeUpTime = setAlarm(wakeUpTime, goodMorning);

    const goodNight = () => console.log('Спокойной ночи!');
    const checkBedTime = setAlarm(bedTime, goodNight);

    const showGreeting = () => {
        let currentTime = getCurrentTime();
        checkWakeUpTime(currentTime);
        checkBedTime(currentTime);
    }
    setInterval(showGreeting, 1000);
}

setDailyRhythm('07:00', '23:00');