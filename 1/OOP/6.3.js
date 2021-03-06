class Worker {
    get name() {
        return this._name;
    }

    get surname() {
        return this._surname;
    }

    get rate() {
        return this._rate;
    }

    get days() {
        return this._days;
    }

    constructor(name, surname, rate, days) {
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
    }

    get salary() {
        return this._rate * this._days;
    }

}

document.addEventListener("DOMContentLoaded", () => {
    const worker = new Worker("Invoker", "Pudge", 10, 31);
    console.log(worker.name);
    console.log(worker.surname);
    console.log(worker.rate);
    console.log(worker.days);
    console.log(worker.salary);
});