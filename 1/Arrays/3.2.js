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

showNameAverage = () => {
    for (const student of data) {
        console.log(`Numele: ${student.name}`);
        let studentAverage = student.marks.reduce((accumulator, value) => {
            return accumulator + value;
        }, 0);
        console.log(`Average Mark: ${studentAverage / student.marks.length}`)
    }
};

showLowAverage = () => {
    for (const student of data) {
        let average = student.marks.reduce((accumulator, value) => {
            return accumulator + value;
        }, 0);
        if (average / student.marks.length < 5) {
            console.log(student.name);
        }
    }
};

getStudentAverage = array => {
    return array.reduce((accumulator, value) => {
        return accumulator + value;
    }, 0) / array.length;
};

compare = (first, second) => {
    if (getStudentAverage(first.marks) < (getStudentAverage(second.marks))) return 1;
    if (getStudentAverage(first.marks) > (getStudentAverage(second.marks))) return -1;
    return 0;
};

getTotalAverage = () => {
    let totalAverage = 0;
    for (const student of data) {
        totalAverage += getStudentAverage(student.marks);
    }
    return totalAverage / data.length
};

showHigherAverage = (totalAverage) => {
    console.log(`Total Average: ${totalAverage}`);
    for (const student of data) {
        getStudentAverage(student.marks) > totalAverage ? console.log(`Name: ${student.name}`) : 0;
    }
};

showNameAverage();
console.log("/////////");
showLowAverage();
console.log("/////////");
// with max average, or with max marks?
console.log("/////////");
console.log(data.sort(
    (first, second) =>
        getStudentAverage(first.marks) < getStudentAverage(second.marks) ? 1 : getStudentAverage(first.marks) > getStudentAverage(second.marks) ? -1 : 0));
console.log("/////////");
showHigherAverage(getTotalAverage());






