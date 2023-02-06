//Create a dog object that has four properties and three methods
let dog = {}
//literal notation

dog.name = 'bob barker'
dog.fur = 'shaggy'

dog.bark = function(){
    console.log('bark bark i am ${dog.name}')};
dog.jump = function(){
    console.log('${name} does big jump')
}

//dot notation

function MakeDog(dogName, dogbreed){
    this.name = dogName
    this.breed = dogbreed
}