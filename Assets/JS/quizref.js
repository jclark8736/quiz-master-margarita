// vars to display questions/answers and the prompt button


//Event listener on init-btn to begin quiz - button runs executeQuiz
var initButton = document.getElementById("init-btn")

initButton.addEventListener("click", executeQuiz)








var quizQuestions = document.getElementById('quiz-question');



var quizResults = document.getElementById('results');



var submitBtn = document.getElementById('submit-btn');



//INITIALIZE CODE AND BEGIN TO EXECUTE QUIZ


function executeQuiz() {
console.log("QUIZ TEST")

};


//event listener for submit button
document.getElementByID(submitBtn).addEventListener("click", displayResults());








//DISPLAY CURRENT SCORE
function displayResults() {};





//STORE SCORE AND COUNT CURRENT RESULTS
function storeResults() {};














//FUNCTION DISPLAYS  NEXT QUESTION, or ENDS QUIZ WHEN OUT OF QUESTIONS (need if/then and for loop)
function getNextQuestion() {}



//FUNCTION HANDLES ANSWER SUBMISSIONS

function submitAnswer() {}




//or do questions like quiz questions = [ questions:"question goes here"
// choices = [possible answer]

//QUIZ QUESTIONS
const quizQuestions =  [ 
    {
        questions: "When was the Master and the Margarita written?",
        possiblities:  {
            a: "1966",
            b: "1937",
            c: "1914"
        },
        correctAnswer: "b"
        
    },
    {
        questions: "What are the dissapearances of people all over Moscow an allegory of?",
        possiblities:  {
            a: "Deaths from war",
            b: "Victims of plague",
            c: "Stalin's purge"
        },
        correctAnswer: "c"
        
    },

    {
        questions: "What does Bezdomny decide about his life while in the mental institution after his encounter with evil spirits?",
        possiblities:  {
            a: "He decides to become a Christian",
            b: "He decides that he is experiencing a psychotic episode",
            c: "He decides to never write poetry again"
        },
        correctAnswer: "c"
        
    },

    {
        questions: "What does Satan say to the Master when he reveals that he has burned his life's work?",
        possiblities:  {
            a: "Manuscripts do not burn",
            b: "There is no need for it where you are going",
            c: "You must write it again, but this time complete it"
        },
        correctAnswer: "a"
        
    },

    {
        questions: "What allusion does Woland's entourage make about his true nature when asked about the mystical events coming from apartment no. 50",
        possiblities:  {
            a: "Knowing won't do you any good",
            b: "We're not here to make any trouble, only fixing the primus stove",
            c: "Devil knows what happened"
        },
        correctAnswer: "c"
        
    },

];