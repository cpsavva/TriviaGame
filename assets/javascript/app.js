$(document).ready(function (){

//main variables
var number;
var counter;
var correctAnswers = 0;
var incorrectAnswers = 0;
var timedOut = 0;











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
     		stop();
     		alert("you got it!");
     		correctAnswers++;
console.log("correct: " + correctAnswers);
     	});
     	
     
	$(".wrong").on("click", function(){
		stop ();
		alert("oh no!");
		incorrectAnswers++;
		console.log("incorrect: " + incorrectAnswers);

	});

}
//time pages to show in
function solarOne (){
  $("#startPage").hide();
  $("#solarOne").removeClass("pages");
  run();
  grading();
};
function solarTwo(){
  $("#solarOne").hide();
  $("#solarTwo").removeClass("pages");
  run();
  grading();
};
function solarThree(){
  $("#solarTwo").hide();
  $("#solarThree").removeClass("pages");
  run();
  grading();
};
function solarFour(){
  $("#solarThree").hide();
  $("#solarFour").removeClass("pages");
  run();
  grading();
};
function solarFive(){
  $("#solarFour").hide();
  $("#solarFive").removeClass("pages");
  run();
  grading();
};
function summaryPage(){
  $("#solarFive").hide();
  $("#summaryPage").removeClass("pages");
  $("#correctAnswers").html(correctAnswers);
  $("#incorrectAnswers").html(incorrectAnswers);
  $("#timedOut").html(timedout);
};

//modal










function startpage(){
		
     $("#startPage").removeClass("pages");
     $("#startButton").on("click", function(){
      setTimeout(solarTwo, 32 * 1000);
      setTimeout(solarThree, 64 * 1000);
      setTimeout(solarFour, 96 * 1000);
      setTimeout(solarFive, 128 * 1000);
      setTimeout(summaryPage, 160 * 1000);
     	solarOne();
     });
 };


















//main process




startpage();






























});