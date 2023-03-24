// //Example fetch using pokemonapi.co
// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//   const choice = document.querySelector('input').value
//   const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }

function sumTwoSmallestNumbers(numbers) {  
  let array = []
  array = numbers
  let lowest = Math.min(...array)
  array = array.filter(e => e !== lowest)
  let secLowest = Math.min(...array)
  console.log(lowest + secLowest)
}

sumTwoSmallestNumbers([5, 8, 12, 19, 22])