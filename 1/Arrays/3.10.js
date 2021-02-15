const array = [8, 7, 2, 2, 3, 4, 2, 5, 5, 6, 7, 8, 5, 9, 0, 1];

uniqueSorted = (array, unique = {}) => {
    return array.filter(elem => {
        return unique.hasOwnProperty(elem) ? false : unique[elem] = true;
    }).sort((a,b) => a - b);
};
console.log(uniqueSorted(array));