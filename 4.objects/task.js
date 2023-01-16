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
