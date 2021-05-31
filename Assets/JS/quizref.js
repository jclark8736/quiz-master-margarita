// // vars to display questions/answers and the prompt button



// var quizQuestions = document.getElementById('quiz-question');



// var quizResults = document.getElementById('results');



// var submitBtn = document.getElementById('submit-btn');






// //event listener for submit button
// document.getElementByID(submitBtn).addEventListener("click", displayResults());








// //DISPLAY CURRENT SCORE
// function displayResults() {};





// //STORE SCORE AND COUNT CURRENT RESULTS
// function storeResults() {};














// //FUNCTION DISPLAYS  NEXT QUESTION, or ENDS QUIZ WHEN OUT OF QUESTIONS (need if/then and for loop)
// function getNextQuestion() {}



// //FUNCTION HANDLES ANSWER SUBMISSIONS

// function submitAnswer() {}




// //or do questions like quiz questions = [ questions:"question goes here"
// // choices = [possible answer]

// //QUIZ QUESTIONS
// const quizQuestions =  [ 
//     {
//         questions: "When was the Master and the Margarita written?",
//         possiblities:  {
//             a: "1966",
//             b: "1937",
//             c: "1914"
//         },
//         correctAnswer: "b"
        
//     },
//     {
//         questions: "What are the dissapearances of people all over Moscow an allegory of?",
//         possiblities:  {
//             a: "Deaths from war",
//             b: "Victims of plague",
//             c: "Stalin's purge"
//         },
//         correctAnswer: "c"
        
//     },

//     {
//         questions: "What does Bezdomny decide about his life while in the mental institution after his encounter with evil spirits?",
//         possiblities:  {
//             a: "He decides to become a Christian",
//             b: "He decides that he is experiencing a psychotic episode",
//             c: "He decides to never write poetry again"
//         },
//         correctAnswer: "c"
        
//     },

//     {
//         questions: "What does Satan say to the Master when he reveals that he has burned his life's work?",
//         possiblities:  {
//             a: "Manuscripts do not burn",
//             b: "There is no need for it where you are going",
//             c: "You must write it again, but this time complete it"
//         },
//         correctAnswer: "a"
        
//     },

// //     {
// //         questions: "What allusion does Woland's entourage make about his true nature when asked about the mystical events coming from apartment no. 50",
// //         possiblities:  {
// //             a: "Knowing won't do you any good",
// //             b: "We're not here to make any trouble, only fixing the primus stove",
// //             c: "Devil knows what happened"
// //         },
// //         correctAnswer: "c"
        
// //     },

// // ];





// // function examTimer() {
// //     if (parseInt(sec) >0) {

// //         document.getElementById("showtime").innerHTML = "Time Remaining :"+min+" Minutes ," + sec+" Seconds";
// //         sec = parseInt(sec) - 1;                
// //         tim = setTimeout("examTimer()", 1000);
// //     }
// //     else {

// //         if (parseInt(min)==0 && parseInt(sec)==0){
// //             document.getElementById("showtime").innerHTML = "Time Remaining :"+min+" Minutes ," + sec+" Seconds";
// //              alert("Time Up");
// //              document.questionForm.minute.value=0;
// //              document.questionForm.second.value=0;
// //              document.questionForm.submit();

// //          }

// //         if (parseInt(sec) == 0) {				
// //             document.getElementById("showtime").innerHTML = "Time Remaining :"+min+" Minutes ," + sec+" Seconds";					
// //             min = parseInt(min) - 1;
// //             sec=59;
// //             tim = setTimeout("examTimer()", 1000);
// //         }
