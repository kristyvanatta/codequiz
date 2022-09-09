var quiz = document.getElementById('quiz');
var question = document.getElementById('question');
var answers = document.getElementById('answers'); 
var submitButton = document.getElementById('start');

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

function generateQuiz(question, quiz, submitButton) {
    function showQuestions (question, quiz) {
        var output = [];
        var answers;

        

        for(letter in questions[i].answers){
            answers.push(
                '<label>'
                + '<input type="button" name="question'+i+'" value="'+letter+'">'
                + letter + ': '
                + questions[i].answers[letter]
                + '</label>'
            );
        }
        output.push(
            '<div class="question">' +questions[i].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
        );

        }

    }
    function showResults(questions, quiz) {
        var answers = quiz.querySelectorAll('.answers');
        var userAnswer = '';
        

        for(var i=0; i<questions.length; i++){
            userAnswer = (answers[i].querySelector('input[neme=question'+i+']:clicked')||{}).value;

            if(userAnswer===questions[i].correctAnswer){
                //numCorrect++;//
                answers[i].style.color = 'green';
            }

            else{
                answers[i].style.color = 'red';
            }
        }

        

    }
    //showQuestions(question, quiz);
    submitButton.addEventListener("click", function(){
        console.log("hello");
    });   
