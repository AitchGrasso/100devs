// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 
// class Contractor{
//     constructor(name,role){
//         this._name = name
//         this._role = role
//     }
//     get name(){
//         return this._name
//     }
//     get role(){
//         return this._role
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
//     }
// }
// class Front extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// class Back extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// let bob = new Contractor('Bob','Front-end')
// let simba = new Front('Simba','Front-end','React')
// let machi = new Back('The Machine','Back-end','Node')

// let agency = [bob,simba,machi]

// for(person of agency){
//     person.sayHello()
// }

class Contractor{ //encapulation
    constructor(name, role){ //properties
        this._name = name //_ means don't touch!
        this._role = role //abstraction
    }

    get name(){
        return this._name
    }

    get role(){
        return this.role
    }

    sayHello(){
        console.log(`Hi, my name is ${this._name}`)
    }
}

class forntend{
    constructor(name, role){
        this._name = name
        this._role = role
    }

    get name(){
        return this._name
    }

    get role(){
        return this._role
    }

    sayHello(){
        console.log(`Hello, my name is ${}`)
    }
}

class backend{
    constructor(name, role){
        this._name = name
        this._role = role
    }

    get name(){
        return _name
    }
}

class Front extends Contractor{
    constructor(name, role, technology){
        super(name,role) //goes up a level, inheriting
        this._tech = tech
        }

        get tech(){
            return this._tech
        }

        sayHello(){
            conmsole.log(`hello, I am ${this._name}`)
        }

}

// le tmach = new Front('the machine', )

let agencyList = [machi, simba]

for(person of agencyList){
    person.sayHello;
}