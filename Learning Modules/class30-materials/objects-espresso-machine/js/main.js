//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class EspressoMachine{
    constructor(grindSettings, waterAmount, milkSteamTemp, numberShots){
        this.grind = grindSettings //peramiters
        this.water = waterAmount
        this.milk = milkSteamTemp
        this.shot = numberShots
    }
    burn(){
        alert("Ow! I got burned by the milk! It's currently at ${EspressoMachine.milk}")
    }
    art(){
        InputEvent:("What type of art do you want?")
    }
    }