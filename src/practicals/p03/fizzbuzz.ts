// Write your code below
const num = Number(process.argv[2]);
if (num <= 0){
    console.log("")
}else if (num % 3 === 0 && num % 5 === 0 ){
    console.log("FizzBuzz")
}else if (num % 3 === 0){
    console.log("Fizz")
}else if (num % 5 === 0){
    console.log("Buzz")}