//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?

// function printTwentyOne(i, i > 22, i++){
//     for (i < 22){
//         document.querySelector(h2) = "21"
//     }
// }

// actual solution

function savage21(){
    for(let i = 1; i < 22; i++){
        console.log(21)
    }
}

savage21()

//

function savage21(){
    for(let i = 1; i < 22; i++){
        document.querySelector('#savagesays').innerText += "21"
    }
}