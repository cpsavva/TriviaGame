$(document).ready(function (){

//main variables
var number;
var counter;
var correctAnswers = 0;
var incorrectAnswers = 0;
var timedOut = 0;




function reset(){
  $("#summaryPage").addClass("pages")
  correctAnswers = 0;
  incorrectAnswers = 0;
  timedOut = 0;
  console.log("correct: " + correctAnswers);
  console.log("incorrect: " + incorrectAnswers);
  console.log("timed out: " + timedOut);
}






//functions
//counter functions for stop and run
function run() {
    number = 30;
      counter = setInterval(decrement, 1000);
    }
    //  The decrement function.
    function decrement() {
      number--;

      $(".Timer").html("<h2>" + number + "</h2>");

      if (number === 0) {

         stop();
         timedOut++;
		console.log("timed out: " + timedOut);
      }
    }

function stop (){
	clearInterval(counter);
}


function grading (){
	 $(".answer").on("click", function(){
        correctAnswers++;
     		stop();
     		modal();
        $(".answerBanner").html("Correct!");
     		
console.log("correct: " + correctAnswers);
     	});
     	
     
   $(".wrong").on("click", function(){
    incorrectAnswers++;
		stop ();
		modal();
    $(".answerBanner").html("Incorrect");
		
		console.log("incorrect: " + incorrectAnswers);

	});

}
//time pages to show in
function solarOne (){
  stop();
  // setTimeout(solarTwo, 32 * 1000);
  $("#startPage").addClass("pages");
  $("#solarOne").removeClass("pages");
  run();
  grading();
  $(".answerReveal").html("Sun");
  $(".next-question").on("click", solarTwo);
};
function solarTwo(){
  stop();
  // setTimeout(solarThree, 32 * 1000);
  $("#solarOne").addClass("pages").val("button:disabled");
  $("#solarTwo").removeClass("pages");
  run();
  grading();
  $(".answerReveal").html("They are all dwarf planets");
  $(".next-question").on("click", solarThree);
};
function solarThree(){
  stop();
  // setTimeout(solarFour, 32 * 1000);
  $("#solarTwo").addClass("pages").removeClass("wrong answer");
  $("#solarThree").removeClass("pages");
  run();
  grading();
  $(".answerReveal").html("Neptune");
  $(".next-question").on("click", solarFour);
};
function solarFour(){
  stop();
  // setTimeout(solarFive, 32 * 1000);
  $("#solarThree").addClass("pages").removeClass("wrong answer");
  $("#solarFour").removeClass("pages");
  run();
  grading();
  $(".answerReveal").html("They all have rings");
  $(".next-question").on("click", solarFive);
};
function solarFive(){
  stop();
  // setTimeout(summaryPage, 32 * 1000);
  $("#solarFour").addClass("pages").removeClass("wrong answer");
  $("#solarFive").removeClass("pages");
  run();
  grading();
  $(".answerReveal").html("Asteroid Belt");
  $(".next-question").on("click", summaryPage);
};
function summaryPage(){
  stop();
  $("#solarFive").addClass("pages").removeClass("wrong answer");
  $("#summaryPage").removeClass("pages");
  $("#correctAnswers").html(correctAnswers);
  $("#incorrectAnswers").html(incorrectAnswers);
  $("#timedOut").html(timedOut);
};

//modal
function modal () {
  $('.modal').modal({
          show: true
        });
};









function startpage(){

     $("#startPage").removeClass("pages");
     $("#startButton").on("click", function(){
     	solarOne();
     });
 };



//main process




startpage();

$("#playAgain").on("click", function(){
    reset();
    stop();
    solarOne();
  });






























});