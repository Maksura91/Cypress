// Add all the element of an array
let marks= [ 68, 98, 78, 85, 79, 93 ]
Total=0
for (count=0; count<marks.length;count++)
    {
       Total=Total+marks[count]
    }
    console.log("The sum of all the elements of the marks array is: "+Total)
 // Using reduce Method 
 let sum= marks.reduce((total1,marks)=>total1+marks,0)  
 console.log("The sum of all the elements of the marks array is: " +sum)
// Print the even numbers of an array in another array
let ARRAY = [87, 46, 95, 33, 58, 68, 92, 71]
var EVEN = []
for(count=0;count<ARRAY.length;count++)
{
    if(ARRAY[count]%2==0)
        EVEN.push(ARRAY[count])
}
console.log(EVEN)
// Print the even numbers of an array in another array using filter
let ARRAY1 = [87, 46, 95, 33, 58, 68, 92, 71, 66, 97, 50]
EVEN= ARRAY1.filter(number=> number%2==0)
let Odd1= ARRAY1.filter(Odd=> Odd%2!=0)// This will print all the odd numbers in an array
console.log(EVEN)
console.log(Odd1)
// multiply all the elements of an array with 7 & sum all the elements
mappedArray1 = EVEN.map(num=>num*7)// for even numbers
mappedArray2 = Odd1.map(num=>num*7)// for odd numbers
let sum1 = mappedArray1.reduce((count1,Array1)=>count1+Array1,0)
let sum2 = mappedArray2.reduce((count2,Array2)=>count2+Array2,0)
console.log(mappedArray1)
console.log(mappedArray2)
console.log("Sum of even elements: " +sum1)
console.log("Sum of odd elements: " +sum2)
// Create an array with the even numbers of a given array, multiply them with 7 & sum them
let NewArray = [12, 23, 36, 54, 59, 28, 50, 69, 68, 99, 92]
let summation = NewArray.filter(element=> element%2==0).map(newElement=>newElement*7).reduce((counter,El)=>counter+El,0)
console.log(summation)
