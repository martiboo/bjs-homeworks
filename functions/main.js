//Задача 1

function getSolutions(a, b, c) {
    let d = Math.pow(b, 2) - 4 * a * c;
    if (d < 0) {
        return {
            D: d
        };
    }
    else if (d === 0) {
        let x1 = - b / (2 * a);
        let root = [x1];
        return {
            D: d,
            roots: root
        };
    }
    else if (d > 0) {
        let x1 = (- b + Math.sqrt(d)) / (2 * a);
        let x2 = (- b - Math.sqrt(d)) / (2 * a);
        let root = [x1, x2];
        return {
            D: d,
            roots: root
        };
    }
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
        console.log(`Уравнение не имеет вещественных корней`);
    }
    else if (result.D === 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
    }
    else if (result.D > 0) {
        console.log(`Уравнение имеет два корня. X₁ =  ${result.roots}, X₂ = ${result.roots}`);
    }
}

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);

//Задача 2

function getAverageScore(data) {
    let sum = 0;
    let counter = 0;
    let newObject = {};
    for (let prop in data) {
        let value = data[prop];
        let averageMarkSubject = getAverageArr(value);
        sum = sum + averageMarkSubject;
        counter++;
        newObject[prop] = averageMarkSubject;
    }
    let averageMarkTotal = sum / counter;
    newObject['average'] = averageMarkTotal;
    return newObject;
}

function getAverageArr(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum = sum + marks[i];
    }
    let average = sum / marks.length;
    return average;
}

console.log(getAverageScore({
    algebra: [2, 4, 5, 2, 3, 4],
    geometry: [2, 4, 5],
    russian: [3, 3, 4, 5],
    physics: [5, 5],
    music: [2, 2, 5],
    english: [4, 4, 3],
    poetry: [5, 3, 4],
    chemistry: [2],
    french: [4, 4]
}));


//Задача 3

function getPersonData(secretData) {

    let personName = {};
    for (let prop in secretData) {
        let value = secretData[prop];
        let name = getName(value);
        let key = getProp(prop);
        personName[key] = name;
    }
    return personName;
}

function getName(number) {
    if (number === 0) {
        return 'Родриго';
    }
    else if (number === 1) {
        return 'Эмильо';
    }
}

function getProp(letter) {
    if (letter === 'aaa') {
        return 'firstName';
    }
    else if (letter === 'bbb') {
        return 'lastName';
    }
}

console.log(getPersonData({
    aaa: 0,
    bbb: 0
}));

console.log(getPersonData({
    aaa: 1,
    bbb: 0
}));

console.log(getPersonData({
    aaa: 0,
    bbb: 1
}));

console.log(getPersonData({
    aaa: 1,
    bbb: 1
}));