//Example fetch using pokemonapi.co
let deckId = ''

document.querySelector('button').addEventListener('click', drawTwo)

fetch(`https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        deckId = data.deck_id

      })

      .catch(err => {
          console.log(`error ${err}`)
      });

function drawTwo(){

  const url = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#player1').src = data.cards[0].image
        document.querySelector('#player2').src = data.cards[1].image

        let player1 = conversion(data.cards[0].value)
        let player2 = conversion(data.cards[1].value)                                                                   

        console.log(player1)
        console.log(player2)

        if(Number(player1) > Number(player2)){
          console.log('player 1 is a winner')
        }else if(Number(player1) < Number(player2)){ 
          console.log('player 2 is a winner')
        }else if(Number(player1) == Number(player2)){
          console.log('WAR')
          goToWar()
        }else{
          console.log('something weird happened')
        }

        // goToWar()
     })

      .catch(err => {
          console.log(`error ${err}`)
      });

}

function conversion(card){
  if(card == 'JACK'){
    return 10.1
  }else if(card == 'QUEEN'){
    return 10.2
  }else if(card == 'KING'){
    return 10.3
  }else if(card == 'ACE'){
    return 11
  }else{
    return Number(card)
  }
}



function goToWar(){

  let oneWarCard
  let twoWarCard  

  const url = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=4`

  fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    oneWarCard = conversion(data.cards[3].value)
  //draw 4 cards each, last card value
  })

  fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    twoWarCard = conversion(data.cards[3].value)
  //draw 4 cards each, last card value
  })

  fight(oneWarCard,twoWarCard)
  console.log(fight(oneWarCard,twoWarCard))

}

function fight(player1,player2){
    if(player1 > player2){
      return console.log('player 1 is a winner of WAR')
    }else if(player1 < player2){ 
      return console.log('player 2 is a winner of WAR')
    // }else(player1 == player2){
    //   drawTwo()
    //   console.log('War again???')
    // };
}}




//local storage
