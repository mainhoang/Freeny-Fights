$(document).ready(function() {

    var characters = [
        kitty = {
            name: "Hello Kitty",
            imageURL: "assets/images/hello-kitty.gif",
            health: 100,
            attack: 20,
            value: 0,
        },
        domo = {
            name: "Domo",
            imageURL: "assets/images/domo.gif",
            health: 120,
            attack: 12,
            value: 0,
        },
        sack = {
            name: "Sack Boy",
            imageURL: "assets/images/sack-boy.gif",
            health: 140,
            attack: 10,
            value: 0,
        },
        lego = {
            name: "Lego Man",
            imageURL: "assets/images/lego-man.gif",
            health: 160,
            attack: 15,
            value: 0,
        },
        qee = {
            name: "Qee",
            imageURL: "assets/images/qee.gif",
            health: 180,
            attack: 17,
            value: 0,
        },
        thinker = {
            name: "Thinker",
            imageURL: "assets/images/thinker.gif",
            health: 200,
            attack: 40,
            value: 0,
        },
    ];

    var enemy = "",
        you = "";
    var yourAttackPower = 0;
    var counter = 1;
    var yourLife = 0;
    var enemyLife = 0;
    var characterCard = "";
    var characterName, characterImages, characterPoints;

    var hasYourCharacter = false;
    var hasEnemy = false;

    var lockChoices = false;
    var lockAttack = false;

    var gameStarted = false;
    var gameOver = false;
    var roundIsOver = false;

    $("#restart").click(function() {
        location.reload();
    });

    // if (roundIsOver && hasEnemy === false) {
    //     lockAttack = true;
    // }


    var renderChoices = function() {

        $("#choices-display").empty();

        for (var i = 0; i < characters.length; i++) {

            characters[i].value = i;

            characterCard = $("<div class='card clickable col-lg-2 col-md-2 col-sm-4 col-xs-6'></div>");
            $("#choices-display").append(characterCard);
            characterCard.attr("value", characters[i].value);


            characterName = $("<h4 class='names'></h4>");
            characterCard.append(characterName);
            characterName.text(characters[i].name);

            characterImages = $("<div class='character-imgs'></div>");
            characterCard.append(characterImages);
            characterImages.css("backgroundImage", "url('" + characters[i].imageURL + "')")

            characterPoints = $("<p class='character-pts'></p>");
            characterCard.append(characterPoints);
            characterPoints.text(characters[i].health);

        }



    }

    function stageFight() {

        $(".before-start").css("display", "none");
        $(".started").css("display", "block");

        $(".your-player").text(you.name);

        $(".your-img").css("backgroundImage", "url('" + you.imageURL + "')");
        $(".your-pts").text(you.health);

        $(".your-enemy").text(enemy.name);
        $(".enemy-img").css("backgroundImage", "url('" + enemy.imageURL + "')");
        $(".enemy-pts").text(enemy.health);

    }





    $("#choices-display").on("click", '.card',function() {

        if (hasEnemy === false) {

            var divValues = parseInt($(this).attr("value"));
            var selectedCharacter = {};

            for (var i = 0; i < characters.length; i++) {

                if (divValues === i) {

                    selectedCharacter = characters[i];

                }

            }

            if (hasYourCharacter === false) {

                you = selectedCharacter;
                characters.splice(selectedCharacter.value, 1);
                hasYourCharacter = true;

            } else {

                enemy = selectedCharacter;
                characters.splice(selectedCharacter.value, 1);
                hasEnemy = true;
                lockAttack = false;

            }

            stageFight();
            renderChoices();

            if (hasYourCharacter && hasEnemy) {
                $(".card").removeClass("clickable");
                lockChoices = true;
            }

        }

    })



    $("#attack").on("click", function() {
        if ($('.your-enemy').text() == '' || $('.your-player').text() == '') {
            $(".message-area").html("<p><strong>Stop it!!!</strong></p><p>There is no one to attack.</p>");
            return;
        }

        gameStarted = true;

        yourAttackPower = you.attack * counter;
        you.health -= enemy.attack;
        enemy.health -= yourAttackPower;
        counter++;

        $(".your-pts").html(you.health);
        $(".enemy-pts").html(enemy.health);

        $(".message-area").empty();
        $(".message-area").html("<p>You attacked " + enemy.name +
            " for " + yourAttackPower +
            ".</p><p>" + enemy.name +
            " attacked you back for " + enemy.attack +
            ".</p>");
        // console.log("attack #1", yourAttackPower);

        // if(you.health <= 0 && enemy.health <= 0){

        // 	$(".message-area").html("<p>Way to go...</p><p><strong>You're both dead.</strong></p>");

        // }

        if (enemy.health === 0 && characters.length === 0) {

            gameOver = true;
            endGame();

        }

        if (you.health <= 0) {

            $(".your-pts").html(you.health);
            $(".enemy-pts").html(enemy.health);
            $(".message-area").html("<p><strong>You've been defeated by " + enemy.name +
                "!</strong></p><p>Press the restart button to play again.</p>");
            roundIsOver = true;

        }

        if (roundIsOver && you.health <= 0 && enemy.health > 0) {

            $(".your-player").empty();
            $(".your-img").css("backgroundImage", "none");
            $(".your-pts").empty();

            you = "";
            hasYourCharacter = false;

        }

        if (enemy.health <= 0 && you.health > 0) {

            $(".your-pts").html(you.health);
            $(".enemy-pts").html(enemy.health);
            $(".message-area").html("<p><strong>You have defeated " + enemy.name +
                "!</strong></p><p>Please choose your next victim.");
            roundIsOver = true;
        }

        if (roundIsOver && enemy.health <= 0) {

            $(".your-enemy").empty();
            $(".enemy-img").css("backgroundImage", "none");
            $(".enemy-pts").empty();
            $(".card").addClass("clickable");

            enemy = "";
            lockChoices = false;
            hasEnemy = false;
            roundIsOver = false;

        }

        console.log(enemy, yourAttackPower);

    });


    function endGame() {

        if (gameOver) {

            $(".message-area").html("<p>Congrats! You have defeated all your peers.</p><p><strong>You are king of The Freenies!</strong></p>");

        }

    }

    endGame();
    renderChoices();

});
