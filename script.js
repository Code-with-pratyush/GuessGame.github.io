'use strict';
//We have to taake value from the input
//At first we have change the message display according to the entered number
//Adding game logic 

const btn = document.querySelector('.btn');

let guess = document.querySelector('.dialog');
let message  = document.querySelector('.message p');
let symbol = document.querySelector('.symbol h2');
let body  = document.querySelector('.container');
let score  = document.querySelector('.right-container h4:nth-child(1)');
let i=20;

const number=(Math.trunc(Math.random()*20));

btn.addEventListener('click',()=>{
    const val = Math.floor(guess.value);
    console.log(val,typeof val);
    
    if(val == false)//means there is no value in the dialog box
    {
        message.textContent = "Please enter a number";
    }else if(val>20 || val<0){
        message.textContent = "Please Select value between the given range";
    }else{
        message.textContent = "Please wait.....checking";
        symbol.textContent = val;
        const time = setTimeout(variation,1000);
        function variation(){
            if(number == val){
                message.textContent = "woo! You guessed right number";
                body.style.backgroundColor = "green";
                i++;
                score.textContent = `Score: ${i}`;
            }else if(number > val){
                if(i>1){
                    message.textContent = `Sorry!  The correct number is ${number}`;
                    body.style.backgroundColor = "red";
                    i--;
                    score.textContent = `Score: ${i}`;
                }else{
                    message.textContent = `Sorry! You lost The game`;
                    body.style.backgroundColor = "red";
                    i=0;
                    score.textContent = `Score: ${i}`;
                }
            }
            else{
                if(i>1){
                    message.textContent =`Sorry!  The correct nummber is ${number}`;
                    body.style.backgroundColor = "red";
                    i--;
                    score.textContent = `Score: ${i}`;
                }else{
                    message.textContent =`Sorry! You Lost the game`;
                    body.style.backgroundColor = "red";
                    i=0;
                    score.textContent = `Score: ${i}`;
                }
            }
        }
    }
    
});