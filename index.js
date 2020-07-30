document.addEventListener("DOMContentLoaded",()=>{
    const submit=document.getElementById("submit-btn");
    const msg=document.getElementById("msg");
    const lives=document.getElementById("lives");

    var randomNum=Math.round(Math.random()*100);
    var livesNum=10;
    var msgData;
    submit.onclick=()=>{
        let numInput=Number(document.getElementById("input").value);
        livesNum--;
        if(numInput===randomNum){
            location.href="./win.html";
        }
        else if(livesNum===0){
            location.href="./lose.html";
        }
        else if(numInput>randomNum){
            msgData=`OOP's ! your guess is too high, You have ${livesNum} Remaining`;
        }
        else if(numInput<randomNum){
            msgData=`OOP's ! your guess is too low, You have ${livesNum} Remaining`;
        }
        msg.style.display="inherit";
        msg.innerHTML=msgData;
        lives.innerHTML=livesNum;
    }
})