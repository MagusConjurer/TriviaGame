var seconds;
var running = true;
var hasClicked = false;
var timeUp = false;

var currentquote = {};
var selectedQuotes = [];
var correctAnswer = 0;
var incorrectAnswer = 0;
var noAnswer = 0;

quoteOne = {
    quote: "The wheel is come full circle.",
    answers: [
        {answer: "King Lear", isAnswer: true},
        {answer: "Winter's Tale", isAnswer: false},
        {answer: "Two Gentlemen of Verona", isAnswer: false},
        {answer: "Titus Andronicus", isAnswer: false}
    ]
};
quoteTwo = {
    quote: "Better three hours too soon than a minute too late.",
    answers: [
        {answer: "The Merry Wives of Windsor", isAnswer: true},
        {answer: "Troilus and Cressida", isAnswer: false},
        {answer: "All's Well That Ends Well", isAnswer: false},
        {answer: "King John", isAnswer: false}
    ]
};
quoteThree = {
    quote: "Cowards die many times before their deaths; The valiant never taste of death but once.",
    answers: [
        {answer: "Julius Ceasar", isAnswer: true},
        {answer: "Anthony and Cleopatra", isAnswer: false},
        {answer: "Twelfth Night", isAnswer: false},
        {answer: "Richard II", isAnswer: false}
    ]
};
quoteFour = {
    quote: "My words fly up, my thoughts remain below. Words without thoughts never to heaven go.",
    answers: [
        {answer: "Hamlet", isAnswer: true},
        {answer: "Winter's Tale", isAnswer: false},
        {answer: "Measure for Measure", isAnswer: false},
        {answer: "Henry VI, part 1", isAnswer: false}
    ]
};
quoteFive = {
    quote: "Brevity is the soul of wit.",
    answers: [
        {answer: "Hamlet", isAnswer: true},
        {answer: "Henry VI, part 2", isAnswer: false},
        {answer: "Twelfth Night", isAnswer: false},
        {answer: "King John", isAnswer: false}
    ]
};
quoteSix = {
    quote: "Men of few words are the best men",
    answers: [
        {answer: "Henry V", isAnswer: true},
        {answer: "Othello", isAnswer: false},
        {answer: "The Merchant of Venice", isAnswer: false},
        {answer: "Hamlet", isAnswer: false}
    ]
};
quoteSeven = {
    quote: "All that glitters is not gold.",
    answers: [
        {answer: "The Merchant of Venice", isAnswer: true},
        {answer: "The Comedy of Errors", isAnswer: false},
        {answer: "Richard II", isAnswer: false},
        {answer: "Cymbeline", isAnswer: false}
    ]
};
quoteEight = {
    quote: "Love all, trust a few, do wrong to none.",
    answers: [
        {answer: "All's Well That Ends Well", isAnswer: true},
        {answer: "Hamlet", isAnswer: false},
        {answer: "Macbeth", isAnswer: false},
        {answer: "Love's Labours Lost", isAnswer: false}
    ]
};
quoteNine = {
    quote: "Our doubts are traitors and make us lose the good we oft might win by fearing to attempt.",
    answers: [
        {answer: "Measure for Measure", isAnswer: true},
        {answer: "Henry VI, part 1", isAnswer: false},
        {answer: "Richard III", isAnswer: false},
        {answer: "Macbeth", isAnswer: false}
    ]
};
quoteTen = {
    quote: "I was seeking for a fool when I found you",
    answers: [
        {answer: "As You Like It", isAnswer: true},
        {answer: "Julius Caesar", isAnswer: false},
        {answer: "Timon of Athens", isAnswer: false},
        {answer: "Anthony and Cleopatra", isAnswer: false}
    ]
};
quoteEleven = {
    quote: "Out of my sight! Thou dost infect my eyes!",
    answers: [
        {answer: "Richard III", isAnswer: true},
        {answer: "Much Ado About Nothing", isAnswer: false},
        {answer: "Love's Labours Lost", isAnswer: false},
        {answer: "Henry VI, part 3", isAnswer: false}
    ]
};
quoteTwelve = {
    quote: "What, you egg!",
    answers: [
        {answer: "Macbeth", isAnswer: true},
        {answer: "The Tempest", isAnswer: false},
        {answer: "Hamlet", isAnswer: false},
        {answer: "The Merchant of Venice", isAnswer: false}
    ]
};
quoteThirteen = {
    quote: "I would challenge you to a battle of wits, but I see you are unarmed.",
    answers: [
        {answer: "The Taming of the Shrew", isAnswer: true},
        {answer: "Henry VI, part 1", isAnswer: false},
        {answer: "Romeo and Juliet", isAnswer: false},
        {answer: "The Merry Wives of Windsor", isAnswer: false}
    ]
};
quoteFourteen = {
    quote: "I am not bound to please thee with my answers.",
    answers: [
        {answer: "Merchant of Venice", isAnswer: true},
        {answer: "King John", isAnswer: false},
        {answer: "Othello", isAnswer: false},
        {answer: "Macbeth", isAnswer: false}
    ]
};
quoteFifteen = {
    quote: "Hell is empty. And all the devils are here.",
    answers: [
        {answer: "The Tempest", isAnswer: true},
        {answer: "Measure for Measure", isAnswer: false},
        {answer: "Henry V", isAnswer: false},
        {answer: "A Midsummer Night's Dream", isAnswer: false}
    ]
};

