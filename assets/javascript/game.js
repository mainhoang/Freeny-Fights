$(document).ready(function(){

	// console.log("hello");
	
		var characters = [
			kitty = {
				name: "Hello Kitty",
				imageURL: "assets/images/hello-kitty.gif",
				health: 100,
				attack: 40, 
			},
			domo = {
				name: "Domo",
				imageURL: "assets/images/domo.gif",
				health: 120,
				attack: 20, 
			},
			sack = {
				name: "Sack Boy",
				imageURL: "assets/images/sack-boy.gif",
				health: 140,
				attack: 10, 
			},
			lego = {
				name: "Lego Man",
				imageURL: "assets/images/lego-man.gif",
				health: 160,
				attack: 60, 
			},
			qee = {
				name: "Qee",
				imageURL: "assets/images/qee.gif",
				health: 180,
				attack: 40, 
			},
			thinker = {
				name: "Thinker",
				imageURL: "assets/images/thinker.gif",
				health: 200,
				attack: 30, 
			},
	
		];

		var enemy = "";
		var yourCharacter = {};
		var characterInfo = "";
		var hasYourCharacter = false;
		var hasEnemy = false;
		var lockChar = false;
		var gameStarted =false;


		function renderChoices(){

			for(var i = 0; i < characters.length; i++){

				characterInfo = $("<div class='card clickable col-lg-2 col-md-2 col-sm-4 col-xs-6' value='" 
								+ (i + 1) +
								"'><h4 class='names'>" 
								+ characters[i].name + 
								"</h4><img class='character-images img-responsive' src='"
								+ characters[i].imageURL +
								"'><p class='character-pts'>"
								+ characters[i].health +
								"</p></div>");

				$("#character-display").append(characterInfo);

			}

		}

		function stageFight(){

			$(".before-start").css("display","none");
			$(".started").css("display","block");

			$(".your-player").text(yourCharacter.name);
			$(".your-img").css("backgroundImage","url('" + yourCharacter.imageURL + "')");
			$(".your-pts").text(yourCharacter.health);

			$(".your-enemy").text(enemy.name);
			$(".enemy-img").css("backgroundImage","url('" + enemy.imageURL + "')");
			$(".enemy-pts").text(enemy.health);

		}

		function chooseYourPlayers(){

			$(".card").on("click", function(){

				if(hasEnemy === false){

					$(this).css("display", "none");
						
					var characterValues = parseInt($(this).attr("value"));
					var selectedCharacter = "";

					for(var i = 0; i < characters.length; i++){

						if(characterValues === i + 1){

							selectedCharacter = characters[i];

						}
		
					}

					if(hasYourCharacter === false){

						yourCharacter = selectedCharacter;
						hasYourCharacter = true;

					}else{

						$(".card").removeClass("clickable");
						enemy = selectedCharacter;
						hasEnemy = true;
						lockChar = true;

					}

					stageFight();
				
				}

			})

		}


		renderChoices();
		chooseYourPlayers();

		

	
		
			
});	