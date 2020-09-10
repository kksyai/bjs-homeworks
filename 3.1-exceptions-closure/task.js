function parseCount(input){
    // console.log('input', input);
    if(Number.parseInt(input)){
        return Number.parseInt(input);
    } else {
        throw "Невалидное значение";
    }
}

function validateCount(input){
    try{
        if (parseCount(input)) {
            return parseCount(input);
        }
    } catch(e) {
        return e;
    }
}

////////////////////////////////////////

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (((this.a + this.b) <= this.c) || ((this.a + this.c) <= this.b) || ((this.c + this.b) <= this.a)) {
            throw new Error ("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }  
    
    getArea() {
        let p = (this.a + this.b + this.c) / 2;
        let s = Math.sqrt (p * (p - this.a) * (p - this.b) * (p - this.c))
        return s.toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);

    } catch(e) {
         const existError = {
            getArea: () => 'Ошибка! Треугольник не существует',
            getPerimeter: () => 'Ошибка! Треугольник не существует'
        }
        return existError;
    }
}


