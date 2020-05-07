const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionCounterText = document.getElementById('questionCounter')
const scoreText = document.getElementById('score')


const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')


const correctScore = 1;
const totalQuestion = 5;



let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    questionCounterText.innerText = currentQuestionIndex + "/" + totalQuestion;
    scoreText.innerText = correctScore * currentQuestionIndex
    setNextQuestion()
})


function startGame() {

    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 1
    score = 0
    questionContainerElement.classList.remove('hide')
    questionCounterText.innerText = currentQuestionIndex + "/" + totalQuestion;
    setNextQuestion()

}



function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
    scoreText.innerText
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct

        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })

}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}


function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }

}



function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}




const questions = [{
        question: 'Who was the winner of the 2005/2006 UEFA Champions League?',
        answers: [
            { text: 'Liverpool', correct: false },
            { text: 'AC- Milan', correct: false },
            { text: 'Barcelona', correct: true },
            { text: 'Porto', correct: false }
        ]
    },
    {
        question: 'The index case of Covid-19 in Nigeria was reported on what date?',
        answers: [
            { text: '11/05/2020', correct: false },
            { text: '27/02/2020', correct: true },
            { text: '23/03/2020', correct: false },
            { text: '09/04/2020', correct: false }
        ]
    },
    {
        question: 'The popular hit song "Let me love you" was recorded by which of these artists ',
        answers: [
            { text: 'John Legend', correct: false },
            { text: 'Nick Jonas', correct: false },
            { text: 'Trey Song', correct: false },
            { text: 'Mario', correct: true }
        ]
    },
    {
        question: 'Who is popularly referred to as "Baba isale awon boys and girls"?',
        answers: [
            { text: 'Mark Essien', correct: false },
            { text: 'Jeffrey Ogah', correct: false },
            { text: 'Seyi Onifade', correct: true },
            { text: 'Emmanuel Owojori', correct: false }
        ]
    },
    {
        question: 'How many types of heading does an HTML contain',
        answers: [
            { text: '6', correct: true },
            { text: '4', correct: false },
            { text: '5', correct: false },
            { text: '7', correct: false }
        ]
    }
]