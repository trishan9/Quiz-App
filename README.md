# Quiz App

This program is a multiple choice quiz app. It uses JavaScript to dynamically render questions and possible answers, and allows the user to select one answer. The program then checks whether the user's answer is correct and updates the user's score accordingly. This Quiz App is a fun and interactive way to test your knowledge on various topics.

## Features

- Dynamic question rendering
- User score tracking
- Wrong answer count tracking
- Feedback on correct/incorrect answers

## Functions

- **renderQuiz()**: Renders the current question, possible answers, and a submit button. This function is called initially to render the first question and is also called every time the user submits correct answer.
- **checkAnswer()**: Checks the user's selected answer and compares it to the correct answer. If the answer is correct, the user's score is incremented and the next question is rendered. If the answer is incorrect, the user's score is decremented and the wrong answer count is incremented.
