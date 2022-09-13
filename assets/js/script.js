var quiz = document.getElementById('quiz');
var question = document.getElementById('question');
var answers = document.getElementById('answers'); 
var submitButton = document.getElementById('start');
//var timerElement = docuument.querySelctor(".timer-count");


var quizQuestions = [
    {
        question: "JavaScript is an ______ language?",
        answers: {
            A: 'Object-Oriented',
            B: 'Object-Based',
            C: 'Procedural',
            D: 'None of the Above'
        },
        correctAnswer: 'object-Oriented'
    },

    {
        question: "Which of the following keywords is used to define a variable in JavaScript?",
        answers: {
            A: 'var',
            B: 'let',
            C: 'Both A and B',
            D: 'None of the Above'
        },
        correctAnswer: 'Both A and B'
    },

    {
        question: "Which is the following methods is used to access HTML elements using JavaScript?",
        answers: {
            A: 'getElementById()',
            B: 'getElementByClassName()',
            C: 'Both A and B',
            D: 'None of the Above'
        },
        correctAnswer: 'Both A and B'
    },

    {
        question: "Upon encountering empty statements, what does the JavaScript interpreter do?",
        answers: {
            A: 'throws an error',
            B: 'ignores the statements',
            C: 'gives a warning',
            D: 'None of the Above'
        },
        correctAnswer: 'ignores the statements'
    },

    {
        question: "Which of the following of the following methods can be used to display data in some form using JavaScript?",
        answers: {
            A: 'document.write()',
            B: 'console.log()',
            C: 'window.alert()',
            D: 'All of the Above'
        },
        correctAnswer: 'All of the Above'
    },

    {
        question: "How can a data type be declared to be a constant type?",
        answers: {
            A: 'const',
            B: 'let',
            C: 'var',
            D: 'constatnt'
        },
        correctAnswer: 'const'
    },
];

function startQuiz() {
    var question = document.getElementById('question');
        question.innerHTML = quizQuestions[0].question;

    var element = document.getElementById('menu');
    element.classList.add('dissapear');
    // timerCount = 30;
    // startButton.disabled = true;
    // question ()
}

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
        if (question && timerCount > 0) {
                clearInterval(timer);
                endQuiz();
            }
        }
        if (timerCount === 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}

// function showQuestion(){
//     for (var i = 0; i < question.length; i++) {
//         question = question[questionIndex].title;
//         answers = question[questionIndex].answers;
// }
//if () {

//}
//showQuestion();
//}


    submitButton.addEventListener("click", function (){
        startQuiz();
        console.log("hello");  

    }
    )
