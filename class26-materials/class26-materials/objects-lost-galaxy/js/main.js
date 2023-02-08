//Create a pizza object that has four properties and three methods
let pizza = {}

pizza.brand = "dominos"
pizza.size = "Lg"
pizza.toppings = ["pineapple", "canadian bacon"]
pizza.cheese = "mozz"

pizza.estimatedDelivery = function(){
    console.log('calculating...')
}

function MakePizza(pizzaBrand, pizzaSize){
    
    this.brand = "dominos"
    this.size = "Lg"
    pizza.toppings = ["pineapple", "canadian bacon"]
    pizza.cheese = "mozz"
}