// create a substring
let day ="Tomorrow"
console.log("The length of the string is: "+day.length)
let Day = day.slice(2,8)// It will take the string from 2nd index to last digit 
console.log("The subString is: "+Day)
console.log("The 3rd element of the string day is: "+day[2])// just like array it will print the 3rd element
let day1= "Thursday "
let splitDay1=day1.split("rs") // It will convert the string into an array containing 2 strings "Thu" & "day "
console.log(splitDay1[0])// It will print "Thu"
console.log(splitDay1[1])// It will print "day "
console.log(splitDay1[1].length)
console.log(splitDay1[1].trim().length)// trim function removes empty space from the begining or end of the string
let date = "26"
let date1 = "31"
let diff = parseInt(date1)- parseInt(date)// parseInt changes string datatype to integer
console.log(diff)
console.log(diff.toString())// toString() function will turn a value to string
let Concat= day +" is a funday" // It will concat 2 strings
console.log(Concat)
console.log(Concat.indexOf("day",10))// Concat.indexOf("day",10) will start searching from 10th index of Concat
// Print how many times a wors is in the string
let Text1="The day is sunday which is funday"
let count=0
let val=Text1.indexOf("day")
while(val!== -1)
{
    count++
    val=Text1.indexOf("day", val+1)
}
console.log("Count is: "+count)