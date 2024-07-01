//Create a function
function Add(a,b)
{
    return a+b
}
let sum= Add(3,4) // call the function
console.log("Sum: " +sum)
console.log("Sum: " + Add(6,7))
// There are 2 ways to create anyonnymus functions. Way1:
let Sum = function(c,d)
{
    return c+d
}
console.log("Sum: " + Sum(5,6))
//Way2:
let summation = ((c,d)=>c+d)
console.log("Sum: " + summation(5,6))
// Create an annynomous function
let add = (a,b)=>a+b
console.log("The sum is: " +add(3,4))
