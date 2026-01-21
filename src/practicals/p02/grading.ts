// Write your code below
const grade = Number(process.argv[2]);

if (grade < 0 || grade > 100)
    {
      console.log("Invalid input");
    }else if (80 >= grade) {
  console.log("A");
} else if (79 >= grade) 
{
  console.log("B");
} else if (69 >= grade) 
{
  console.log("C");
} else if (59 >= grade) 
{
  console.log("D");
} else if (49 >= grade) 
{
  console.log("F");
}
