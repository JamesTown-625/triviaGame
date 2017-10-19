$("#start").on('click', function() {
	game.start();
});

$(document).on('click', '#end',function() {
	game.done();
});			
 
var questions = [{

	question: "<div class='panel'>What is the name of the boy that disappears in the first episode of Stranger Things, Season 1?",
	answers: [" Will Byers ", " Dustin Henderson ", " Mike Wheeler ", " Lucas Sinclair "],
	correctAnswer: " Will Byers "
},	{
	question: "<br><div class='panel'>What is the name of the monster that torments the town of Hawkins, Indiana?",
	answers: [" Demagorgon ", " Sully ", " Freddy Krueger ", " Golem "],
	correctAnswer: " Demagorgon " 
},	{
	question: "<br><div class='panel'>On a scale from 1 to 10 how cool is the kid that escapes Hawkins Laboratory?",
	answers: [" One ", " Seven ", " Three ", " Eleven "],
	correctAnswer: " Eleven "
},	{
	question: "<br><div class='panel'>How does Joyce Byers keep in contact with her son?",
	answers: [" His cell phone ", " Writing him letters ", " Christmas lights ", " Facebook direct messaging "],
	correctAnswer: " Christmas lights "
},	{
	question: "<br><div class='panel'>Why doesn't anyone care where Barb went the whole season except Nancy?",
	answers: [" She bullied everyone ", " She's a red-head ", " She knew too much ", " All of the above "],
	correctAnswer: " All of the above "
}, {
	question: "<br><div class='panel'>Where do the kids hide when the bad men come looking for them?",
	answers: [" Steves house ", " A school bus ", " Fort Byers ", " Mikes basement "],
	correctAnswer: " A school bus "
}, {
	question: "<br><div class='panel'>What does Nancy use to break the lock to get the hose for Elevens bath?",
	answers: [" A gun ", " An axe ", " A fire extinguisher ", " A rock "],
	correctAnswer: " A rock "
}, {
	question: "<br><div class='panel'>Where does the shows creepy opening scene take place?",
	answers: [" Mirkwood forest ", " A Laboratory ", " Hawkins Elementary ", " A pool party "],
	correctAnswer: " A Laboratory "
}, {
	question: "<br><div class='panel'>What is the name of the game the boys reference throughout the season?",
	answers: [" League of Legends ", " Lord of the Rings ", " Dungeons and Dragons ", " Legend of Zelda "],
	correctAnswer: " Dungeons and Dragons "
}, {
	question: "<br><div class='panel'>What is El's favorite food?",
	answers: [" Churros ", " pop-tarts ", " Toast ", " Eggos "],
	correctAnswer: " Eggos "
}];

var game = {
	correct: 0,
	incorrect: 0,
	counter: 90,
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
		$("#subWrapper").prepend('<br><br><h2>Time Remaining: <span id="counter">90</span> Seconds</h2>');
		$('#start').remove();
			for (var i = 0; i < questions.length; i++) {
				$("#subWrapper").append("<h2>" + questions[i].question+"</h2>");
				for(var j=0; j<questions[i].answers.length; j++) {
					$("#subWrapper").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
				}
			}
			$("#subWrapper").append('<br><br><br><button id="end">DONE</button>');
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
			$.each($('input[name="question-5"]:checked'),function() {
				if($(this).val()==questions[5].correctAnswer){
					game.correct++;
				}	else {
					game.incorrect++;
				}
			});
			$.each($('input[name="question-6"]:checked'),function() {
				if($(this).val()==questions[6].correctAnswer){
					game.correct++;
				}	else {
					game.incorrect++;
				}
			});
			$.each($('input[name="question-7"]:checked'),function() {
				if($(this).val()==questions[7].correctAnswer){
					game.correct++;
				}	else {
					game.incorrect++;
				}
			});
			$.each($('input[name="question-8"]:checked'),function() {
				if($(this).val()==questions[8].correctAnswer){
					game.correct++;
				}	else {
					game.incorrect++;
				}
			});
				$.each($('input[name="question-9"]:checked'),function() {
				if($(this).val()==questions[9].correctAnswer){
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
			$('#subWrapper').html("<h2>Thanks for playing!</h2>");
			console.log(game.correct);
			$('#subWrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
			console.log(game.incorrect);
			$('#subWrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
			$('#subWrapper').append("<h3>Unanswered: " +(questions.length-(this.incorrect+this.correct))+"</h3>");
		}
}