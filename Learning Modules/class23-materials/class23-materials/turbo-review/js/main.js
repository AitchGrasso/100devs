// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question

let string = 'a sentance';
alert(string.contains('?'))

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

let multiWord = 'string string and another string jr.dev'
print(multiWord.replace('jr. dev', 'software engineer'))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function game(){
    let shoot = Math.floor(Math.random()*3) + 1
    if (shoot == 1){
        return 'rock'
    }else if(shoot == 2){
        return 'paper'
    }else{
        return 'scissors'
    }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function moreGame(pick){
    let robot = Math.floor(Math.random()*3) + 1
    if (robot == 1 && pick == 'rock' || robot == 2 && pick == 'paper' || robot == 3 && pick == 'scissors' ){
        return 'draw'
    }else if(robot == 1 && pick == paper || robot == 2 && pick == 'scissors' || robot == 3 && pick == 'rock'){
        return 'win'
    }else{
        return 'lose'
    }
}


//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function choices(choiceArray,game){
    console.log(game.repeat((choiceArray.length)))

}
