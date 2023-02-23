//Same Keys and Values
//Old:
//function createInstructor(firstName, lastName){
//  return {
//    firstName: firstName,
//    lastName: lastName
//  }
//}
//New:
function createInstructor(firstName,lastName){
    return {
        firstName,
        lastName
    }
}

//Computed Property Names
//Old:
//var favoriteNumber = 42;
//var instructor = {
//  firstName: "Colt"
//}
//instructor[favoriteNumber] = "That is my favorite!"
//New:
const favoriteNumber = 42
const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite"
}

//Object Methods
//Old:
//var instructor = {
//  firstName: "Colt",
//  sayHi: function(){
//    return "Hi!";
//  },
//  sayBye: function(){
//    return this.firstName + " says bye!";
//  }
//}
//New:
const instructor2 = {
    firstName: "Colt",
    sayHi(){return "Hi!"},
    sayBye(){return this.firstName + " says bye!"}
}

//New Function:
function createAnimal(species,verb,noise){
    return {
        species,
        [verb](){
            return noise
        }
    }
}