const h1 = document.querySelector(".instructor");
const btn = document.querySelector(".btn");

const dice1One = document.querySelector(".dice1.one");
const dice1Two = document.querySelector(".dice1.two");
const dice1Three = document.querySelector(".dice1.three");
const dice1Four = document.querySelector(".dice1.four");
const dice1Five = document.querySelector(".dice1.five");
const dice1Six = document.querySelector(".dice1.six");
const dice1Seven = document.querySelector(".dice1.seven");

const dice2One = document.querySelector(".dice2.one");
const dice2Two = document.querySelector(".dice2.two");
const dice2Three = document.querySelector(".dice2.three");
const dice2Four = document.querySelector(".dice2.four");
const dice2Five = document.querySelector(".dice2.five");
const dice2Six = document.querySelector(".dice2.six");
const dice2Seven = document.querySelector(".dice2.seven");

var dice1Num;
var dice2Num;

function throwDie(){
    dice1Num = Math.floor(Math.random() * 6 + 1);console.log("dice1: " + dice1Num);
    dice2Num = Math.floor(Math.random() * 6 + 1);console.log("dice2: " + dice2Num);
    transform();
    h1.textContent = judge();
}

function judge(){
    if(dice1Num === dice2Num){
        return "It is a draw";
    }else if(dice1Num > dice2Num){
        return "Player 1 Wins!";
    }else {
        return "Player 2 Wins!";
    }
}

function hide(items){
    console.log("hiding");
    for (item of items){
        item.classList.add("hidden");
    }
}

function transform(){
    console.log("Entered to");
    if(dice1Num ===1){
        hide([dice1One,dice1Two, dice1Three, dice1Five, dice1Six, dice1Seven]);
    }else if(dice1Num === 2){
        hide([dice1One,dice1Four, dice1Three, dice1Five, dice1Seven]);
    }else if(dice1Num === 3){
        hide([dice1One,dice1Three, dice1Five, dice1Seven]);
    }else if(dice1Num === 4){
        hide([dice1Four, dice1Three, dice1Five]);
    }else if(dice1Num === 5){
        hide([dice1Three, dice1Five]);
    }else if(dice1Num === 6){
        hide([dice1Four]);
    }

    if(dice2Num === 1){
        hide([dice2One, dice2Two, dice2Three, dice2Five, dice2Six, dice2Seven]);
    }else if(dice2Num === 2){
        hide([dice2One,dice2Four, dice2Three, dice2Five, dice2Seven]);
    }else if(dice2Num === 3){
        hide([dice2One,dice2Three, dice2Five, dice2Seven]);
    }else if(dice2Num === 4){
        hide([dice2Four, dice2Three, dice2Five]);
    }else if(dice2Num === 5){
        hide([ dice2Three, dice2Five]);
    }else if(dice2Num === 6){
        hide([dice2Four]);
    }
}

btn.addEventListener("click", () =>{throwDie()})
