//Create an a class and extend it - Can be anything you would like it to be! 
class Animal{
    constructor(name){
        this.name = name
    }
    speak(){
        console.log(`Hello! My name is ${this.name}`)
    }
}
class Pig extends Animal{
    constructor(name, flavor){
        super(name)
        this.flavor = flavor
    }
}

let wilbur = new Pig('Wilbur', 'Delicious')

class Goat extends Animal{
    constructor(name, age){
        super(name)
        this.age = age
    }
}

let billy = new Goat('Billy the Kid', 1)