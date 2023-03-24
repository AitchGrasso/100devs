document.querySelector('#clickMe').addEventListener('click', makeReq)
const result = document.querySelector('.result')



async function makeReq(){

  const number = document.querySelector("#Number").value;
  const res = await fetch(`/api?number=${number}`)
  const data = await res.json()

  console.log(data);
  document.querySelector(".guess > h2").textContent = data.status
  result.classList.remove('hidden')
  // result.stle.display == "none" ? "block" : "none";
  result.textContent = data.number
  
}