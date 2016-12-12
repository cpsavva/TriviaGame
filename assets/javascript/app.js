$(document).ready(function (){

//main variables
var number = 30;
var counter;
var correctAnswers = 0;
var incorrectAnswers = 0;
var timedout = 0;











//functions
//counter functions for stop and run
function run() {
      counter = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $(".Timer").html("<h2>" + number + "</h2>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
         stop();
         timedout++;
		console.log("timed out: " + timedout);

        //  Alert the user that time is up.
        // alert("Time Up!");
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
	// if (number === 0) { 
	// 	timedout++;
	// 	console.log("timed out: " + timedout);
	// }


}

function startpage(){
		
     $("#startPage").removeClass("pages");
     $("#startButton").on("click", function(){
     	$("#startPage").hide();
     	$("#solarOne").removeClass("pages");
     	run();
     	grading();

     });
 };


















//main process




startpage();






























});