const BASE_URL =
"https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".drop-down select")
const btn=document.querySelector("form button")
const fromCurr=document.querySelector(".from select")
const toCurr=document.querySelector(".to select")

for (const select of dropdowns) {
    for (const currCode in countryList) {
        let newOption=document.createElement("option");
        newOption.innerText= currCode;
        newOption.value= currCode;
        select.append(newOption);
        if(select.name==="from" && currCode==="USD"){
            newOption.selected="selected"
        }
        else if(select.name==="to" && currCode==="INR"){
            newOption.selected="selected"
        }
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target)
    })
}

function updateFlag(element){
        let currCode=element.value
        console.log(currCode)
        let countryCode = countryList[currCode]
        let newsrc=`https://flagsapi.com/${countryCode}/shiny/64.png`
        let img=element.parentElement.querySelector("img")
        img.src=newsrc;
}

btn.addEventListener("click",async(evt)=>{
     evt.preventDefault()
     let amount=document.querySelector(".amount input")
     let amountValue=amount.value
     if(amountValue==""||amountValue<1){
        amountValue=1
        amount.value="1"
     }
    //  console.log(fromCurr.value, toCurr.value)
     const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;

     let response=await fetch(URL)
     console.log(response)
     let data = await response.json();
     let rate = data[toCurr.value.toLowerCase()];
   
     let finalAmount = amountValue * rate;
     info.innerText = `${amountValue} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`
   
})