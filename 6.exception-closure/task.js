function parseCount(value) {
  if (isNaN(Number.parseFloat(value))) {
    throw Error('Невалидное значение');
 }
 return Number(value);
}

function validateCount(value) {
    try {
    return parseCount(value);
    }
    catch (error) {
     return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        if (((a + b) < c) || ((a + c) < b) || ((c + b) < a)) {
            throw Error('Треугольник с такими сторонами не существует');
        }
        this.a = a;
        this.b = b;
        this.c = c;
    
    }

    get perimeter() {
   return (this.a + this.b + this.c);
    }

    get area() {
        const p = this.perimeter / 2;
        let result =  Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

        return Number(result.toFixed(3));
    }

}

function getTriangle(a, b, c) {
 try {
   return new Triangle(a, b, c);
 }   
 catch(Error) {
     return { 
        get perimeter() {
        delete this.perimeter;
        return 'Ошибка! Треугольник не существует'
    },
        get area() {
        delete this.area;
        return 'Ошибка! Треугольник не существует'
    }
      
 }
}
}