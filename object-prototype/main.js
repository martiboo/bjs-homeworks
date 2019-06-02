function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    let now = new Date();
    let birthdayDate = new Date(birthday);
    let diff = now - birthdayDate;
    let year = 365.25 * 24 * 60 * 60 * 1000;
    let age = diff / year;
    console.log(age);
    if (age > 18) {
        return age;
    }
}


function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    let sound = animal.sound;
    if (animal === undefined) {
        return null;
    }
    return sound;
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        let parseMarks = parseInt(marks[i]);
        sum = sum + parseMarks;
    }
    let average = sum / marks.length;
    let roundedAverage = Math.round(average);
    
    return roundedAverage;
}