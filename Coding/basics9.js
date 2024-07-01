//Create a class & export it for use in other codes
/*module.exports= class Person{}
to export a class */
/* to call it to any other codes we need to:
 let person = require("/basics9.js")
*/
class Person{
age =33
get location()
{
    return "Canada"
}
constructor(firstName,lastName)
{
  this.firstName= firstName
  this.lastName= lastName
}
fullName()
{
    //console.log(this.firstName+" "+this.lastName)
    return this.firstName+" "+this.lastName
}
}
let person = new Person()
console.log(person.age)
console.log(person.location)
let person1 = new Person("Joye","Tribiyani")
console.log(person1.fullName())


/* Inheritence example
let person = require("/basics9.js")
class Pet extends Person
{
constructor(firstName,lastName) //If parent class has constructor then we need to call the parent class constructer 1st
{
  super(firstName,lastName)
}
//you can do anything here
}
*/