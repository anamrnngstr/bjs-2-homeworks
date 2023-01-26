class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    // fix() {
    //     return this.state * 1.5 < 100 ? this.state = this.state * 1.5 : this.state = 100;
    // }
    fix() {
        this.state=this.state*1.5;
    }

    set state(fix){
        if (fix<0){
            this._state = 0;
        }else if (fix>100){
            this._state = 100;
        }else{
            this._state = fix;
        }
    }

    get state(){
        return this._state;
    }
}
class Magazine extends PrintEditionItem {

    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.state = 100;
        this.type = 'magazine';
    }
}
  class Book extends PrintEditionItem {

      constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
          this.state = 100;
          this.type = 'book';
          this.author = author;
        }
}
class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
          this.state = 100;
          this.type = 'novel';
        }

}
class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
          this.state = 100;
          this.type = 'fantastic';
        }
}
class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
          this.state = 100;
          this.type = 'detective';
        }
}

class Library {
    constructor (name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        this.book = book;
        return this.book.state > 30 ? this.books.push(this.book) : 'this.book.state > 30 is required';
}
    findBookBy(type, value) {

        return this.books.find(book => book[type] == value) || null;

}
    giveBookByName(bookName) {
    
        let index = this.books.findIndex(element => element.name == bookName);
        if (index == -1) {
          return null;
        } else{
          let arr = this.books.splice(index, 1);
          return arr[0];
        }

    }
}

// EXERCISE 3 ==========================================
function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}
let students = [
   new Student('Oleg', 'male', 26),
   new Student('Olga', 'female', 23),
   new Student('Jack', 'male', 21),
]

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}


Student.prototype.addMarks = function (...marks) {

    return this.marks ? this.marks.push(...marks) : 'student expelled';

}

Student.prototype.getAverage = function () {
    return !this.marks || !this.marks.length ? 0 : this.marks.reduce((counter, value) => counter + value, 0)/this.marks.length;
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  return delete this.marks && this.subject;
}

//## Задача 3. Журнал успеваемости *

//> Это задача со звёздочкой. Её выполнение не влияет на получение допуска к дипломной работе, 
//но поможет усвоить пройденный материал. 

class Student {
    constructor (name, ...marks) {
        this.name = name;
        this.marks = [];
        
    }
}

Мы продолжаем совершенствовать журнал успеваемости студентов. Нужно преобразовать код прошлого ДЗ к классам. 
Реализуйте возможности:

1. В конструкторе класса сохраняйте имя пользователя и создавайте свойство для хранения оценок.
<details>
  <summary>В какой структуре хранить оценки по разным предметам?</summary>
    Удобней всего хранить оценки ввиде объекта, где свойством будет название предмета, 
    а значением свойства — массив оценок по этому предмету. Начальным значением будет пустой объект.

    {
      "физика": [4, 5, 5, 4],
      "химия": [3, 4],
      "литература": [4],
      "ифнорматика": [5, 5, 5]
    }
</details>