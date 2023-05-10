const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function(){
        console.log('draw');
    } 
};

//NOTE: object literal not helpful if more than one methods

//Factory function**********************************************************************
//What if a developer forgets a new argument when making constructor functions?

function createCircle() {
    return{
        radium,
        draw: function() {
            console.log('draw');
        }
    } 
};

const circleTwo = createCircle(1);
circle.draw();

//Constructor Function *******************************************************************
//C# or Java

//uppercase
class Circle {
    constructor(radius) {
        this.radius = radius;
        this.draw = function () {
            console.log('draw');
        };
        //this is a referance to the object that is exicuting this line of code
    }
}

const another = new Circle(1)
//never creat a global variable