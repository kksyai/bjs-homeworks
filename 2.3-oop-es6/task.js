"use strict";

class PrintEditionItem {
    
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix(){
        this.state *= 1.5;
    }

    set state(value) {
        if (value < 0) {
            this._state = 0;
            // return;
        } else if (value > 100) {
            this._state = 100;
        } else {
            this._state = value;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    type = 'magazine';
}

class Book extends PrintEditionItem {
    type = 'book';
    constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
    }
}

class NovelBook extends Book {
    type = 'novel';
}

class FantasticBook extends Book {
    type = 'fantastic';
}

class DetectiveBook extends Book {
    type = 'detective';
}

class Library {
    constructor(name){
        this.name = name;
        this.books = [];
    }

    addBook(Book) { 
        if (Book.state > 30) {
           this.books.push(Book);
        }
    }

    findBookBy(type, value) {
        for(let book of this.books) {
            if(book[type] == value) {
                return book;
             }
        }
        return null;
    }
    
    giveBookByName(bookName) {
        for(let book of this.books) {
            if(book.name == bookName){
                this.books.splice(this.books.indexOf(book), 1);
                return book;
            }
        }
        return null;
    }
}

///////////////////////////////////////////////


class StudentLog {
    constructor(name){
        this.name = name;
        this.totalGrades = {};
        // this.grades = [];
    }

    getName(){
        return this.name;
    }


    addGrade(grade, subject) {

        if((grade >= 1) && (grade <= 5)) {
            if (this.totalGrades.hasOwnProperty(subject)) {
                this.totalGrades[subject].push(grade);
                return this.totalGrades[subject].length;
            } else {
                this.totalGrades[subject] = [];
                this.totalGrades[subject].push(grade);
                return this.totalGrades[subject].length;
            }
   
        } else {
            console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
            if(this.totalGrades.hasOwnProperty(subject)){
                return this.totalGrades[subject].length;
            } else {
                return 0;
            }                
        }
    }

    getAverageBySubject(subject){
        if(this.totalGrades.hasOwnProperty(subject)){
            let sum = 0;
            for(let grade of this.totalGrades[subject]) {
                sum += grade;
            }
            const average = sum / this.totalGrades[subject].length;
            return average;
            
        } else {
            return 0;
        }
    }

    getTotalAverage(){
        let counter = 0; 
        let totalSum = 0;
        for(let subject in this.totalGrades){  
            counter ++;
            if(this.totalGrades.hasOwnProperty(subject)){
                totalSum += this.getAverageBySubject(subject);                
            } else {
                totalSum += 0;
            }
        }
        return totalSum / counter;
    }
}