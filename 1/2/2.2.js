let sum = 0;

const a = 1;
const b = 20;

for (let i = a; i < b; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
console.log(sum);