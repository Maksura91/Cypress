// Create an object
let Person= { 
    firstName: "Joey",
    lastName: "Tribiani",
    age: 33,
    value: 100,
    gender: "Male"
}
console.log(Person)
console.log(Person.firstName)//to access firstName Person.firstName
console.log(Person["firstName"])//to access firstName Person["firstName"]
console.log(Person.firstName+" "+Person.lastName)
Person.firstName="Kane" // Reassigning value
Person.lastName="Adams"
console.log(Person.firstName+" "+Person.lastName)
Person.country="Italy" // Add another property
console.log(Person.firstName+" "+Person.lastName+" is from "+Person.country)
delete Person.value // to delete a property
console.log(Person)
console.log("value" in Person)// to find if a property is in the object
for (let key in Person)// for loop to iterate through every item of the object
    {
        console.log(Person[key])
    }
 let Person1= { 
    firstName: "Joey",
    lastName: "Tribiani",
    fullName: function()
    {
         console.log(this.firstName+ " "+this.lastName)
    },
    age: 33,
    value: 100,
    gender: "Male"
}  
console.log(Person1.fullName()) // we have to access the object independently like this: Person1.fullName()