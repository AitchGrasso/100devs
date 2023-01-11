//Create a function that grabs the number of snacks from the input and tells you to stop that many times

// let numberOfSnacks = document.querySelector('input').value

document.querySelector('#help').addEventListener('click', stopSnack)

function stopSnack(){

    let numberOfSnacks = Number(document.querySelector('input').value)
    document.querySelector('#stops').innerText = ""

    for (let i = 1; i <= numberOfSnacks; i++){
        document.querySelector('#stops').innerText += 'STOP!'
    }

}