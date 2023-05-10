//Create a mouse object that has four properties and three methods
function MakeMouse(mouseNose, mouseEars, mouseTail, mouseFur){
    this.nose = mouseNose
    this.ears = mouseEars
    this.tail = mouseTail
    this.fur = mouseFur
    this.sound = function(){
        alert('MEEP')
    }
    this.weird = function(){
        alert('Yes, I have ${this.tail} tails!')
    }
}
//template/blueprint

let normalMouse = new MakeMouse('small', 'two', 'one', 'fluffy')

//makes a new object

let weirdMousr = new MakeMouse('big', 'five',)