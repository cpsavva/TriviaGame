$(document).ready(function (){

var questions = [{
  "Question": "Which is the largest body in the solar system?",
  "AnswerWord":"Sun",
  "Answer": 1,
  "Choices": ["Jupiter","Sun", "Uranus", "Mercury"]
},
{
  "Question": "Which is not a dwarf planet?",
  "AnswerWord":"All of them",
  "Answer": 3,
  "Choices": ["Haumea", "Makemake", "Ceres","All of them"] 
    
},
{
  "Question":"What planet is covered in methane giving it its color?",
  "AnswerWord":"Neptune",
  "Answer": 2,
  "Choices": ["Uranus", "Saturn", "Neptune","Earth"]
},
{
  "Question":"Which planet has rings?",
  "AnswerWord":"All have rings",
  "Answer": 3,
  "Choices": ["Uranus","Saturn","Neptune","All have rings"]
},
{
  "Question": "What separates the terrestrial from the Jovian planets in space?",
  "AnswerWord":"Astroid Belt",
  "Answer": 0,
  "Choices": ["Astroid Belt","Nothing", "Comets", "Mars"]
}]
//main variables
var number;
var counter;
var correctAnswers = 0; 
var incorrectAnswers = 0; 
var timedOut = 0;
var i = 0;

//timer function
function countdown () {
      number = 10;
      counter = setInterval(decrement, 1000);
    
    //  The decrement function.
    function decrement() {
      number--;

      $(".Timer").html("<h2>" + number + "</h2>");

      if (number === 0) {

         stop();
         modal();
         timedOut++;
         $(".answerBanner").html("Times Up!");
    console.log("timed out: " + timedOut);
      }
    }
}
//stop timer
function stop (){
  clearInterval(counter);
}
//run the question
function run(){
var randomQuestion = questions[i].Question;
var randomAnswer = questions[i].Answer;
var randomChoices = questions[i].Choices;
var AnswerWord = questions[i].AnswerWord;

  $("#questions").removeClass("pages")
  $("#q").html(randomQuestion);
  $("#0").data("option",0).html(randomChoices[0]);
  $("#1").data("option",1).html(randomChoices[1]);
  $("#2").data("option",2).html(randomChoices[2]);
  $("#3").data("option",3).html(randomChoices[3]);

  countdown();
  $(".testButtons").on("click", function(){
            stop();
            if(randomAnswer === $(this).data("option")){
              modal();
              correctAnswers++;  
              $(".answerBanner").html("Correct!");
            }
            else {
              modal();
              incorrectAnswers++;
              $(".answerBanner").html("Incorrect");
            }
            $(".answerReveal").html(AnswerWord);

              //testing
              console.log("incorrect answers: " + incorrectAnswers)
              console.log("correct answers: " + correctAnswers)
            });
}


function modal () {
  $('.modal').modal({
          show: true
        });
};


//modal
//function to start next questions
function nextQuestion(){
  $(".next-question").on("click", function(){
    $(".testButtons").empty();
    i++;
    
    if (i === 5){
          function summary(){
            stop();
            $("#questions").addClass("pages");
            $("#summaryPage").removeClass("pages");
            $("#correctAnswers").html(correctAnswers);
            $("#incorrectAnswers").html(incorrectAnswers);
            $("#timedOut").html(timedOut);

          }
          summary();
        }
         else {
          alert("not end!")
          run();
         } 
  })
}



//MAIN PROCESS//  

function startpage(){

     $("#startPage").removeClass("pages");
     $("#startButton").on("click", function(){
        $("#startPage").addClass("pages");
        run();
        
        nextQuestion();
        
     });

 };


startpage();
 
 $("#playAgain").on("click", function(){
  $("#summaryPage").addClass("pages");
  stop();
  incorrectAnswers = 0;
  correctAnswers = 0;
  i=0;
  startpage();
 });


});