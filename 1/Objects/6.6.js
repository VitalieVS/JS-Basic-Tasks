const array = [{x: 1, y: 2}, {x: 3, y: 4}, {x: null, y: 4}, {x: 3, y: undefined}];

const removeBadPoints = obj => {
    return obj.filter((value, index) => {
        const isPoint =
            typeof array[index].x === "number" &&
            typeof array[index].y === "number";

        if (isPoint) return value;
    });
};

console.log(removeBadPoints(array));

