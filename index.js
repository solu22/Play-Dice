

const roll= ()=>{
    const rand1= Math.floor(Math.random()*6)+1;
    const diceimage1= "images/dice" + rand1 + ".png";
    const player1= document.querySelectorAll('img')[0];
    const dice1= player1.setAttribute('src',diceimage1);

    const rand2= Math.floor(Math.random()*6)+1;
    const diceimage2= "images/dice" + rand2 + ".png";
    const player2= document.querySelectorAll('img')[1];
    const dice2= player2.setAttribute('src', diceimage2);

    if(rand1==rand2){
        document.querySelector('h1').innerHTML="The game is draw";
    }
    else if(rand1> rand2){
        document.querySelector('h1').innerHTML="Player 1 is winner🏁"
    }
    else{
        document.querySelector('h1').innerHTML="Player2 is winner🏁";
    }
}
