var userOption = ""
var computerOption = 0
function scissor(){
    {userOption = "scissors"}
    document.getElementById("p1").innerHTML = "User Choice: " +userOption

mainFunction()
}
function rock(){
    {userOption = "rock"}
    document.getElementById("p1").innerHTML = "User Choice: " +userOption

mainFunction()
}
function paper(){
    {userOption = "paper"}
    document.getElementById("p1").innerHTML = "User Choice: " +userOption

mainFunction()
}

function readScore(){
    let ele = document.getElementById("Uscore")
    ele.innerHTML = "User Score - " +userScore
}
function readScoreC(){
    let ele = document.getElementById("Cscore")
    ele.innerHTML = "Computer Score - " +computerScore
}
function readScoreT(){
    let ele = document.getElementById("b")
    ele.innerHTML = "Ties - " +tieScore
}
    let computerScore = 0
    let userScore = 0
    let tieScore = 0
    function mainFunction(){
        computerOption = Math.floor(Math.random() * 3);
        document.getElementById("p2").innerHTML = "Computer Choice: " + computerTranslate(computerOption)
console.log(computerOption, userOption)
    if((userOption==="paper") && (computerOption== "0")){
    userScore ++
    readScore()
    }
    else if((userOption=== "paper") && (computerOption=="1")){
    tieScore ++
    let ele = document.getElementById("b")
        ele.innerHTML = "Ties- " +tieScore
    }
    else if((userOption=== "paper") && (computerOption=="2")){
    computerScore ++
    readScoreC()
    }
    else if((userOption==="scissors") && (computerOption=="0")){
    computerScore ++
    readScoreC()
    }
    else if((userOption==="scissors") && (computerOption=="1")){
    userScore ++ 
    readScore()
    }
    else if((userOption=== "scissors") && (computerOption=="2")){
    tieScore ++
    let ele = document.getElementById("b")
    ele.innerHTML = "Ties- " +tieScore
    }
    else if((userOption==="rock") && (computerOption=="0")){
    tieScore++
    let ele = document.getElementById("b")
        ele.innerHTML = "Ties- " +tieScore
    }
    else if((userOption==="rock") && (computerOption=="1")){
    computerScore ++
    readScoreC()
    }
    else if((userOption==="rock") && (computerOption=="2")){
    userScore ++
    readScore()
    }
}

function computerTranslate(input)
{
    if (input == 0)
    {return("Rock")}

    else if (input == 1)
    {return("Paper")}

    else
    {return "Scissor"}
}