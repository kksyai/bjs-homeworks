"use strict";

function getResult(a,b,c){
    let x = [];
    let discriminant = Math.pow(b, 2) - 4 * a * c;

    if (discriminant < 0) {
    return x;
    }
    
    if (discriminant === 0) {
        x.push(-b / (2 * a));
    } else {
        x.push((-b + Math.sqrt(discriminant)) / (2 * a));
        x.push((-b - Math.sqrt(discriminant)) / (2 * a));
    } 
    return x;
}


function getAverageMark(marks){
    if (marks.length < 1) {
        return 0;
    }

    if (marks.length > 5) {
      marks = marks.slice(0, 5);
      console.log ('оценок больше пяти, будут учтены только первые пять оценок');
    }

    let sum = 0;
        for (let i = 0; i < marks.length; i++) {
        sum += marks[i]; 
    }
    let averageMark = sum / marks.length;
    return averageMark;
}

function askDrink(name,dateOfBirthday){

    // let date = new Date();
    
    let result = ((new Date().getFullYear() - dateOfBirthday.getFullYear()) > 18) ? (`Не желаете ли олд-фэшн, ${name}?`) : (`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`);
    return result;
}