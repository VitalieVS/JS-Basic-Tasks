let data = [
    {
        name: "Tudor",
        marks: [2, 4, 2, 4, 7]
    },
    {
        name: "Marinela",
        marks: [2, 3, 4, 5, 6]
    },
    {
        name: "Andrei",
        marks: [2, 2, 2, 2, 2]
    },
    {
        name: "Ion",
        marks: [10, 7, 6, 4, 3, 3]
    },
    {
        name: "Andriana",
        marks: [5, 5, 5, 5, 5, 5]
    }
];


const averageMark = () => {
    for (const value of data) {
        console.log(`Numele: ${value.name}`);
        let average = value.marks.reduce((a, b) => {
            return a + b;
        }, 0);
        console.log(`Average Mark: ${average / value.marks.length}`)
    }
};

const showLowAverage = () => {
    for (const value of data) {
        let average = value.marks.reduce((a, b) => {
            return a + b;
        }, 0);
        if (average / value.marks.length < 5) {
            console.log(value.name);
        }
    }
};

const getAverage = array => {
    return array.reduce((a, b) => {
        return a + b;
    }, 0) / array.length;
};

const compare = (first, second) => {
    if (getAverage(first.marks) < (getAverage(second.marks))) return 1;
    if (getAverage(first.marks) > (getAverage(second.marks))) return -1;
    return 0;
};


averageMark();
console.log("/////////");
showLowAverage();
console.log("/////////");
// with max average, or with max marks?
console.log("/////////");
//data.sort(compare);
console.log(data.sort(
    (first, second) =>
        getAverage(first.marks) < getAverage(second.marks) ? 1 : getAverage(first.marks) > getAverage(second.marks) ? -1 : 0));
//inline function

