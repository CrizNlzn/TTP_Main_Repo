let randomNum = parseInt((Math.random()*100)+1);


//want to make a submit button 
const submit = document.querySelector('#Checkbox');
const inputUser = document.querySelector('#Answerbox');
const attempts = document.querySelector('.PrevGuess');
const left = document.querySelector('.PrevAnswer');
// const startOver = document.querySelector('.result');
const hiLow = document.querySelector('.HiLow');


const p = document.createElement('p');

let prevAttempts = [];
let numGuesses = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function(e){
        e.preventDefault();
    const sub = parseInt(inputUser.value);
    valAnswer(sub);
    });
}

// valAnswer function
function valAnswer(sub) {

if (isNaN(sub)) {
        alert("Nice try, answer again");
} 
        else if (sub < 1) {
            alert("Please enter a number bigger than 1");
        }
            else if (sub > 100) {
                alert("Whoa, Your out of range, try again");
            }
                else {
                    prevAttempts.push(sub);
                        if (numGuesses === 11) {
                            displayGuess(sub);
                                displayMessage(`GGs, the random was ${randomNum}`);
                                endGame();
                        } else {
                            displayGuess(sub);
                            checkGuess(sub);
                        }
                }
}

function checkGuess(sub) {
    if (sub === randomNum) {
        displayMessage(`Wow, you got it`);
        endGame();
    }
    else if (sub < randomNum) {
        displayMessage(`Too low, lol try again`);
    }
        else if (sub > randomNum) {
            displayMessage(`really high, go lower`);
        }
}

function displayGuess(sub) {
    inputUser.value = '';
    attempts.innerHTML += `${sub} `;
    numGuesses++
    left.innerHTML = `${11 - numGuesses} `;
}

function displayMessage(message) {
    hiLow.innerHTML = `<h1>${message}</h1>`
}

// function endGame() {
//     userInput.value = '';
//     userInput.setAttribute('disabled', '');
//     p.classList.add('button');
//     p.innerHTML = `<h1 id="newGame">Start New Game</h1>`

//     startOver.appendChild(p);
//     playGame = false;
//     newGame();
// }


// function newGame(){
//     const newGameButton = document.querySelector('#newGame');
//     newGameButton.addEventListener('click', function(){
//         randomNum = parseInt((Math.random()*100)+1);
//         prevAttempts =  [];
//         numGuesses = 1;
//         attempts.innerHTML = '';
//         hiLow.innerHTML = '';
//         left.innerHTML = `${11 - numGuesses} `;
//         inputUser.removeAttribute('disabled');
//         startOver.removeChild(p);
//         playGame = true;
//     })
// }
