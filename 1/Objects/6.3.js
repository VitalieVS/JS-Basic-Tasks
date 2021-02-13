let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};


const multiplyNumeric = obj => {
    for (const property in obj) {
        if (obj.hasOwnProperty(property)) {
            if (typeof obj[property] === "number") {
                obj[property] *= 2;
            }
        }
    }
};

multiplyNumeric(menu);

console.log(menu);

