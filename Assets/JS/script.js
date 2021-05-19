//variables
//QUESTIONS
var questions =  [ 

    {
        userQuestions: "When was the Master and the Margarita written?",
        userAnswers:  [
            { choice: "1966", correct: false},
            { choice: "1937", correct: true},
            { choice: "1914", correct: false}
        ],
        
        
    },
    {
        userQuestions: "What are the dissapearances of people all over Moscow an allegory of?",
        userAnswers:  [
            {choice: "Deaths from war", correct: false },
            {choice: "Victims of plague", correct: false},
            {choice: "Stalin's purge", correct: true }
        ]
        
        
    },

    {
        userQuestions: "What does Bezdomny decide about his life while in the mental institution after his encounter with evil spirits?",
        userAnswers:  [
            {choice: "He decides to become a Christian", correct: false},
            {choice: "He decides that he is experiencing a psychotic episode", correct: false},
            {choice: "He decides to never write poetry again", correct: true}
        ]
        
    },

    {
        userQuestions: "What does Satan say to the Master when he reveals that he has burned his life's work?",
        userAnswers:  [
            {choice: "Manuscripts do not burn", correct: true},
            {choice: "There is no need for it where you are going", correct: false},
            {choice: "You must write it again, but this time complete it", correct: false}
        ]
        
        
    },

    {
        userQuestions: "What allusion does Woland's entourage make about his true nature when asked about the mystical events coming from apartment no. 50?",
        userAnswers:  [
            {choice: "Knowing won't do you any good", correct: false},
            {choice: "We're not here to make any trouble, only fixing the primus stove", correct: false},
            {choice: "Devil knows what happened", correct: true}
        ],
        
    },

];

//END QUESTIONS








var questionTextEl = document.getElementById("question-text");
var initButton = document.getElementById("start");
var answerSelectorsElement = document.getElementById("choices");
var time = 60
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var testfunction = "this is a test";
var questionsEl = document.getElementById("questions");
var startScreenEl = document.getElementById("start-screen")
var initialsEl = document.getElementById("initials")
var feedbackEl = document.getElementById("feedback")
var currentQuestion;
var currentAnswer;
var ulCreate = document.createElement("ul");
var currentQuestionIndex = 0;
var score = 100;
var answer;




//Initiate quiz and fire on click


initButton.addEventListener("click", executeQuiz);


//INITIALIZE CODE AND BEGIN TO EXECUTE QUIZ


function executeQuiz() {
    //add hide button after we move on
    startScreenEl.setAttribute("class", "hide")
    questionsEl.setAttribute("class", "show")
    choicesEl.setAttribute("class", "show")
   // timerId = setInterval(ClockTimer, 1000 )
    //timerEl.textContent = time;
    
    getNextQuestion()
    }


function getNextQuestion() {

        document.querySelectorAll(".btn").forEach(function(btn){
        btn.remove()
        })
        
        var currentQuestion=questions[currentQuestionIndex].userQuestions
        var currentAnswer=questions[currentQuestionIndex].userAnswers
    displayCurrentQuestion()
    // need for each to cycle through all the available
    
function displayCurrentQuestion() {
    //container for user selected answer and right answer
    var Userselection = [];
   
//appends content of currentQuestion to the div
    questionTextEl.innerHTML = currentQuestion ;
    
    currentAnswer.forEach(function(newItem) {
        var listAnswers = document.createElement("li");
        listAnswers.textContent = newItem.choice
        choicesEl.append(ulCreate);
        ulCreate.append(listAnswers);
        listAnswers.classList.add("btn");
        listAnswers.addEventListener("click", compare);


    });
    


    };
    //boolean comparison
    function compare(event) {
        var userSelection = event.target.textContent
        var answerResponse = document.createElement("div")
        for (var i = 0; i < questions[currentQuestionIndex].userAnswers.length; i++) {
            if (questions[currentQuestionIndex].userAnswers[i].correct) {
                answer = questions[currentQuestionIndex].userAnswers[i].choice
            } 
        }
    
        if (userSelection===answer ) { 
            console.log("correct")
            answerResponse.textContent = "That is the correct answer"
            currentQuestionIndex++;
            setTimeout(getNextQuestion, 300);
            alert("Correct!")
        }
        else {
            score = score - 20;
            answerResponse.textContent = "That is the incorrect answer"
            console.log("incorrect")
            currentQuestionIndex++;
            setTimeout(getNextQuestion, 300);
            alert("That is the incorrect answer")
            
        }
        

    } 

}





//end quiz function
//make high score page with seperate html and javascript 
//use localstorage







