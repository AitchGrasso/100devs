//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
class streetfighter() => {
    constructor makeAFighter(health, powers, hitpoints){
        this _health = health
        this _powers = powers
        this _hitpoints = hitpoints

        function yell(){
            console.log("AHHHHJJJJ")
        }

    }
}

class MakeAFighter {
    constructor(health, powers, hitpoints) {
        this._health = health
        this._powers = powers
        this._hitpoints = hitpoints

        function yell() {
            console.log("AHHHHJJJJ")
        }

        this.throw = function hit() {
            console.log('taunt')
        }
    }
}

let chunLi = new StreetFighter