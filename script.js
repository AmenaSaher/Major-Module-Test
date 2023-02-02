const yourChoice = ['rock','paper','scissor']
const userChoice = document.getElementById('body')
const pcChoice = document.getElementById('pc-choice')
const result = document.createElement("h1")
const yourScoreSpan = document.getElementById("your-score")
const tryyAgain = document.createElement("h1")
const div = document.getElementsByClassName('img-div')

// console.log(tryyAgain)
let yourScore = 0

function getPcChoice(){
    const randomNumber = yourChoice[Math.floor(Math.random() * 3)]

    if(randomNumber === 'scissor'){
        pcChoice.src = `/icons/scissor.png`
        pcChoice.dataset.choice =  `scissor`
    }
    if(randomNumber === 'rock'){
        pcChoice.src = `icons/rock.png`
        pcChoice.dataset.choice =  `rock`
    }
    if(randomNumber === 'paper'){
        pcChoice.src = `icons/paper.png`
        pcChoice.dataset.choice =  `paper`
    }
    //  console.log(pcChoice.dataset.choice)
    getResult()
}

function getResult(){ 
    if(pcChoice.dataset.choice === userChoice.dataset.choice){
        result.innerHTML = '<div>Try again</div>'
        document.body.appendChild(result);
        tryyAgain.innerHTML = ``
        document.body.appendChild(tryyAgain);
        tryAgain()
        pcChoice.src = `icons/${pcChoice.dataset.choice}.png`
        
    }
    else if(pcChoice.dataset.choice === 'rock' && userChoice.dataset.choice === 'paper'){
        result.innerHTML = '<div class="win-lose">YOU WIN AGAINST PC</div>'
        document.body.appendChild(result);
        tryyAgain.innerHTML = `<h1 id="try-again" onclick="tryAgain()">Play again</h1>`
        document.body.appendChild(tryyAgain);
        yourScore++
        yourScoreSpan.innerHTML = yourScore
    }
    else if(pcChoice.dataset.choice === 'rock' && userChoice.dataset.choice === 'scissor'){
        result.innerHTML = '<div class="win-lose">YOU LOST AGAINST PC</div>'
        document.body.appendChild(result);
        tryyAgain.innerHTML = `<h1 id="try-again" onclick="tryAgain()">Play again</h1>`
        document.body.appendChild(tryyAgain);

    }
    else if(pcChoice.dataset.choice === 'scissor' && userChoice.dataset.choice === 'paper'){
        result.innerHTML = '<div class="win-lose">YOU LOST AGAINST PC</div>'
        document.body.appendChild(result);
        tryyAgain.innerHTML = `<h1 id="try-again" onclick="tryAgain()">Play again</h1>`
        document.body.appendChild(tryyAgain);
    }
    else if(pcChoice.dataset.choice === 'scissor' && userChoice.dataset.choice === 'rock'){
        result.innerHTML = '<div class="win-lose">YOU WIN AGAINST PC</div>'
        document.body.appendChild(result);
        tryyAgain.innerHTML = `<h1 id="try-again" onclick="tryAgain()">Play again</h1>`
        document.body.appendChild(tryyAgain);
        yourScore++
        yourScoreSpan.innerHTML = yourScore
    }
    else if(pcChoice.dataset.choice === 'paper' && userChoice.dataset.choice === 'rock'){
        result.innerHTML = '<div class="win-lose">YOU LOST AGAINST PC</div>'
        tryyAgain.innerHTML = `<h1 id="try-again" onclick="tryAgain()">Play again</h1>`
        document.body.appendChild(result);
        document.body.appendChild(tryyAgain);
    }
    else if(pcChoice.dataset.choice === 'paper' && userChoice.dataset.choice === 'scissor'){
        result.innerHTML = '<div class="win-lose">YOU WIN AGAINST PC</div>'
        document.body.appendChild(result);
        tryyAgain.innerHTML = `<h1 id="try-again" onclick="tryAgain()">Play again</h1>`
        document.body.appendChild(tryyAgain);

        yourScore++
        yourScoreSpan.innerHTML = yourScore
    }
}

function generateChoice(x){

    userChoice.innerHTML = 
    `<div>
    <img class="user-div"
    src="icons/${x}.png" alt="">
    <div>
    </div>
    </div>`
    userChoice.dataset.choice = `${x}`
    
    getPcChoice(x)
    
    // console.log(userChoice.dataset.choice)
}


function tryAgain(){
    userChoice.innerHTML = 
    `<div id="body">
    <img class="user-images" onclick="generateChoice('scissor')"   src="icons/scissor.png" alt="">
    <img class="user-images" onclick="generateChoice('rock')"  src="icons/rock.png" alt="">
    <img class="user-images" onclick="generateChoice('paper')"  src="icons/paper.png" alt="">
    </div>
    `
    pcChoice.src = ""
    
    tryyAgain.innerHTML = ``
    if(pcChoice.dataset.choice === userChoice.dataset.choice){
        result.innerHTML = '<div class="try_again">Try again</div>'
    pcChoice.dataset.choice = ``

    }
    else {
        result.innerHTML = ''
    }
    

}