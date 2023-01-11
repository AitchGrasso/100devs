//Create a conditonal that checks their age
let age = document.querySelector("#danceDanceRevolution").value
//If under 16, tell them they can not drive
age.addEventListener('click', reply)

function reply(age){
    if (age < 18){
        alert("Y'all can't hate from outside the club, you can't even get in")
    }else if (age < 21 && age >= 18){
        alert("Y'all can't drink")
    }else if (age < 25 && age >= 21){
        alert("Y'all can't rent cars affordably")
    }else if (age < 30 && age >= 25){
        alert("Y'all can't rent fancy cars affordably")
    }else (age >= 30){
        alert("Y'all have nothing left to look forward too")
    };
}


//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

let para = document.querySelector("#danceDanceRevolution").value
para.addEventListener('click', reply)