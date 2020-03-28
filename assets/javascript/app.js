var seconds;
var running = true;

var currentquote = {};
var selectedQuotes = [];
var correctAnswer = 0;
var incorrectAnswer = 0;
var noAnswer = 0;

quoteOne = {
    quote: "The wheel is come full circle.",
    answers: [
        {answer: "King Lear", isAnswer: true},
        {answer: "", isAnswer: false},
        {answer: "", isAnswer: false},
        {answer: "", isAnswer: false}
    ]
};
quoteTwo = {
    quote: "Better three hours too soon than a minute too late.",
    answers: [
        {answer: "The Merry Wives of Windsor", isAnswer: true},
        {answer: "", isAnswer: false},
        {answer: "", isAnswer: false},
        {answer: "", isAnswer: false}
    ]
};
quoteThree = {
    quote: "Cowards die many times before their deaths; The valiant never taste of death but once.",
    answers: [
        {answer: "Julius Ceasar", isAnswer: true},
        {answer: "", isAnswer: false},
        {answer: "", isAnswer: false},
        {answer: "", isAnswer: false}
    ]
};
quoteFour = {
    quote: "My words fly up, my thoughts remain below. Words without thoughts never to heaven go.",
    answers: [
        {answer: "Hamlet", isAnswer: true},
        {answer: "", isAnswer: false},
        {answer: "", isAnswer: false},
        {answer: "", isAnswer: false}
    ]
};
quoteFive = {
    quote: "Brevity is the soul of wit.",
    answers: [
        {answer: "Hamlet", isAnswer: true},
        {answer: "", isAnswer: false},
        {answer: "", isAnswer: false},
        {answer: "", isAnswer: false}
    ]
};
quoteSix = {
    quote: "Men of few words are the best men",
    answers: [
        {answer: "Henry V", isAnswer: true},
        {answer: "", isAnswer: false},
        {answer: "", isAnswer: false},
        {answer: "", isAnswer: false}
    ]
};
quoteSeven = {
    quote: "All that glitters is not gold.",
    answers: [
        {answer: "The Merchant of Venice", isAnswer: true},
        {answer: "", isAnswer: false},
        {answer: "", isAnswer: false},
        {answer: "", isAnswer: false}
    ]
};
quoteEight = {
    quote: "Love all, trust a few, do wrong to none.",
    answers: [
        {answer: "All's Well That Ends Well", isAnswer: true},
        {answer: "", isAnswer: false},
        {answer: "", isAnswer: false},
        {answer: "", isAnswer: false}
    ]
};
quoteNine = {
    quote: "Our doubts are traitors and make us lose the good we oft might win by fearing to attempt.",
    answers: [
        {answer: "Measure for Measure", isAnswer: true},
        {answer: "", isAnswer: false},
        {answer: "", isAnswer: false},
        {answer: "", isAnswer: false}
    ]
};
quoteTen = {
    quote: "I was seeking for a fool when I found you",
    answers: [
        {answer: "As You Like It", isAnswer: true},
        {answer: "", isAnswer: false},
        {answer: "", isAnswer: false},
        {answer: "", isAnswer: false}
    ]
};
quoteEleven = {
    quote: "Out of my sight! Thou dost infect my eyes!",
    answers: [
        {answer: "Richard III", isAnswer: true},
        {answer: "", isAnswer: false},
        {answer: "", isAnswer: false},
        {answer: "", isAnswer: false}
    ]
};
quoteTwelve = {
    quote: "What, you egg!",
    answers: [
        {answer: "Macbeth", isAnswer: true},
        {answer: "", isAnswer: false},
        {answer: "", isAnswer: false},
        {answer: "", isAnswer: false}
    ]
};
quoteThirteen = {
    quote: "I would challenge you to a battle of wits, but I see you are unarmed.",
    answers: [
        {answer: "The Taming of the Shrew", isAnswer: true},
        {answer: "", isAnswer: false},
        {answer: "", isAnswer: false},
        {answer: "", isAnswer: false}
    ]
};
quoteFourteen = {
    quote: "I am not bound to please thee with my answers.",
    answers: [
        {answer: "Merchant of Venice", isAnswer: true},
        {answer: "", isAnswer: false},
        {answer: "", isAnswer: false},
        {answer: "", isAnswer: false}
    ]
};
quoteFifteen = {
    quote: "Hell is empty. And all the devils are here.",
    answers: [
        {answer: "The Tempest", isAnswer: true},
        {answer: "", isAnswer: false},
        {answer: "", isAnswer: false},
        {answer: "", isAnswer: false}
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
        this.updatePage(selectedQuotes[0]);
    
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

    // Function to update page with currentquote details
    updatePage : function(item){
         // Update the quote with selected quote
        $("#quote").html("\"" + item.quote + "\"");
        $("#answerOne").html(item.answers[0].answer);
        $("#answerTwo").html(item.answers[1].answer);
        $("#answerThree").html(item.answers[2].answer);
        $("#answerFour").html(item.answers[3].answer);
        var answers = item.answers;
        var hasClicked = false;
        $(".answer").on("click", function(){
            var clicked = $(this).text();
            if(hasClicked == false){
                for(var i = 0; i < answers.length; i++){
                    if(answers[i].answer === clicked && answers[i].isAnswer == true){
                        $(this).css("border", "solid 2px green");
                        hasClicked = true;
                    } else if(answers[i].answer === clicked && answers[i].isAnswer == false){
                        $(this).css("border", "solid 2px red");
                        hasClicked = true;
                    };
                };
            };            
        });
    } 
};
    
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

trivia.startGame();
countdown();