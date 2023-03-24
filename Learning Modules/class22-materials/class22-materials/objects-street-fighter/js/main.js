//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
//Create a mouse object that has four properties and three methods
function MakeFighter(hitPoints, defensePoints, speedNumber, specialPower){
    this.hit = hitPoints
    this.defense = defensePoints
    this.speed = speedNumber
    this.special = specialPower
    this.sound = function(){
        console.log('IM GONNA KILL YOU')
    }
    this.fighterCall = function(){
        console.log('Yes, I have ${this.special} powers!')
    }
}
//template/blueprint

let madamePush = new MakeFighter(200, 100, 2, 'magic push')

//makes a new object