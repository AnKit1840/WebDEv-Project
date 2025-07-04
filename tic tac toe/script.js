let boxes=document.querySelectorAll(".box")
let newbtn=document.querySelector(".New")
let mainmsg=document.querySelector(".mainmsg")
let draw=document.querySelector(".draw")
let msg=document.querySelector("#msg")
let drawmsg=document.querySelector("#draw-msg")
let reset=document.querySelector(".reset button")
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ]
  let turnO = true;
  let count=0;
  let winner=false

boxes.forEach((box)=>{
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText="O"
            turnO=false;
        }else{
            box.innerText="X"
            turnO=true
        }
        box.disabled=true
        count++;
        checkWinner(count)
    })
})

const checkWinner=(count)=>{
  for (let pattern of winPatterns) {
    let val1=boxes[pattern[0]].innerText
    let val2=boxes[pattern[1]].innerText
    let val3=boxes[pattern[2]].innerText
    if(val1 !="" && val2 !="" && val3 !=""){
        if(val1==val2 && val2==val3){
            showWinner(val1)
            winner=true
        }
    }
  }
  if (!winner && count === 9) {
    drawmsg.innerText="Game is Draw! , Reset to Play Again"
    draw.classList.remove("hide")
}
}


const showWinner=(winner)=>{
  msg.innerText=`Congratulations!, Winner is ${winner}`
  mainmsg.classList.remove("hide")
  disableboxes()
  
}

const disableboxes=()=>{
    for (const box of boxes) {
        box.disabled=true
    }
}


const resetgame=()=>{
    turnO="true"
    for (const box of boxes) {
        box.disabled=false
        box.innerText=""
    }
    mainmsg.classList.add("hide")
    count=0
    winner=false
}

newbtn.addEventListener("click", resetgame)
reset.addEventListener("click", resetgame)
