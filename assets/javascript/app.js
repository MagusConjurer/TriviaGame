var trivia = {};
var seconds = 10;
var running = true;

function countdown(){
    seconds = 5;
    setInterval(function(){
        if(seconds >= 0){
            $("#timer").text(seconds);
            seconds--;
        }
        if(seconds === 0){
            clearInterval(seconds);
        }
    },1000);
};

countdown();