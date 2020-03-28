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
        {answerOne: "King Lear", isAnswer: true},
        {answerTwo: "", isAnswer: false},
        {answerThree: "", isAnswer: false},
        {answerFour: "", isAnswer: false}
    ]
};
quoteTwo = {
    quote: "Better three hours too soon than a minute too late.",
    answers: [
        {answerOne: "The Merry Wives of Windsor", isAnswer: true},
        {answerTwo: "", isAnswer: false},
        {answerThree: "", isAnswer: false},
        {answerFour: "", isAnswer: false}
    ]
};
quoteThree = {
    quote: "Cowards die many times before their deaths; The valiant never taste of death but once.",
    answers: [
        {answerOne: "Julius Ceasar", isAnswer: true},
        {answerTwo: "", isAnswer: false},
        {answerThree: "", isAnswer: false},
        {answerFour: "", isAnswer: false}
    ]
};
quoteFour = {
    quote: "My words fly up, my thoughts remain below. Words without thoughts never to heaven go.",
    answers: [
        {answerOne: "Hamlet", isAnswer: true},
        {answerTwo: "", isAnswer: false},
        {answerThree: "", isAnswer: false},
        {answerFour: "", isAnswer: false}
    ]
};
quoteFive = {
    quote: "Brevity is the soul of wit.",
    answers: [
        {answerOne: "Hamlet", isAnswer: true},
        {answerTwo: "", isAnswer: false},
        {answerThree: "", isAnswer: false},
        {answerFour: "", isAnswer: false}
    ]
};
quoteSix = {
    quote: "Men of few words are the best men",
    answers: [
        {answerOne: "Henry V", isAnswer: true},
        {answerTwo: "", isAnswer: false},
        {answerThree: "", isAnswer: false},
        {answerFour: "", isAnswer: false}
    ]
};
quoteSeven = {
    quote: "All that glitters is not gold.",
    answers: [
        {answerOne: "The Merchant of Venice", isAnswer: true},
        {answerTwo: "", isAnswer: false},
        {answerThree: "", isAnswer: false},
        {answerFour: "", isAnswer: false}
    ]
};
quoteEight = {
    quote: "Love all, trust a few, do wrong to none.",
    answers: [
        {answerOne: "All's Well That Ends Well", isAnswer: true},
        {answerTwo: "", isAnswer: false},
        {answerThree: "", isAnswer: false},
        {answerFour: "", isAnswer: false}
    ]
};
quoteNine = {
    quote: "Our doubts are traitors and make us lose the good we oft might win by fearing to attempt.",
    answers: [
        {answerOne: "Measure for Measure", isAnswer: true},
        {answerTwo: "", isAnswer: false},
        {answerThree: "", isAnswer: false},
        {answerFour: "", isAnswer: false}
    ]
};
quoteTen = {
    quote: "I was seeking for a fool when I found you",
    answers: [
        {answerOne: "As You Like It", isAnswer: true},
        {answerTwo: "", isAnswer: false},
        {answerThree: "", isAnswer: false},
        {answerFour: "", isAnswer: false}
    ]
};
quoteEleven = {
    quote: "Out of my sight! Thou dost infect my eyes!",
    answers: [
        {answerOne: "Richard III", isAnswer: true},
        {answerTwo: "", isAnswer: false},
        {answerThree: "", isAnswer: false},
        {answerFour: "", isAnswer: false}
    ]
};
quoteTwelve = {
    quote: "What, you egg!",
    answers: [
        {answerOne: "Macbeth", isAnswer: true},
        {answerTwo: "", isAnswer: false},
        {answerThree: "", isAnswer: false},
        {answerFour: "", isAnswer: false}
    ]
};
quoteThirteen = {
    quote: "I would challenge you to a battle of wits, but I see you are unarmed.",
    answers: [
        {answerOne: "The Taming of the Shrew", isAnswer: true},
        {answerTwo: "", isAnswer: false},
        {answerThree: "", isAnswer: false},
        {answerFour: "", isAnswer: false}
    ]
};
quoteFourteen = {
    quote: "I am not bound to please thee with my answers.",
    answers: [
        {answerOne: "Merchant of Venice", isAnswer: true},
        {answerTwo: "", isAnswer: false},
        {answerThree: "", isAnswer: false},
        {answerFour: "", isAnswer: false}
    ]
};
quoteFifteen = {
    quote: "Hell is empty. And all the devils are here.",
    answers: [
        {answerOne: "The Tempest", isAnswer: true},
        {answerTwo: "", isAnswer: false},
        {answerThree: "", isAnswer: false},
        {answerFour: "", isAnswer: false}
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
        this.selectQuotes(this.quotes, selectedQuotes);
        console.log(selectedQuotes);
    },

    selectQuotes : function(quotes, selected){
        // Select 5 non-repeating random indexes
        var randNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        for(i=0; i < quotes.length; i++){
            var index = Math.floor(Math.random() * (i + 1));
            [randNums[i], randNums[index]] = [randNums[index], randNums[i]];
        }
        // Go through array of quotes
        for(i=0; i < 5; i++){
            // Add 5 random quotes to a new array
            selected.push(quotes[randNums[i]]);
        }
    },

    checkAnswer : function(){
        // Take clicked answer and check if it ids the answer

        // Highlight selected answer red or green base on isAnswer
    },

    // Function to update page with currentquote details
    updatePage : function(quote){
        // Start at index one of selected quotes

        // Change quote and answers elements
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