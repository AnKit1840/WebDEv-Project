var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern=[];

var start=false;
var level=1;

$(document).keypress(function(){
    if(!start){
        $("#level-title").text("level  "+ level);

        setTimeout(function(){
            nextSequence();
        },1000)
        start=true;
    }
});

function nextSequence(){

    userClickedPattern=[];
    // level++;
   
    $("#level-title").text("level  "+ level++);

    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColor=buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeOut(50).fadeIn(50);
    playSound(randomChosenColor);
 
}



$(".btn").on("click", function(){
    var userChosenColour=this.id;
    $("#"+userChosenColour).fadeOut(50).fadeIn(50);
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
});



function playSound(name){
    switch(name){
        case "blue":
            var b=new Audio("sounds/blue.mp3")
            b.play();
            break;
        case "green":
            var g=new Audio("sounds/green.mp3")
            g.play();
            break;
        case "red":
            var r=new Audio("sounds/red.mp3")
            r.play();
            break;
        case "yellow":
            var y=new Audio("sounds/yellow.mp3")
            y.play();
            break;
        case "wrong":
            var w=new Audio("sounds/wrong.mp3")
            w.play();
            break;
    }
}


function animatePress(currentColour){
        $("#"+currentColour).addClass("pressed");

        setTimeout(function(){
         $("#"+currentColour).removeClass("pressed");
        },50)
}


function checkAnswer(currentLevel){
        if(gamePattern[currentLevel]==userClickedPattern[currentLevel]){
                // console.log("success");

            if(gamePattern.length==userClickedPattern.length){


                setTimeout(function(){
                    nextSequence();
                }, 1000)
            }
        }
        else{
            GameOver();
        }
}

function GameOver(){
    playSound("wrong");
    $("body").addClass("game-over");
    $("h1").text("Game Over, Press Any Key to Restart");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },200)
   
   startOver();
}

function startOver(){
    // console.log("2");
    level=1;
    start=false;
    userClickedPattern=[];
    gamePattern=[];
}

