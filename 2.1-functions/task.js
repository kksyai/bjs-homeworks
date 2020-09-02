"use strict";
let roots = [];
let x1, x2;

function getSolutions(a, b, c) {
    const D = Math.pow(b, 2) - 4 * a * c;
    if (D < 0) {
        console.log(typeof(D), D);
        return {
            D, 
            roots
        };
    } else if (D == 0) {
        x1 = -b / (2 * a);
        roots.push(x1);
    } else {
        x1 = (-b + Math.sqrt(D))/ (2 * a);
        x2 = (-b - Math.sqrt(D))/ (2 * a);
        roots.push(x1);
        roots.push(x2);
    }
    return {
        D, 
        roots
    };
}

function showSolutionsMessage(a, b, c){
    let result = getSolutions(a, b, c);
    // console.log(result);

    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);

    if (result.D < 0) {
        console.log(`Уравнение не имеет вещественных корней`);
    } 

    if (result.D == 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots}`)
    }

    if (result.D > 0) {
        console.log(`Уравнение имеет два корня.`) 
        for(let variable in roots) {
            console.log(`X${Number(variable) + 1} = ${roots[variable]}`)
        }
    }
}

//////////////////////////////////////////////

const data = {
    'algebra': [2, 4, 5, 2, 3, 4],
    'geomerty': [2, 4, 5],
    'russian': [3, 3, 4, 5],
    'physics': [5, 5],
    'music': [2, 2, 6],
    'english': [4, 4, 3],
    'poetry': [5, 3, 4],
    'chemistry': [2],
    'french': [4, 4]
}

function getAverageScore(data) {
    let newObject = {};
    let sumAverage = 0;
    let keyCount = 0;
    for(let key in data) {
        newObject[key] = getAverageMark(data[key]);   
        sumAverage += getAverageMark(data[key]);
        keyCount += 1;
    }
    newObject['average'] = sumAverage / keyCount;
    return newObject;
}

let xxx = getAverageScore(data);

function getAverageMark(marks) {
    let sum = 0;
    for(let i =0; i < marks.length; i++) {
        sum += marks[i];
    }
    let average = sum / marks.length;
    if(marks.length == 0) {
        average = 0;
    }
    return average;
}

console.log('объект предмет/среднее значение оценок', xxx);
// console.log ('длинна массива предметов', Object.keys(getAverageScore(data)).length);


///////////////////////////////////////////////////

function getPersonData(secretData) {
    let newObject = {};
    newObject.firstName = getDecodedValue(secretData.aaa);
    newObject.lastName = getDecodedValue(secretData.bbb);

    return newObject;
}

function getDecodedValue(secret) {
    let name;
    secret == 0 ? name = "Rodrigo" : name = "Emilio";
    return name;
}