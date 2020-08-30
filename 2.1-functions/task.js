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

___________________________________________________

function getAverageScore(data) {
    let newObject = {};
    for(let key in data) {
        newObject[key] = getAverageMark(data[key]);
    }
    return newObject;
}


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

___________________________________________________

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