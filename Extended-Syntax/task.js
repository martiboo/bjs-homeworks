
'use strict'
function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c) {
    let d = Math.pow(b, 2) - 4 * a * c;
    if (d < 0) {
        console.log('Корней нет');
    }
    else if (d === 0) {
        let x = - b / (2 * a);
        console.log(x);
        return x;
    }
    else if (d > 0) {
        let x1 = (- b + Math.sqrt(d)) / (2 * a);
        let x2 = (- b - Math.sqrt(d)) / (2 * a);
        let arr = [x1, x2];
        console.log(arr);
        return arr;
    }

}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    let date = ( new Date ).getFullYear();
    let age = date - dateOfBirthday.getFullYear();
    if (age > 18) {
        console.log(`Не желаете ли олд-фэшн, ${name} ?`);
    }
    else {
        console.log(`Сожалею, ${name} ,но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`);
    }
    console.log(age);
    return age;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks) {
    let sum = 0;

    if (marks.length > 5) {
        let maxLength = marks.length - 5;
        marks.splice(5,maxLength);
        console.log('Считаются первые 5 оценок')
    }

    for (let i = 0; i < marks.length; i++) {
        sum = sum + marks[i];
    }

    let averageMark = sum / marks.length;
    console.log(averageMark);
    return averageMark;
}