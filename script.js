$(document).ready(function () {
    $("#wrongSpotContainer li").hide();
    $('#randomNumberContainer').hide();
});


function testCombination() {
    //Hides all list items that tell the user when a number is in the wrong spot
    $("#wrongSpotContainer li").hide();

    //True number is the number on the page
    let trueNumber = $('#firstNumber').html() + 
                     $('#secondNumber').html() + 
                     $('#thirdNumber').html() + 
                     $('#fourthNumber').html();

    //Test number is the numbers that you typed in the input boxes
    testNumber1 = $('#firstInput').val();
    testNumber2 = $('#secondInput').val();
    testNumber3 = $('#thirdInput').val();
    testNumber4 = $('#fourthInput').val();
    let testNumber = testNumber1 + testNumber2 + testNumber3 + testNumber4;

    //If the true and test numbers are equal
    if (trueNumber == testNumber) {
        //All inputboxes get a green border
        for (i = 0; i < 4; i++) {
            $('#inputContainer input[type=number]:nth-child(' + parseInt(i + 1) + ')').addClass('correctNumber');
            $('#inputContainer input[type=number]:nth-child(' + parseInt(i + 1) + ')').removeClass('wrongNumber');
            $('#inputContainer input[type=number]:nth-child(' + parseInt(i + 1) + ')').removeClass('add7pxBorder');
        }

        //Replace the title text with "You Win!"
        $('#title').html("You Win!");

        //If playAgainBox has a first child that is an input
        if ($('#playAgainBox input:first-child').exists() == true) {
            //Do nothing
        }
        //Otherwise
        else {
            //Add the play again button to playAgainBox
            $('#playAgainBox').append('<input type="submit" value="Play Again?">');
        }

        //Hide the guess button
        $('#guessButton').hide();
    }
    //otherwise
    else {
        for (i = 0; i < 4; i++) {
            //if true number[i] is equal to test number[i], highlight the i-th input box in green
            if (trueNumber[i] == testNumber[i]) {
                $('#inputContainer input[type=number]:nth-child(' + parseInt(i + 1) + ')').addClass('correctNumber');
                $('#inputContainer input[type=number]:nth-child(' + parseInt(i + 1) + ')').removeClass('wrongNumber');
                $('#inputContainer input[type=number]:nth-child(' + parseInt(i + 1) + ')').removeClass('add7pxBorder');
            }
            //if true number[i] is not equal to test number[i], highlight the i-th input box in red
            if (trueNumber[i] != testNumber[i]) {
                $('#inputContainer input[type=number]:nth-child(' + parseInt(i + 1) + ')').removeClass('correctNumber');
                $('#inputContainer input[type=number]:nth-child(' + parseInt(i + 1) + ')').addClass('wrongNumber');
                $('#inputContainer input[type=number]:nth-child(' + parseInt(i + 1) + ')').removeClass('add7pxBorder');
            }
            for (j = 0; j < 4; j++) {
                //If ith number you entered is equal to the true number for the jth spot
                //And the jth number you entered is incorrect
                //And the ith number you entered is incorrect
                if ((testNumber[i] == trueNumber[j]) && (testNumber[j] != trueNumber[j]) && (testNumber[i] != trueNumber[i])) {
                    //Used to make the first digit 1 instead of 0
                    let k = parseInt(i + 1);

                    //st for 1, nd for 2, rd for 3, th for 4
                    //Show the list item that tells the user that the number is in the wrong spot
                    switch (k) {
                        case 1:
                            $('#wrongSpotContainer li:nth-child(' + 1 + ')').show()
                            break;
                        case 2:
                            $('#wrongSpotContainer li:nth-child(' + 2 + ')').show()
                            break;
                        case 3:
                            $('#wrongSpotContainer li:nth-child(' + 3 + ')').show()
                            break;
                        case 4:
                            $('#wrongSpotContainer li:nth-child(' + 4 + ')').show()
                            break;
                        default:
                            break;
                    }
                }
            }
        }
    }
}
//A function that returns true if an element exists
jQuery.fn.exists = function () {
    return this.length > 0;
}