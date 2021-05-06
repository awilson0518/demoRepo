<?php
    //Loads header
    include("gameHeader.html");

    //Creates random numbers
    $randomNumber1 = rand()%10;
    $randomNumber2 = rand()%10;
    $randomNumber3 = rand()%10;
    $randomNumber4 = rand()%10;

    //Gives the random numbers ids and places them in spans inside of a div
    echo("<div id=\"randomNumberContainer\">");
    echo("<span id=\"firstNumber\">$randomNumber1</span>");
    echo("<span id=\"secondNumber\">$randomNumber2</span>");
    echo("<span id=\"thirdNumber\">$randomNumber3</span>");
    echo("<span id=\"fourthNumber\">$randomNumber4</span>");
    echo("</div>");

    //Loads footer
    include("gameFooter.html");
?>
