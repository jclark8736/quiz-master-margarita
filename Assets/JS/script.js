//variables
/////////NOT COMPLETE
var questionTextEl = document.getElementbyId=("question-text");
var initButton = document.getElementById("start");
var answerSelectorsElement = document.getElementById("answer-selectors");
var currentQuestionCount = 0
var time = questions.length * 15
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var testfunction = "this is a test";
var questionsEl = document.getElementById("questions");
var startScreenEl = document.getElementById("start-screen")







//Initiate quiz and fire on click


initButton.addEventListener("click", executeQuiz);


//INITIALIZE CODE AND BEGIN TO EXECUTE QUIZ


function executeQuiz() {
    //add hide button after we move on
    startScreenEl.setAttribute("class", "hide")
    questionsEl.setAttribute("class", "show")
    timerId = setInterval(ClockTimer, 1000 )
    timerEl.textContent = time;
    getNextQuestion()
    }


function getNextQuestion() {
    var currentQuestion = questions[currentQuestionCount];
    questionTextEl.textContent = currentQuestion.title;
    choicesEl.innerHTML = "";
    // need for each to cycle through all the available
    console.log("testing2")

}

function displayCurrentQuestion(question, quizQuestions) {
    console.log("test3")
    for(var i = 0; i < quizQuestions.length; i++);

}










//QUESTIONS
var questions =  [ 

    {
        questions: "When was the Master and the Margarita written?",
        possiblities:  [
            { choice: "1966", correct: false},
            { choice: "1937", correct: true},
            { choice: "1914", correct: false}
        ],
        
        
    },
    {
        questions: "What are the dissapearances of people all over Moscow an allegory of?",
        possibilities:  [
            {choice: "Deaths from war", correct: false },
            {choice: "Victims of plague", correct: false},
            {choice: "Stalin's purge", correct: true }
        ]
        
        
    },

    {
        questions: "What does Bezdomny decide about his life while in the mental institution after his encounter with evil spirits?",
        possiblities:  [
            {choice: "He decides to become a Christian", correct: false},
            {choice: "He decides that he is experiencing a psychotic episode", correct: false},
            {choice: "He decides to never write poetry again", correct: true}
        ]
        
    },

    {
        questions: "What does Satan say to the Master when he reveals that he has burned his life's work?",
        possiblities:  [
            {choice: "Manuscripts do not burn", correct: true},
            {choice: "There is no need for it where you are going", correct: false},
            {choice: "You must write it again, but this time complete it", correct: false}
        ]
        
        
    },

    {
        questions: "What allusion does Woland's entourage make about his true nature when asked about the mystical events coming from apartment no. 50",
        possiblities:  [
            {choice: "Knowing won't do you any good", correct: false},
            {choice: "We're not here to make any trouble, only fixing the primus stove", correct: false},
            {choice: "Devil knows what happened", correct: true}
        ],
        
    },

];

//END QUESTIONS
