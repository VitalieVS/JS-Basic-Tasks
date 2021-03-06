class User {
    get name() {
        return this._name;
    }

    get surname() {
        return this._surname;
    }
    constructor(name, surname) {
        this._name = name;
        this._surname = surname;
    }

    getFullName() {
        return `${this._name} ${this._surname}`;
    }
}


class Student extends User {
    currYear = new Date().getFullYear();

    get year() {
        return this._year;
    }

    constructor(name, surname, year) {
        super(name, surname);
        this._year = year;
    }

    getCourse() {
        return this.currYear - this._year;
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const student = new Student("Invoker", "Miau", 2020);
    console.log(student.name);
    console.log(student.surname);
    console.log(student.getFullName());
    console.log(student.year);
    console.log(student.getCourse());
});
