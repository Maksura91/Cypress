// print the common multiples of 2 & 7 till 100 & print the number of the multiples
let count =0
for (k=0;k<=100;k++)
{
    if(k%2==0 && k%7==0)
    {
      console.log(k)
      count++
    }
}
console.log("The number of common multiples of 2 & 7 till 100 is: "+count)
// print the multiples of 2 or 7 till 100 & print the number of the multiples
let count1 =0
for (k=0;k<=100;k++)
{
    if(k%2==0 || k%7==0)
    {
      console.log(k)
      count1++
    }
}
console.log("The number of multiples of 2 & 7 till 100 is: "+count1)
// print the 1st 7 common multiples of 2 & 7 till 100 
let count2 =0
for (k=0;k<=100;k++)
{
    if(k%2==0 && k%7==0)
    {
      console.log(k)
      count2++
      if(count2==7)
        break
    }
}