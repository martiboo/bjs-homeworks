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
    let percentNumber = Number(percent);
    if (isNaN(percentNumber) === true) {
        console.log(`Параметр Процентная ставка содержит неправильное значение ${percent}`);
        return;
    }

    let contributionNumber = Number(contribution);
    if (isNaN(contributionNumber) === true) {
        console.log(`Параметр Первоначальный взнос содержит неправильное значение ${contribution}`);
        return;
    }

    let amountNumber = Number(amount);
    if (isNaN(amountNumber) === true) {
        console.log(`Параметр Сумма кредита содержит неправильное значение ${amount}`);
        return;
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
    let value = name;
    if (name === undefined || name === '' || name === null) {
        value='Аноним';
    }
    let greeting = `Привет, мир! Меня зовут ${value}`;
    console.log(greeting);
    
    return greeting;
}