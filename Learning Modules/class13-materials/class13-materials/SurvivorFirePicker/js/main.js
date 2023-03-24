
const gabler = document.querySelector('#gabler')
const owen = document.querySelector('#owen')
const jesse = document.querySelector('#jesse')
const sadOwen = document.querySelector('#sadOwen')
const sadJesse = document.querySelector('#sadJesse')
const title = document.querySelector('#title')

document.querySelector('#gabler').addEventListener('click', gablerPick)
document.querySelector('#owen').addEventListener('click', owenPick)
document.querySelector('#jesse').addEventListener('click', jessePick)

function gablerPick(){
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    let loser = getRandomInt(2)

    if (loser > 0) {
        jessePick()
        
    } else {
        owenPick()
    }
}

function owenPick(){
    jesse.classList.toggle('hidden')
    title.classList.toggle('hidden')
    document.querySelector('#final-three').innerHTML = `Final Three! \n GGs Jesse`
    sadJesse.classList.toggle('hidden')
}

function jessePick(){
    owen.classList.toggle('hidden')
    title.classList.toggle('hidden')
    document.querySelector('#final-three').innerHTML = `Final Three! \n GGs Owen`
    sadOwen.classList.toggle('hidden')
}