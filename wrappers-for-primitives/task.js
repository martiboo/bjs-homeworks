'use strict'

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    if (isNaN(percent) === true) {
        console.log(`Параметр Процентная ставка содержит неправильное значение ${percent}`);
        percent = Number(percent);
        if (isNaN(percent) === true) {
            return;
        }
    }

    if (isNaN(contribution) === true) {
        console.log(`Параметр Первоначальный взнос содержит неправильное значение ${contribution}`);
        percent = Number(contribution);
        if (isNaN(contribution) === true) {
            return;
        }
    }

    if (isNaN(amount) === true) {
        console.log(`Параметр Сумма кредита содержит неправильное значение ${amount}`);
        amount = Number(amount);
        if (isNaN(amount) === true) {
            return;
        }
    }
    
    let dateTransform = new Date(date);
    let debt = amount - contribution;
    let s = debt;
    let p = percent / 100;
    let year = dateTransform.getFullYear() - new Date().getFullYear();
    let month = dateTransform.getMonth() - new Date().getMonth();
    let n = year * 12 + month;
    let monthAmount = s*(p+p/(((1+p)^n)-1));
    let totalAmount = monthAmount * n;
    console.log(totalAmount);

    return totalAmount;
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    let greeting;
    if (name === undefined || name === '' || name === null) {
        greeting = 'Привет, мир! Меня зовут Аноним';
        console.log(greeting);
    }
    else {
        greeting = `Привет, мир! Меня зовут ${name}`;
        console.log(greeting);
    }
    
    return greeting;
}