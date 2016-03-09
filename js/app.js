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
    console.log('This is the random number:', Random);

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
            } else if (guessCompare2Answer >= 80) {
                $('#feedback').text("SUB-ZERO COLD!");
            } else if (guessCompare2Answer >= 70) {
                $('#feedback').text("ICE COLD");
            } else if (guessCompare2Answer >= 60) {
                $('#feedback').text("COOL");
            } else if (guessCompare2Answer >= 50) {
                $('#feedback').text("WARM");
            } else if (guessCompare2Answer >= 40) {
                $('#feedback').text("EVEN WARMER...");
            } else if (guessCompare2Answer >= 30) {
                $('#feedback').text("HOT!");
            } else if (guessCompare2Answer >= 20) {
                $('#feedback').text("ON FIRE!!");
            } else if (guessCompare2Answer >= 10) {
                $('#feedback').text("BLAZIN HEAT!");
            } else if (guessCompare2Answer >= 1) {
                $('#feedback').text("INFERNO FIRE HEAT!");
            } else if (guessCompare2Answer == 0) {
                $('#feedback').text("BINGO YOU GUESSED THE NUMBER!");
            }

        } else if (guessCount > 0) {

            if (guessCompare2Answer > previousCompare2Answer) {
                $('#feedback').text("OTHER WAY AROUND.");
            } else if (currentGuess == previousGuess) {
                $('#feedback').text("YOU PICKED THAT LAST TIME.");
            } else if (guessCompare2Answer < previousCompare2Answer && guessCompare2Answer >= 90) {
                $('#feedback').text("ON ANOTHER PLANET...");
            } else if (guessCompare2Answer < previousCompare2Answer && guessCompare2Answer >= 80) {
                $('#feedback').text("SUB-ZERO COLD!");
            } else if (guessCompare2Answer < previousCompare2Answer && guessCompare2Answer >= 70) {
                $('#feedback').text("ICE COLD");
            } else if (guessCompare2Answer < previousCompare2Answer && guessCompare2Answer >= 60) {
                $('#feedback').text("COOL");
            } else if (guessCompare2Answer < previousCompare2Answer && guessCompare2Answer >= 50) {
                $('#feedback').text("WARM");
            } else if (guessCompare2Answer < previousCompare2Answer && guessCompare2Answer >= 40) {
                $('#feedback').text("EVEN WARMER...");
            } else if (guessCompare2Answer < previousCompare2Answer && guessCompare2Answer >= 30) {
                $('#feedback').text("HOT!");
            } else if (guessCompare2Answer < previousCompare2Answer && guessCompare2Answer >= 20) {
                $('#feedback').text("ON FIRE!!");
            } else if (guessCompare2Answer < previousCompare2Answer && guessCompare2Answer >= 10) {
                $('#feedback').text("BLAZIN HEAT!");
            } else if (guessCompare2Answer < previousCompare2Answer && guessCompare2Answer >= 1) {
                $('#feedback').text("INFERNO FIRE HEAT!");
            } else if (guessCompare2Answer == 0) {
                $('#feedback').text("BINGO YOU GUESSED THE NUMBER!");
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
    });

});
