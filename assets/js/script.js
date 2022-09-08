var quiz = document.getElementById('quiz');
var reults = document.getElementById('results');
var submitButton 

var quizQuestions = [
    {
        question: "JavaScript is an ______ language?",
        answers: {
            A: 'Object-Oriented',
            B: 'Object-Based',
            C: 'Procedural',
            D: 'None of the Above'
        },
        correctAnswer: 'A'
    },

    {
        question: "Which of the following keywords is used to define a variable in JavaScript?",
        answers: {
            A: 'var',
            B: 'let',
            C: 'Both 1 and 2',
            D: 'None of the Above'
        },
        correctAnswer: 'C'
    },

    {
        question: "Which is the following methods is used to access HTML elements using JavaScript?",
        answers: {
            A: 'getElementById()',
            B: 'getElementByClassName()',
            C: 'Both 1 and 2',
            D: 'None of the Above'
        },
        correctAnswer: 'C'
    },

    {
        question: "Upon encountering empty statements, what does the JavaScript interpreter do?",
        answers: {
            A: 'throws an error',
            B: 'ignores the statements',
            C: 'gives a warning',
            D: 'None of the Above'
        },
        correctAnswer: 'B'
    },

    {
        question: "Which of the following of the following methods can be used to display data in some form using JavaScript?",
        answers: {
            A: 'document.write()',
            B: 'console.log()',
            C: 'window.alert()',
            D: 'All of the Above'
        },
        correctAnswer: 'D'
    },

    {
        question: "How can a data type be declared to be a constant type?",
        answers: {
            A: 'const',
            B: 'let',
            C: 'var',
            D: 'constatnt'
        },
        correctAnswer: 'A'
    },
];

function generateQuiz(questions, quiz, results, submitButton) {
    function showQuestions (questions, quiz) {
        var output = [];
        var answers;

        for(var i=0; i<questions.length; i++){
            answers = [];

        for(letter in questions[i].answers){
            answers.push(
                '<label>'
                + '<input type="button" name="question'+i+'" value="'+letter+'">'
                + letter + ': '
                + questions[i].answers[letter]
                + '</label>'
            );
        }

        }

    }
    function showResults(questions, quiz, results) {
        var answers = quiz.querySelectorAll('.answers');
        var userAnswer = '';
        var numCorrect = 0;

        for(var i=0; i<questions.length; i++){
            userAnswer = (answers[i].querySelector('input[neme=question'+i+']:clicked')||{}).value;

            if(userAnswer===questions[i].correctAnswer){
                numCorrect++;
                answer[i].style.color = 'green';
            }

            else{
                answer.[i].style.color = 'red';
            }
        }

        results.innerHTML = numCorrect + ' out of ' + questions.length;

    }
    showQuestions(question, quiz);

    submitButton.onclick = function(){
        showResults(questions, quiz, results);
    }
}