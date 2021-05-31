// // buy price
const coinForm = document.getElementById("coin-form") 
const coinInput = document.getElementById("coin-input") 
coinForm.addEventListener("submit", (e) => {
   e.preventDefault()
   e.target.reset
coin = coinInput.value || "BTC"
const BASE_URL = `https://api.coinbase.com/v2/prices/${coin}-USD/buy`

 fetch(BASE_URL)
    .then(res => res.json()) 
     .then(data => {
       let dataArray = data.data
      grabData(dataArray)
  })
  coinInput.value = ''
})

function grabData(data){
    const coinContainer = document.getElementById("coin-list")
    const liTag = document.createElement('li')
    const pTag = document.createElement('p')
    pTag.innerText = data.base
    const pTag1 = document.createElement('p')
    pTag1.innerText = data.amount
    const pTag2 = document.createElement('p')
    pTag2.innerText = data.currency
    const pTag3 = document.createElement('p')
    let today = new Date().toISOString().slice(0, 10)
    pTag3.innerText = today
    liTag.append(pTag, pTag3, pTag1, pTag2)
    if(coinContainer.childElementCount >= 3) {
      coinContainer.innerHTML =  ''
    } else {
      coinContainer.appendChild(liTag)
    }
    coinContainer.appendChild(liTag)
}

// currency conversion USD to x
const BASE_URL3 = `https://api.coinbase.com/v2/currencies`
randomNum = Math.floor(Math.random() * 166)
fetch(BASE_URL3)
  .then(res => res.json())
   .then(data => {
     
     
     data.data.forEach(myList)
   })
function myList(data){
  const list = document.getElementById("datalist")
  const option1 = document.createElement('option')
  option1.innerHTML = data.id
   list.appendChild(option1)
   }
const bigList = document.getElementById("fetchList")

 bigList.addEventListener("change", (e) => {
   oneOp = bigList.value
   const BASE_URL4 = `https://api.coinbase.com/v2/exchange-rates?currency=${oneOp}`
   fetch(BASE_URL4)
      .then(res => res.json())
        .then(data => {
          
          let oneBig = data.data
          grabOneB(oneBig)
          e.target.reset
        })
        oneOp = bigList.value

 })
 function grabOneB(oneBig){
   const lastList = document.getElementById("last-list")
   const lastLi = document.createElement('li')
   const pTagLast = document.createElement('p')
   pTagLast.innerText = oneBig.rates["USD"]
   lastLi.append(pTagLast)
   lastList.appendChild(lastLi)
   
 }

//Spot Price

const spotForm = document.getElementById("spot-form")
const coinSearch = document.getElementById("coin")
const dateInput = document.getElementById("date-input")
spotForm.addEventListener("submit", (e) => {
  e.preventDefault()

coinSelect = coinSearch.value || "BTC"
spotTime = dateInput.value || "1989-02-09"
    //YYYY-MM-DD
 const BASE_URL2 = `https://api.coinbase.com/v2/prices/${coinSelect}-USD/spot?date=${spotTime}`
    
fetch(BASE_URL2)
    .then(res => res.json()) 
      .then(data => {
        let spData = data.data
      grabSpot(spData)
     })
     coinSearch.value = ''
     dateInput.value = ''
  })
function grabSpot(data){
    const spotContainer = document.getElementById("spot-list")
    const liTagSpot = document.createElement('li')
      const pTagSpot = document.createElement('p')
      pTagSpot.innerText = data.base
        const pTagSpot1 = document.createElement('p')
        pTagSpot1.innerText = data.amount
          const pTagSpot2 = document.createElement('p')
          pTagSpot2.innerText = data.currency
            const pTagSpot3 = document.createElement('p')
            pTagSpot3.innerText = spotTime
    liTagSpot.append(pTagSpot, pTagSpot3, pTagSpot2, pTagSpot1)
  if(spotContainer.childElementCount >= 3) {
      spotContainer.innerHTML =  ''
    } else {
      spotContainer.appendChild(liTagSpot)
    }
    spotContainer.appendChild(liTagSpot)
    console.log(spotContainer.childElementCount)
}