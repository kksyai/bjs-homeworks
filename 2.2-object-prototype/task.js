"use strict";
//String.prototype.isPalindrome - для задачи №1
String.prototype.isPalindrome = function(string){
    string = this.toLowerCase();
    let stringNoSpace = string[0];
    let stringReverse = stringNoSpace;

    for(let i = 1; i < string.length; i++){
        stringNoSpace = stringNoSpace + string[i].trim();
        stringReverse = string[i].trim() + stringReverse;
    }

    return (stringNoSpace === stringReverse) ? true : false;
};

    
// код для задачи №2 писать здесь
function getAverageMark(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    let average = sum / marks.length;
    let roundedAverage = Math.round(average);
    return roundedAverage;
}


// код для задачи №3 писать здесь
const now = Date.now();

function checkBirthday(birthday) {
    const diff = now - Date.parse(birthday.value);
    const age = diff / 31536000000;
    return (age > 18) ? true : false;
}