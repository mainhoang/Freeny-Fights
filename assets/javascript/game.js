$(document).ready(function(){

	console.log("hello");
	
	

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
		var me = "";
		var characterInfo = "";
		var charSelected = false;

		console.log(characters[0]);


		function renderDisplay(){

			for(var i = 0; i < characters.length; i++){
				
				characterInfo = $("<div class='character-wrapper col-lg-2 col-md-2 col-sm-4 col-xs-6'><h4 class='character-names'>" 
								+ characters[i].name + 
								"</h4><img class='character-images img-responsive' src='"
								+ characters[i].imageURL +
								"'><p class='character-points'>"
								+ characters[i].health +
								"</p></div>");

				$("#character-display").append(characterInfo);

			}

		}


		



		renderDisplay();

	
		
			
});	