// Write your code below
const score = Number(process.argv[2]);

if (score < 0 || score > 100) {
    console.log("Invalid input");
}
if (score >= 80) {
console.log("A");
} else if (score >= 79) {
console.log("B");
} else if (score >= 69) {
console.log("C");
} else if (score >= 59) {
console.log("D");
}else if (score >= 49) {
console.log("F");
}