// Object for game
var trivia = {
    // quotes are objects
    quotes: [quoteOne,quoteTwo,quoteThree,quoteFour,quoteFive,
            quoteSix,quoteSeven,quoteEight,quoteNine,quoteTen,
            quoteEleven,quoteTwelve,quoteThirteen,quoteFourteen,quoteFifteen],

    // Function to select quote
    startGame : function(){
        this.selectQuotes();
        this.shuffleAnswers();
        this.runGame();
    },

    selectQuotes : function(){
        // Select 5 non-repeating random indexes
        var randNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        for(var i=0; i < this.quotes.length; i++){
            var index = Math.floor(Math.random() * (i + 1));
            [randNums[i], randNums[index]] = [randNums[index], randNums[i]];   
        };
        // Go through array of quotes
        for(var j=0; j < 5; j++){
            // Add 5 random quotes to a new array
            selectedQuotes.push(this.quotes[randNums[j]]);
        };
    },

    shuffleAnswers : function(){
        for(var i=0; i < selectedQuotes.length; i++){
            for(var j = 0; j < selectedQuotes[i].answers.length; j++){
                var index = Math.floor(Math.random() * (j));
                [selectedQuotes[i].answers[j], selectedQuotes[i].answers[index]] = [selectedQuotes[i].answers[index], selectedQuotes[i].answers[j]];  
            };
        };
    },

    runGame : function(){
        var i = 0;
        trivia.updatePage(selectedQuotes[i]);
        countdown();
        setTimeout(function(){
            trivia.showCorrect(selectedQuotes[i]);
        },16000);
        var round = setInterval(function(){
            i++;
            if(hasClicked == false){
                noAnswer++;
            };
            if(i === 5){
                clearInterval(round);
                trivia.showScore();
            } else if(i < 5){
                trivia.updatePage(selectedQuotes[i]);
                countdown();
                setTimeout(function(){
                    trivia.showCorrect(selectedQuotes[i]);
                },16000);
            };
            hasClicked = false;
        }, 20000);
    },

    // Function to update page with currentquote details
    updatePage : function(item){
         // Update the quote with selected quote
        $("#quote").html("\"" + item.quote + "\"");
        $("#answerOne").html(item.answers[0].answer).css("border","none");
        $("#answerTwo").html(item.answers[1].answer).css("border","none");
        $("#answerThree").html(item.answers[2].answer).css("border","none");
        $("#answerFour").html(item.answers[3].answer).css("border","none");
        var answers = item.answers;
        $(".answer").on("click", function(){
            var clicked = $(this).text();
            if(hasClicked == false && timeUp === false){
                for(var i = 0; i < answers.length; i++){
                    // Check answer and then hasClicked stops from selecting again
                    if(answers[i].answer === clicked && answers[i].isAnswer == true){
                        $(this).css("border", "solid 2px green");
                        hasClicked = true;
                        correctAnswer++;
                    } else if(answers[i].answer === clicked && answers[i].isAnswer == false){
                        $(this).css("border", "solid 2px red");
                        hasClicked = true;
                        incorrectAnswer++;
                    }; 
                };
            };            
        });
    },

    showCorrect : function(item){
        var answers = item.answers;
        if(timeUp == true){
            for(var j = 0; j < answers.length; j++){
                if(answers[j].isAnswer == true){
                    if(j == 0){
                        $("#answerOne").css("border", "solid 2px green");
                    };
                    if(j == 1){
                        $("#answerTwo").css("border", "solid 2px green");
                    };
                    if(j == 2){
                        $("#answerThree").css("border", "solid 2px green");
                    };
                    if(j == 3){
                        $("#answerFour").css("border", "solid 2px green");
                    };
                };
            };
        };
    },
    
    showScore : function(){
        $("#quote").empty();
        $("#answerOne").empty().css("border","none");
        $("#answerTwo").empty().css("border","none");
        $("#answerThree").empty().css("border","none");
        $("#answerFour").empty().css("border","none");
        var newGame = $("<button>").text("Try Again?").attr("id", "newGame").addClass("btn btn-dark");
        var totals = $("<h3>").html("Correct: " + correctAnswer + " | Wrong: " + incorrectAnswer + " | No Answer: " + noAnswer).attr("id", "score");
        $("#timer").after(newGame);
        $("#timer").append(totals);
        $("#newGame").on("click", function(){
            trivia.startGame();
            $("#score").remove();
            $("#newGame").remove();
        });
    }
};
    
function countdown(){
    seconds = 15;
    timeUp = false;
    $("#timer").text("Time remaining: " + seconds);
    var timer = setInterval(function(){
        if(seconds === 0){
            $("#timer").text("Time's Up!");
            timeUp = true;
            clearInterval(timer);
        };
        if(seconds > 0){
            seconds--;
            $("#timer").text("Time remaining: " + seconds);
        };
    },1000);
};

trivia.startGame();