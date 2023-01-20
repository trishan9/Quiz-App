const questions = [
    {
        question: "What is the difference between var and let?",
        answers: [
            { text: "let is block scoped, var is function scoped", correct: true },
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
            { text: "== compares values, === compares values and types", correct: true },
            { text: "== compares types, === compares values", correct: false },
            { text: "There is no difference", correct: false },
            { text: "== is for numbers, === is for strings", correct: false }
        ]
    },
    {
        question: "What is the purpose of 'this' keyword in JavaScript object?",
        answers: [
            { text: "To reference the current object", correct: true },
            { text: "To reference the global object", correct: false },
            { text: "To reference the parent object", correct: false },
            { text: "To reference the next object", correct: false }
        ]
    },
    {
        question: "What is the purpose of template literals?",
        answers: [
            { text: "To embed expressions inside string literals using a new syntax", correct: true },
            { text: "To create an object", correct: false },
            { text: "To create a number", correct: false },
            { text: "To create a function", correct: false }
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
            { text: ".map() returns a new array, .forEach() does not", correct: true },
            { text: ".forEach() returns a new array, .map() does not", correct: false },
            { text: ".map() and .forEach() are the same", correct: false },
            { text: ".map() is for objects, .forEach() is for arrays", correct: false }
        ]
    },
    {
        question: "What is the purpose of destructuring?",
        answers: [
            { text: "To extract data from arrays or objects into individual variables", correct: true },
            { text: "To gather data from individual variables into an array or object", correct: false },
            { text: "To sort an array", correct: false },
            { text: "To reverse an array", correct: false }
        ]
    },
    {
        question: "What is the purpose of the arrow function?",
        answers: [
            { text: "To provide a shorthand syntax for creating functions", correct: true },
            { text: "To create an asynchronous function", correct: false },
            { text: "To create a synchronous function", correct: false },
            { text: "To create a private function", correct: false }
        ]
    },
    {
        question: "What is the purpose of the reduce() method?",
        answers: [
            { text: "To reduce an array to a single value", correct: true },
            { text: "To increase an array to multiple values", correct: false },
            { text: "To sort an array", correct: false },
            { text: "To reverse an array", correct: false }
        ]
    },
    {
        question: "Explain the difference between arrow functions and traditional functions in ES6.",
        answers: [
            { text: "Arrow functions have a shorter syntax and do not have their own 'this' keyword, they inherit it from the parent scope. Traditional functions have a longer syntax and have their own 'this' keyword", correct: true },
            { text: "Arrow functions are asynchronous, traditional functions are synchronous", correct: false },
            { text: "There is no difference between arrow functions and traditional functions", correct: false },
            { text: "Arrow functions are for objects, traditional functions are for arrays", correct: false }
        ]
    }

]
