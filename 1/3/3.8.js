const colors = ["red", "green", "blue"];

const checkColor = color => {
    for (const value of colors) {
        if (value === color) {
            return 1;
        }
    }
    return -1;
};

console.log(checkColor("green2"));