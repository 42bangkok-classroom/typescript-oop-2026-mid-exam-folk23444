// Write your code below
const size = Number(process.argv[2]);
for (let i = 1; i <= size; i++) {
    let line = "";
    for (let j = 5; j >= 1; j--) {
        if (j <= i) {
            line += j.toString();
        } else {
            line += " ";
        }
    }
    console.log(line);
}