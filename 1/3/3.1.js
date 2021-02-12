const arr = [5, 6, 7, 3, 4, 3, 2];

let index = 0;

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log("///////////");

while (index < arr.length) {
    console.log(arr[index]);
    index++;
}

index = 0;

console.log("///////////");

do {
    console.log(arr[index]);
    index++;
} while (index < arr.length);

console.log("///////////");

for (const value in arr) {
    console.log(+value);
}

console.log("///////////");

for (const value of arr) {
    console.log(value);
}

console.log("///////////");

arr.forEach( elem => console.log(elem));

console.log("///////////");

arr.map(elem => console.log(elem));
