$(document).ready(function() {

    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    var Random = randomNumber(1, 100);
    console.log(Random);

    var guessCount = 0;

    $("#guessForm").submit(function(e) {
        e.preventDefault();
    });

    var previousGuess;


    $('#guessForm').submit(function() {

        var currentGuess = $('#userGuess').val();
        var guessCompare2Answer = Math.abs(currentGuess - Random);
        var previousCompare2Answer = Math.abs(previousGuess - Random);

        if (guessCount == 0) {

            if (guessCompare2Answer >= 90) {

                $('#feedback').text("ON ANOTHER PLANET...");
                console.log("ON ANOTHER PLANET...");
            } else if (guessCompare2Answer < 90 && guessCompare2Answer >= 80) {

                $('#feedback').text("SUB-ZERO COLD!");
                console.log("SUB-ZERO COLD!");
            } else if (guessCompare2Answer < 80 && guessCompare2Answer >= 70) {

                $('#feedback').text("ICE COLD");
                console.log("ICE COLD");

            } else if (guessCompare2Answer < 70 && guessCompare2Answer >= 60) {

                $('#feedback').text("COOL");
                console.log("COOL");

            } else if (guessCompare2Answer < 60 && guessCompare2Answer >= 50) {

                $('#feedback').text("WARM");
                console.log("WARM");
            } else if (guessCompare2Answer < 50 && guessCompare2Answer >= 40) {

                $('#feedback').text("EVEN WARMER...");
                console.log("EVEN WARMER...");
            } else if (guessCompare2Answer < 40 && guessCompare2Answer >= 30) {

                $('#feedback').text("HOT!");
                console.log("HOT!");
            } else if (guessCompare2Answer < 30 && guessCompare2Answer >= 20) {

                $('#feedback').text("ON FIRE!!");
                console.log("ON FIRE!!");
            } else if (guessCompare2Answer < 20 && guessCompare2Answer >= 10) {

                $('#feedback').text("BLAZIN HEAT!");
                console.log("BLAZIN HEAT!");
            } else if (guessCompare2Answer < 10 && guessCompare2Answer >= 1) {

                $('#feedback').text("INFERNO FIRE HEAT!");
                console.log("INFERNO FIRE HEAT!");
            } else if (guessCompare2Answer == 0) {

                $('#feedback').text("BINGO YOU GUESSED THE NUMBER!");
                console.log("BINGO YOU GUESSED THE NUMBER!");

            }

        } else if (guessCount > 0) {

            if (guessCompare2Answer > previousCompare2Answer) {

                $('#feedback').text("OTHER WAY AROUND.");
            } else if (currentGuess == previousGuess) {

                $('#feedback').text("YOU PICKED THAT LAST TIME.");
                console.log("YOU PICKED THAT LAST TIME.");
            } else if (guessCompare2Answer < previousCompare2Answer && guessCompare2Answer >= 90) {

                $('#feedback').text("ON ANOTHER PLANET...");
                console.log("ON ANOTHER PLANET...");
            } else if (guessCompare2Answer < previousCompare2Answer && guessCompare2Answer < 90 && guessCompare2Answer >= 80) {

                $('#feedback').text("SUB-ZERO COLD!");
                console.log("SUB-ZERO COLD!");
            } else if (guessCompare2Answer < previousCompare2Answer && guessCompare2Answer < 80 && guessCompare2Answer >= 70) {

                $('#feedback').text("ICE COLD");
                console.log("ICE COLD");

            } else if (guessCompare2Answer < previousCompare2Answer && guessCompare2Answer < 70 && guessCompare2Answer >= 60) {

                $('#feedback').text("COOL");
                console.log("COOL");

            } else if (guessCompare2Answer < previousCompare2Answer && guessCompare2Answer < 60 && guessCompare2Answer >= 50) {

                $('#feedback').text("WARM");
                console.log("WARM");
            } else if (guessCompare2Answer < previousCompare2Answer && guessCompare2Answer < 50 && guessCompare2Answer >= 40) {

                $('#feedback').text("EVEN WARMER...");
                console.log("EVEN WARMER...");
            } else if (guessCompare2Answer < previousCompare2Answer && guessCompare2Answer < 40 && guessCompare2Answer >= 30) {

                $('#feedback').text("HOT!");
                console.log("HOT!");
            } else if (guessCompare2Answer < previousCompare2Answer && guessCompare2Answer < 30 && guessCompare2Answer >= 20) {

                $('#feedback').text("ON FIRE!!");
                console.log("ON FIRE!!");
            } else if (guessCompare2Answer < previousCompare2Answer && guessCompare2Answer < 20 && guessCompare2Answer >= 10) {

                $('#feedback').text("BLAZIN HEAT!");
                console.log("BLAZIN HEAT!");
            } else if (guessCompare2Answer < previousCompare2Answer && guessCompare2Answer < 10 && guessCompare2Answer >= 1) {

                $('#feedback').text("INFERNO FIRE HEAT!");
                console.log("INFERNO FIRE HEAT!");
            } else if (guessCompare2Answer == 0) {

                $('#feedback').text("BINGO YOU GUESSED THE NUMBER!");
                console.log("BINGO YOU GUESSED THE NUMBER!");

            }
        }

        guessCount++;
        $('#count').text(guessCount);

        var listGuess = document.createElement("li");
        listGuess.innerHTML = currentGuess;
        $('#guessList').append(listGuess);

        previousGuess = currentGuess;

        $('#userGuess').val("");
    });

    $('.new').click(function() {
        Random = randomNumber(1, 100);
        $('#guessList').empty();
        $('#feedback').text("Make your Guess!");
        guessCount = 0;
        $('#count').text("0");
        console.log(Random);
    });

});
