
function parseCount(input){
    const result = Number.parseInt(input);
    if(!result){
        throw new Error ("Невалидное значение");
    }
    return result; 
}

function validateCount(input){
    try{
        return parseCount(input);   
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

        if (((a + b) <= c) || ((a + c) <= b) || ((c + b) <= a)) {
            throw new Error ("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }  
    
    getArea() {
        let p = this.getPerimeter() / 2;
        let s = Math.sqrt (p * (p - this.a) * (p - this.b) * (p - this.c))
        return Number(s.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);

    } catch(e) {
         return {
            getArea: () => 'Ошибка! Треугольник не существует',
            getPerimeter: () => 'Ошибка! Треугольник не существует'
        }

    }
}


