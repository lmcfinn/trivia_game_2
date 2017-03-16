
 		$(document).ready(function(){

 			// Click to start coundDown
			window.onload = function() {
				// $(".startbtn").on("click", countDown.start());
				countDown.start();
			};

			// Set total time
			var time = 20;

			// Set time interval
			var intervalId;

			var countDown = {

				start: function() {
    				intervalId = setInterval(countDown.count, 1000);
  				},

				count: function() {
    				time--;
    				$(".timer").html("Time remaining: " + time);

    				// Stop coundDown and also show result page
    				if(time == 0) {
  						clearInterval(intervalId);
  						getCount();
  						window.location.href = "result.html";
  						$(".finalCorrect").html("Correct answers: " + correctFinal);
						$(".finalWrong").html("Wrong answers: " + wrongFinal);
						$(".finalUnanswered").html("Unaswered: " + unansweredFinal);
  						
  					}
  				}
			};

			// Start writing the game logic

			var correctTotal = 0;
 			var wrongTotal = 0;
 			var unasnwered = 0;
 			var questionsTotal = 5;

 			var answerCount = [];
 			
			// Set answers
			var correctC = ["1955", "18", "Pirates of the Caribbean", "1986", "Sleeping Beauty"];

			// Store correct answers in input
			$("#1_3").data("C", correctC[0]);
			$("#2_3").data("C", correctC[1]);
			$("#3_1").data("C", correctC[2]);
			$("#4_2").data("C", correctC[3]);
			$("#5_1").data("C", correctC[4]);

			
			// See if the user choice is correct or not

			// Q1
			$(".q1A").on("click", function() {

				if($(this).data("C")) {

					answerCount[0] = "true";
					console.log("Q1:", answerCount[0]);

				} else {

					answerCount[0] = "false";
					console.log("Q1:", answerCount[0]);
				}

			});

		

			// Q2
			$(".q2A").on("click", function() {

				if($(this).data("C")) {

					answerCount[1] = "true"
					console.log("Q2:", answerCount[1]);

				} else {

					answerCount[1] = "false"
					console.log("Q2:", answerCount[1]);
				}

			});

			// Q3
			$(".q3A").on("click", function() {

				if($(this).data("C")) {

					answerCount[2] = "true"
					console.log("Q3:", answerCount[2]);

				} else {

					answerCount[2] = "false"
					console.log("Q3:", answerCount[2]);
				}

			});

			// Q4
			$(".q4A").on("click", function() {

				if($(this).data("C")) {

					answerCount[3] = "true"
					console.log("Q4:", answerCount[3]);

				} else {

					answerCount[3] = "false"
					console.log("Q4:", answerCount[3]);
				}

			});

			// Q5
			$(".q5A").on("click", function() {

				if($(this).data("C")) {

					answerCount[4] = "true"
					console.log("Q5:", answerCount[4]);

				} else {

					answerCount[4] = "false"
					console.log("Q5:", answerCount[4]);
				}

			});

			console.log(answerCount);

			// Create function to count the numbers of correct and wrong answers
			function getCount() {

				for( var i = 0; i < questionsTotal; i++) {

					if(answerCount[i] === "true") {
						
						correctTotal++;
						
						// return correctTotal++;
						
					}

					if(answerCount[i] === "false") {
						
						wrongTotal++;

						// return wrongTotal++;
						
					}
				}

				unanswered = questionsTotal - correctTotal - wrongTotal;

				console.log("not answered", unanswered)


				localStorage.setItem("correct count", correctTotal);
				localStorage.setItem("wrong count", wrongTotal);
				localStorage.setItem("unanswered count", unanswered);


			};

			// Make the submit button call the function
			$(".submitbtn").on("click", function() {

				getCount();

				// Stop the countdown
				clearInterval(intervalId);

				window.location.href = "result.html";

				console.log("After sumbit:", answerCount);
				console.log("After submit correct count:", correctTotal);
				console.log("After submit wrong count:", wrongTotal);
				console.log("After submit unanswered:", unanswered);
				
			});

			// Doesn't work
			// $(".finalCorrect").locatStorage.getItem("correct count").html("Correct Answers: " + correctTotal);
			// $(".finalWrong").locatStorage.getItem("wrong count").html("Wrong Answers: " + wrongTotal);
			// $(".finalUnanswered").locatStorage.getItem("unanswered").html("Unanswered: " + unanswered);

			var correctFinal = localStorage.getItem("correct count");
			var wrongFinal = localStorage.getItem("wrong count");
			var unansweredFinal = localStorage.getItem("unanswered count");

			$(".finalCorrect").html("Correct answers: " + correctFinal);
			$(".finalWrong").html("Wrong answers: " + wrongFinal);
			$(".finalUnanswered").html("Unaswered: " + unansweredFinal);

			
		});