let total = 0

document.querySelector('#pumpkin').addEventListener('click', makeZero)
document.querySelector('#dominosPizza').addEventListener('click', jumanji)
document.querySelector('#zebra').addEventListener('click', add9)
document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2)
document.querySelector('#plop').addEventListener('click', remove)

function makeZero() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}

function jumanji() {
  total = total + 3
  document.querySelector('#placeToPutResult').innerText = total
}

function add9() {
  total = total + 9
  document.querySelector('#placeToPutResult').innerText = total
}

function sub2() {
  total = total - 2
  document.querySelector('#placeToPutResult').innerText = total
}

function remove() {
  total = total - 1262
  document.querySelector('#placeToPutResult').innerText = total
}

// document.querySelector(".innertoggle").addEventListener('click',imgtoggle)

// function imgtoggle() {
//   document.querySelector("img").innerHTML = "Heres a title" + "<img src='th-935226802.jpg'>";
//   // document.querySelector("img").toggleAttribute("hidden"); 
// } 



const img = document.querySelector('.img')

document.querySelector('.innertoggle').addEventListener('click' , imgRun)

function imgRun() {
  img.classList.toggle("hidden"); 
}



let key = 0;


document.querySelector(".test_button").addEventListener('click',addhtml);
function addhtml(){
  key+=1;
  if(key%2==0) document.querySelector(".output").innerHTML= `<h2> Key is ${key} </h2>\n<img src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Facidcow.com%2Fpics%2F20131001%2Fdog_03.jpg&f=1&nofb=1&ipt=aa6b6ac415d065aca322d99570df055821ffe90934eac6dc1bd2f973d825a288&ipo=images'>`;
  else document.querySelector(".output").innerHTML= `<h2> Key is ${key}</h2>\n<img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.GCMcYNnn_pBOGEs656FFDQEkEs%26pid%3DApi&f=1&ipt=d8b2ab7e2fa728fde9cba6fa8204cc7b64d116e18549f44a92d31f34bf77e45b&ipo=images'>`;
}