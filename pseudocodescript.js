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


