const questions = [
    {
        question: "What is the difference between var and let?",
        answers: [
            { text: "let is block scoped, var is global scoped", correct: true },
            { text: "var is block scoped, let is function scoped", correct: false },
            { text: "let and var are the same", correct: false },
            { text: "let is for objects, var is for arrays", correct: false }
        ]
    },

    {
        question: "Which of the following is not a type of loop in JavaScript?",
        answers: [
            { text: "for", correct: false },
            { text: "while", correct: false },
            { text: "do-while", correct: false },
            { text: "repeat", correct: true }
        ]
    },

    {
        question: "What is the difference between == and ===?",
        answers: [
            { text: "== compares types, === compares values", correct: false },
            { text: "== compares values, === compares values and types", correct: true },
            { text: "There is no difference", correct: false },
            { text: "== is for numbers, === is for strings", correct: false }
        ]
    },

    {
        question: "What is the purpose of 'this' keyword in JavaScript object?",
        answers: [
            { text: "To reference the global object", correct: false },
            { text: "To reference the parent object", correct: false },
            { text: "To reference the current object", correct: true },
            { text: "To reference the next object", correct: false }
        ]
    },

    {
        question: "What is the purpose of template literals?",
        answers: [
            { text: "To create an object", correct: false },
            { text: "To create a number", correct: false },
            { text: "To create a function", correct: false },
            { text: "To embed expressions inside string literals using a new syntax", correct: true },
        ]
    },

    {
        question: "What is the difference between let and const?",
        answers: [
            { text: "let can be reassigned, const cannot", correct: true },
            { text: "let cannot be reassigned, const can", correct: false },
            { text: "let and const are the same", correct: false },
            { text: "let is for strings, const is for numbers", correct: false }
        ]
    },

    {
        question: "What is the difference between .map() and .forEach()?",
        answers: [
            { text: ".forEach() returns a new array, .map() does not", correct: false },
            { text: ".map() and .forEach() are the same", correct: false },
            { text: ".map() returns a new array, .forEach() does not", correct: true },
            { text: ".map() is for objects, .forEach() is for arrays", correct: false }
        ]
    },

    {
        question: "What is the purpose of destructuring?",
        answers: [
            { text: "To gather data from individual variables into an array or object", correct: false },
            { text: "To sort an array", correct: false },
            { text: "To extract data from arrays or objects into individual variables", correct: true },
            { text: "To reverse an array", correct: false }
        ]
    },

    {
        question: "What is the purpose of the reduce() method?",
        answers: [
            { text: "To increase an array to multiple values", correct: false },
            { text: "To sort an array", correct: false },
            { text: "To reverse an array", correct: false },
            { text: "To reduce an array to a single value", correct: true },
        ]
    },

    {
        question: "Explain the difference between arrow functions and traditional functions in ES6.",
        answers: [
            { text: "Arrow functions are asynchronous and have own 'this', traditional functions are synchronous and don't have their own 'this'", correct: false },
            { text: "Arrow functions have a shorter syntax and do not have their own 'this' keyword. Traditional functions have a longer syntax and have their own 'this' keyword", correct: true },
            { text: "There is no difference between arrow functions and traditional functions", correct: false },
            { text: "Arrow functions are for objects, traditional functions are for arrays", correct: false }
        ]
    }
]

let questionLength = questions.length
let radios, error, questionNum = 0, userScore = 0, wrongAns = 0
const mainDiv = document.querySelector('.main')

const checkAnswer = () => {
    for (i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            let value = radios[i].value
            if (value == "true") {
                userScore += 10
                questions.splice(0, 1)
                error.classList.add('success')
                error.innerHTML = 'Your answer is correct🎉🎉'
                setTimeout(() => {
                    renderQuiz()
                }, 800)
            }
            else {
                userScore -= 10
                wrongAns++
                error.innerHTML = 'Sorry, your answer is incorrect, please try again🥲'
                setTimeout(() => {
                    error.innerHTML = ''
                }, 1200)
            }
        }
    }
}

const renderQuiz = () => {
    questionNum++
    if (questions.length <= 0) {
        quizDiv.innerHTML = ''
        let ihtml = `
        <div class = "point">
            <p class = "score">Your Score is : ${userScore}</p>
            <p class = "wrong">Wrong Answers : ${wrongAns} / ${questionLength}</p>
        </div>
        `
        quizDiv.innerHTML = ihtml
    }
    let quiz = questions[0]
    let { question, answers } = quiz
    let answer = answers.map((ans) => {
        let { text, correct } = ans
        return { text, correct }
    })
    let ihtml = `
    <section class="quizDiv">
        <p class = "questionNum">${questionNum} / ${questionLength}</p>
        <p class="question">${question}</p>

        <div class="answers">
            <div class="ans1 ansDiv">
                <input type="radio" name="userChoice" id="ans1" class="radios" value = "${answer[0].correct}" />
                <label for="ans1" class="answer">${answer[0].text}</label>
            </div>

            <div class="ans2 ansDiv">
                <input type="radio" name="userChoice" id="ans2" class="radios" value = "${answer[1].correct}" />
                <label for="ans2" class="answer">${answer[1].text}</label>
            </div>

            <div class="ans3 ansDiv">
                <input type="radio" name="userChoice" id="ans3" class="radios" value = "${answer[2].correct}" />
                <label for="ans3" class="answer">${answer[2].text}</label>
            </div>

            <div class="ans4 ansDiv">
                <input type="radio" name="userChoice" id="ans4" class="radios" value = "${answer[3].correct}" />
                <label for="ans4" class="answer">${answer[3].text}</label>
            </div>
        </div>

        <button class="submitBtn">Submit</button>
        <p class = "error"></p>
    </section>
        `
    mainDiv.innerHTML = ihtml
    quizDiv = document.querySelector('.quizDiv')
    radios = document.querySelectorAll('.radios')
    error = document.querySelector('.error')
    const submitBtn = document.querySelector('.submitBtn')
    submitBtn.addEventListener('click', checkAnswer)
}
renderQuiz()