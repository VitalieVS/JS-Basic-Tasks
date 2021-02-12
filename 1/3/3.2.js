const data = [
    {
        name: "Tudor",
        marks: [2,4,2,4,7]
    },
    {
        name: "Marinela",
        marks: [2,3,4,5,6]
    },
    {
        name: "Andrei",
        marks: [2,2,2,2,2]
    },
    {
        name: "Ion",
        marks: [10,7,6,4,3,3]
    },
    {
        name: "Andriana",
        marks: [5,5,5,5,5,5]
    }
];


const averageMark = () => {
   for (const value of data) {
       console.log(`Numele: ${value.name}`);
       let average = 0;
       for (const mark of value.marks) {
           average += mark;
       }
       console.log(`Average Mark: ${average / value.marks.length}`)
   }
};

const showLowAverage = () => {
    for (const value of data) {
        let average = 0;
        for (const mark of value.marks) {
            average += mark;
        }
        if (average / value.marks.length < 5) {
            console.log(value.name);
        }

    }
};

averageMark();
console.log("/////////");
showLowAverage();
console.log("/////////");
