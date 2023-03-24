//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch, checkRemove)

function checkRemove(){
    const element = document.li
    console.log(elements)
    element.remove()
}


function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
            data.subclasses.forEach(obj => {
                

                console.log(obj.name);
                //create an li
                const li = document.createElement('li')
                //add text to li
                li.textContent = []
                
                li.textContent = obj.name
                //append li to the ul
                document.querySelector('ul').appendChild(li)

                if(ul.hasChildNodes()){
                    ul.innerText = "";
                }

            });
        // document.querySelector('h3').innerHTML = data.classes.name
        // document.querySelector('h4').innerText = data.innerText.name
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}



// document.querySelector('button').addEventListener('click', checkRemove)

