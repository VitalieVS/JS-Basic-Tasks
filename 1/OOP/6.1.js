class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const worker = new Person("Invoker", "Zeus");
    console.log(worker.name);
    console.log(worker.surname);
});