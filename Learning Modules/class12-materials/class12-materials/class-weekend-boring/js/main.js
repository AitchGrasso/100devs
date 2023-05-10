document.querySelector('#check').addEventListener('click', check)

function check() {

  let day = document.querySelector('#day').value
  day = day.toUpperCase()
  console.log(day)
    if (day === 'TUESDAY' || day === 'THURSDAY'){
      document.querySelector('#placeToSee').innerText = 'Today is a Class day' 
    }
    else if (day === 'SATURDAY' || day === 'SUNDAY') {
      document.querySelector('#placeToSee').innerText = 'It is the weekend'
      
    } else {
      document.querySelector('#placeToSee').innerText = 'Boooooring'
    }

  
  //Conditionals go here


}
