// We can declare arrays in 3 different ways. Way1:
var marks = Array(6)
marks[0]= 68
marks[1]= 98
marks[2] =78
marks[3] =85
marks[4] =79
marks[5]= 93
console.log(marks)
//Way2:
marks= [ 68, 98, 78, 85, 79, 93 ]
//Way3: 
marks= new Array ( 68, 98, 78, 85, 79, 93 )
marks[0]= 91
console.log(marks)
console.log("Length of the marks array is: " +marks.length)// marks.length will print the length of the array
marks.push(89)// It will add an element at the end with value 89
console.log(marks)
marks.pop()// It will delete the last element of the array
console.log(marks)
marks.unshift(84)// It will add the element with value 84 at the begining.
console.log(marks)
console.log("Index of 85 in marks array is: " +marks.indexOf(85))//indexOf(85) will show the location of 85 in the marks array
console.log(marks.includes(340))// It will check if 340 is present in the marks array
subMarks = marks.slice(2,7)// It will create a sub array from 3rd index to 7th index
console.log(subMarks)
//Print all the elements of an array
for (count=0; count<marks.length;count++)
    {
       console.log("Marks Array " +count +"index element is: " + marks[count])
    }
 