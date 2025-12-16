let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");

let userScore=0, compScore=0;
let userPara=document.querySelector("#user");
let compPara=document.querySelector("#comp");

const generateRandom=()=>{
    options=["rock", "paper", "scissors"];
    let option=Math.floor(Math.random()*3);
    return options[option];
};

const drawGame=()=>{
    msg.innerHTML="Game was draw! Play Again!!"
    msg.style.backgroundColor="#000435"
};

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userPara.innerHTML=userScore;
        msg.innerHTML=`${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green"
    }
    else{
        compScore++;
        compPara.innerHTML=compScore;
        msg.innerHTML=`${compChoice} beats ${userChoice}`;  
        msg.style.backgroundColor="red"
    }
};



const playGame=(userChoice)=>{
    const compChoice=generateRandom();
    // console.log(compChoice);
    if(userChoice==compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock" && compChoice=="paper")
            userWin=false;
        else if(userChoice=="paper" && compChoice=="scissors")
            userWin=false;
        else if(userChoice=="scissors" && compChoice=="rock")
            userWin=false;

        showWinner(userWin, userChoice, compChoice);
    }

};

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});