$(document).ready(function(){
    var totalScore = 0;
    var wins = 0;
    var losses = 0;
    var randomNumber = Math.floor(Math.random()*102+19);
    var blueNumber = Math.floor(Math.random()*13+1);
    var greenNumber = Math.floor(Math.random()*13+1);
    var pinkNumber = Math.floor(Math.random()*13+1);
    var orangeNumber = Math.floor(Math.random()*13+1);
    
    $("#wincount").text(wins);
    $("#losscount").text(losses);

    $("#start").click(function(){
        $("#random-numbers").append(randomNumber);
        $("#scoretotal").append(totalScore);
    });
    $("#blue").click(function(){
        $("#scoretotal").text(totalScore += blueNumber);
        if (totalScore === randomNumber) {
            alert("You win!");
            $("#wincount").text(wins += 1);
            $("#scoretotal").text(totalScore -= totalScore);
        }
        else if (totalScore >= randomNumber) {
            alert("You lose!");
            $("#losscount").text(losses += 1);
            $("#scoretotal").text(totalScore -= totalScore);
        }
    });
    $("#green").click(function(){
        $("#scoretotal").text(totalScore += greenNumber);
        if (totalScore === randomNumber) {
            alert("You win!");
            $("#wincount").text(wins += 1);
            $("#scoretotal").text(totalScore -= totalScore);
        }
        else if (totalScore >= randomNumber) {
            alert("You lose!");
            $("#losscount").text(losses += 1);
            $("#scoretotal").text(totalScore -= totalScore);
        }
    });
    $("#pink").click(function(){
        $("#scoretotal").text(totalScore += pinkNumber);
        if (totalScore === randomNumber) {
            alert("You win!");
            $("#wincount").text(wins += 1);
            $("#scoretotal").text(totalScore -= totalScore);
        }
        else if (totalScore >= randomNumber) {
            alert("You lose!");
            $("#losscount").text(losses += 1);
            $("#scoretotal").text(totalScore -= totalScore);
        }
    });
    $("#orange").click(function(){
        $("#scoretotal").text(totalScore += orangeNumber);
        if (totalScore === randomNumber) {
            alert("You win!");
            $("#wincount").text(wins += 1);
            $("#scoretotal").text(totalScore -= totalScore);
        }
        else if (totalScore >= randomNumber) {
            alert("You lose!");
            $("#losscount").text(losses += 1);
            $("#scoretotal").text(totalScore -= totalScore);
        }
    });
    
   
});
