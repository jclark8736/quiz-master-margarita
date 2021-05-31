//declare variables to keep track of quiz state - questions, index, times, time variables

//variables to reference dom elements ex - var questions = getElementById("yourIDgoesHere") reference today's activity

//step by step
//create a start quiz function 
//put timer stuff in this function and run the function to grab quiz items  
//create a function to render questions for the user
    //ex. getCurrentQuestion object from array - render to page
    //function getQuestions (){

    
    //update html with current question
    //clear out answered question



    //get question function
    //loop over choices and create new button for new choices- 
        //check out .forEach to go through the questions
    //attach a click event listener to each choice
    //ex. choice.onClick =  qClick;
    //display questions on page(using append)



    //function qClicked() {
//  check if user answered rightly or wrongly 
//create if time has hit 0/still remaining
//ex - if (time<0){
    //time=0 and end quiz
//  }
//display time on page textcontent, textime, etc

//lastly, check to see if the answer is correct and move on to next q
    //}

    //check to see if we are out of questions - if so, run a function to check the score, else get new question
    //in getQ if currentQIndex ===questions.length
    //run quizEnd() 
    //else getQ




//function to keep time
//if time hits 0 = run end quiz
//time -- 
//display timer on page
//timecounter at the end of that chain



//create a function for high score
//write in the functions to check how many questions got right and display user score
//check to make sure user inputs username into user prompt and save highscores to local storage with that UDF
//retrieve high scores from local storage
//create new object to store user scores on localstorage (highscorepage)
//redirect to highscores page
//hint window.location.href
//





//creat function to end quiz
//stop/clear time interval
//show a end image/page 
//show user final score
//check out methods.hide() and .show() for timers or questions - and do this with questions on cards!!!!!!!

//high score logic page
//write a function that retrieves high score from local storage and displaly onto page
//declare function//
//call function()



// create another javascript file called questions
// question bank with the answers in an array
// object which states the correct answer
example
// in an array 
var questions = [ {
title: "What color is the sky?", 
choices: ["Purple", "blue", "red"],
answer:blue }

]

// can use dot notation to loop through questions and answers to print on the screen
//make choices clickable
//in main javascript we can say questions.choicesforEach("WRITE FUNCTION") when user clicks on attribute we can check 
// dot notation is questions.answer will read out answer against user choice. if you use for each, it'll go from questions.answer for each different question


var health = [
    topic:"teeth",
    products: ["toothbrush", "toothpaste", "mouthwash"]
    //how do you get to toothpaste in this array?  to print it out? health.products[1]


]


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





//last known


// var questionTextEl = document.getElementById("question-text");
// var initButton = document.getElementById("start");
// var answerSelectorsElement = document.getElementById("choices");
// var time = 30
// var timerEl = document.getElementById("time");
// var choicesEl = document.getElementById("choices");
// var testfunction = "this is a test";
// var questionsEl = document.getElementById("questions");
// var startScreenEl = document.getElementById("start-screen")
// var initialsEl = document.getElementById("initials")
// var feedbackEl = document.getElementById("feedback")
// var currentQuestion;
// var currentAnswer;
// var ulCreate = document.createElement("ul");
// var currentQuestionIndex = 0;
// var score = 100;
// var answer;
// document.getElementById("time").innerHTML=time;


// //Initiate quiz and fire on click
// setInterval(function() {
//     time --;
//     if (time === 0) {
//     endQuiz()
//     }
// });


// initButton.addEventListener("click", executeQuiz);


// //INITIALIZE CODE AND BEGIN TO EXECUTE QUIZ


// function executeQuiz() {
//     //add hide button after we move on
//     startScreenEl.setAttribute("class", "hide")
//     questionsEl.setAttribute("class", "show")
//     choicesEl.setAttribute("class", "show")
//     timerEl.textContent = time;
// function quizCounter()
//     //quiz timer





//     getNextQuestion()
//     };


// function getNextQuestion() {

//         document.querySelectorAll(".btn").forEach(function(btn){
//         btn.remove()
//         })
        
//         var currentQuestion=questions[currentQuestionIndex].userQuestions
//         var currentAnswer=questions[currentQuestionIndex].userAnswers
//     displayCurrentQuestion()
//     // need for each to cycle through all the available
    
// function displayCurrentQuestion() {
//     //container for user selected answer and right answer
//     var Userselection = [];
   
// //appends content of currentQuestion to the div
//     questionTextEl.innerHTML = currentQuestion ;
    
//     currentAnswer.forEach(function(newItem) {
//         var listAnswers = document.createElement("li");
//         listAnswers.textContent = newItem.choice
//         choicesEl.append(ulCreate);
//         ulCreate.append(listAnswers);
//         listAnswers.classList.add("btn");
//         listAnswers.addEventListener("click", compare);


//     });
    


//     };
//     //boolean comparison
//     function compare(event) {
//         var userSelection = event.target.textContent
//         var answerResponse = document.createElement("div")
//         for (var i = 0; i < questions[currentQuestionIndex].userAnswers.length; i++) {
//             if (questions[currentQuestionIndex].userAnswers[i].correct) {
//                 answer = questions[currentQuestionIndex].userAnswers[i].choice
//             } 
//         }
    
//         if (userSelection===answer ) { 
//             console.log("correct")
//             answerResponse.textContent = "That is the correct answer"
//             currentQuestionIndex++;
//             setTimeout(getNextQuestion, 300);
//             alert("Correct!")
//         }
//         else {
//             score = score - 20;
//             answerResponse.textContent = "That is the incorrect answer"
//             console.log("incorrect")
//             currentQuestionIndex++;
//             setTimeout(getNextQuestion, 300);
//             alert("That is the incorrect answer")
            
//         }
//         //END QUIZ
//         function endQuiz()

//     } 

// }


