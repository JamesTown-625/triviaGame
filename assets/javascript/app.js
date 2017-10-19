$("#start").on('click', function() {
	game.start();
});

$(document).on('click', '#end',function() {
	game.done();
});

var questions = [{

	question: "What is the name of the boy that disappears in the first episode of Stranger Things, Season 1?",
	answers: [" Will Byers ", " Will Patton ", " Johnny Depp ", " Johnny Smith "],
	correctAnswer: " Will Byers "
},	{
	question: "What is the name of the monster that torments the town of Hawkins, Indiana?",
	answers: [" Demagorgon ", " Sully ", " Freddy Kruger ", " Golem "],
	correctAnswer: " Demagorgon " 
},	{
	question: "On a scale from 1 to 10 how cool is the kid that escapes Hawkins Laboratory?",
	answers: [" One ", " Seven ", " Three ", " Eleven "],
	correctAnswer: " Eleven "
},	{
	question: "How does Will Byers Mom keep in contact with him?",
	answers: [" His cell phone ", " Writing him letters ", " Christmas lights ", " Facebook direct messaging "],
	correctAnswer: " Christmas lights "
},	{
	question: "Why doesn't anyone care where Barb went the whole season except Nancy?",
	answers: [" She bullied everyone ", " She's a red-head ", " She knew too much ", " All of the above "],
	correctAnswer: " All of the above "

}];

var game = {
	correct: 0,
	incorrect: 0,
	counter: 20,
	countdown: function() {
		game.counter--;
		$('#counter').html(game.counter);
		if(game.counter<=0) {
			console.log("Time is UP!");
			game.done();
		}
	},
	start: function() {
		timer = setInterval(game.countdown,1000);
		$("#subWrapper").prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
		$('#start').remove();
			for (var i = 0; i < questions.length; i++) {
				$("#subWrapper").append("<h2>" + questions[i].question+"</h2>");
				for(var j=0; j<questions[i].answers.length; j++) {
					$("#subWrapper").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
				}
			}
			$("#subWrapper").append('<br><button id="end">DONE</button>');
		},

		done: function() {
			$.each($('input[name="question-0"]:checked'),function() {
				if($(this).val()==questions[0].correctAnswer){
					game.correct++;
				}	else {
					game.incorrect++;
				}
			});
			$.each($('input[name="question-1"]:checked'),function() {
				if($(this).val()==questions[1].correctAnswer){
					game.correct++;
				}	else {
					game.incorrect++;
				}
			});
			$.each($('input[name="question-2"]:checked'),function() {
				if($(this).val()==questions[2].correctAnswer){
					game.correct++;
				}	else {
					game.incorrect++;
				}
			});
			$.each($('input[name="question-3"]:checked'),function() {
				if($(this).val()==questions[3].correctAnswer){
					game.correct++;
				}	else {
					game.incorrect++;
				}
			});
			$.each($('input[name="question-4"]:checked'),function() {
				if($(this).val()==questions[4].correctAnswer){
					game.correct++;
				}	else {
					game.incorrect++;
				}
			});

			this.result();

		},

		result: function() {
			clearInterval(timer);
			$('#subWrapper h2').remove();
			$('#subWrapper').html("<h2>All Done!</h2>");
			console.log(game.correct);
			$('#subWrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
			console.log(game.incorrect);
			$('#subWrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
			$('#subWrapper').append("<h3>Unanswered: " +(questions.length-(this.incorrect+this.correct))+"</h3>");
		}
}