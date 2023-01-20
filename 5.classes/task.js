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
        this.type = type;
        this.value = value;
        for (let i = 0; i < this.books.length; i++ ) {
            if(this.books[i][this.type] == this.value) {
                return this.value;
            } else {
                return null; // не понимаю, почему не работает
            }
        }
    }
   
    giveBookByName(bookName){
        for(let i = 0; i < this.books.length; i++){
            if(bookName == this.name){
                delete this.books[i];
                return this.name;
            } else {
            return null;
            }
        }
    }

}



