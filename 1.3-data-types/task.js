
"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
    // isInputANumber(percent);
    // isInputANumber(contribution);
    // isInputANumber(amount);
    
    // function isInputANumber(input) {   
    //     if (Boolean(input) || input == 0) {
    //         console.log(`введенное значение число ${input}`)
    //     } else {
    //         // console.log(String(input));
    //         // target.addEventListener(focus, this);
    //         // console.log(this);
    //         // console.log(input, document.getElementById('element.id').value);
    //         // addEventListener(focus, element.id))
    //         // return `Параметр ${input} содержит неправильное значение ${document.getElementById('percent').value}`;
    //     }
    // } 

    // if(isNaN(isInputANumber())) {
    //     return `Параметр ${isInputANumber()} содержит неправильное значение ${document.getElementById().value}`;
    // }
    if(isNaN(percent)) {
        return `Поле «Процентная ставка» содержит неправильное значение ${document.getElementById('percent').value}`;
    }

    if(isNaN(contribution)) {
        return `Поле «Начальный взнос» содержит неправильное значение ${document.getElementById('contribution').value}`;
    }

    if(isNaN(amount)) {
        return `Поле «Сумма кредита» содержит неправильное значение ${document.getElementById('amount').value}`;
    }

    let SumTotal = amount - contribution;
    console.log("сумма которую нужно вернть банку", SumTotal);

    let n = (date.getFullYear() - new Date().getFullYear()) * 12 + (date.getMonth() - new Date().getMonth());
    console.log('количество месяцев до даты выплаты', (n));

    let P = percent / 12 / 100;
    console.log('ежемесячная процентная ставка', P);

    let SumMonth = SumTotal * (P + P / (Math.pow((1 + P), n) - 1));
    console.log(`${1 + P} в ${n} степени`, Math.pow((1 + P), n));
    console.log(`${1 + P} в ${n} степени - 1`, Math.pow((1 + P), n) - 1);
    console.log(`${P} / ${1 + P} в ${n} степени - 1`, P / (Math.pow((1 + P), n)) -1);

    console.log('Ежемесячный платеж', SumMonth);

    console.log('общая сумма которую нужно будет заплатить', (SumMonth * n).toFixed(2));
    return parseFloat((SumMonth * n).toFixed(2));
}



function getGreeting(name) {
    if (name == false) {
        name = 'Аноним';
    }
    return `Привет, мир! Меня зовут ${name}`;
}
