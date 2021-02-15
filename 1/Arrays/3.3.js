const styles = ["Jazz", "Bliuz"];

styles.push("Rock-n-Roll");
console.log(styles);
const middle = Math.floor(styles.length / 2);
styles[middle] = "Classic";
console.log(styles);
console.log(styles.shift());
console.log(styles);
styles.unshift("Rap", "Reggi");
console.log(styles);