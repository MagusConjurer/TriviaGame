var seconds;
var running = true;

currentquote = {};
correctAnswer = 0;
incorrectAnswer = 0;
noAnswer = 0;

// Object for game
var trivia = {
    // quotes are objects
    quoteOne: {
        quote: "",
        answers: [
            {answerOne: "", isAnswer: true},
            {answerTwo: "", isAnswer: true},
            {answerThree: "", isAnswer: false},
            {answerFour: "", isAnswer: false}
        ]
    },
    quoteTwo: {
        quote: "",
        answers: [
            {answerOne: "", isAnswer: true},
            {answerTwo: "", isAnswer: true},
            {answerThree: "", isAnswer: false},
            {answerFour: "", isAnswer: false}
        ]
    },
    quoteThree: {
        quote: "",
        answers: [
            {answerOne: "", isAnswer: true},
            {answerTwo: "", isAnswer: true},
            {answerThree: "", isAnswer: false},
            {answerFour: "", isAnswer: false}
        ]
    },
    quoteFour: {
        quote: "",
        answers: [
            {answerOne: "", isAnswer: true},
            {answerTwo: "", isAnswer: true},
            {answerThree: "", isAnswer: false},
            {answerFour: "", isAnswer: false}
        ]
    },
    quoteFive: {
        quote: "",
        answers: [
            {answerOne: "", isAnswer: true},
            {answerTwo: "", isAnswer: true},
            {answerThree: "", isAnswer: false},
            {answerFour: "", isAnswer: false}
        ]
    },
    quoteSix: {
        quote: "",
        answers: [
            {answerOne: "", isAnswer: true},
            {answerTwo: "", isAnswer: true},
            {answerThree: "", isAnswer: false},
            {answerFour: "", isAnswer: false}
        ]
    },
    quoteSeven: {
        quote: "",
        answers: [
            {answerOne: "", isAnswer: true},
            {answerTwo: "", isAnswer: true},
            {answerThree: "", isAnswer: false},
            {answerFour: "", isAnswer: false}
        ]
    },
    quoteEight: {
        quote: "",
        answers: [
            {answerOne: "", isAnswer: true},
            {answerTwo: "", isAnswer: true},
            {answerThree: "", isAnswer: false},
            {answerFour: "", isAnswer: false}
        ]
    },
    quoteNine: {
        quote: "",
        answers: [
            {answerOne: "", isAnswer: true},
            {answerTwo: "", isAnswer: true},
            {answerThree: "", isAnswer: false},
            {answerFour: "", isAnswer: false}
        ]
    },
    quoteTen: {
        quote: "",
        answers: [
            {answerOne: "", isAnswer: true},
            {answerTwo: "", isAnswer: true},
            {answerThree: "", isAnswer: false},
            {answerFour: "", isAnswer: false}
        ]
    },
    quoteEleven: {
        quote: "",
        answers: [
            {answerOne: "", isAnswer: true},
            {answerTwo: "", isAnswer: true},
            {answerThree: "", isAnswer: false},
            {answerFour: "", isAnswer: false}
        ]
    },
    quoteTwelve: {
        quote: "",
        answers: [
            {answerOne: "", isAnswer: true},
            {answerTwo: "", isAnswer: true},
            {answerThree: "", isAnswer: false},
            {answerFour: "", isAnswer: false}
        ]
    },
    quoteThirteen: {
        quote: "",
        answers: [
            {answerOne: "", isAnswer: true},
            {answerTwo: "", isAnswer: true},
            {answerThree: "", isAnswer: false},
            {answerFour: "", isAnswer: false}
        ]
    },
    quoteFourteen: {
        quote: "",
        answers: [
            {answerOne: "", isAnswer: true},
            {answerTwo: "", isAnswer: true},
            {answerThree: "", isAnswer: false},
            {answerFour: "", isAnswer: false}
        ]
    },
    quoteFifteen: {
        quote: "",
        answers: [
            {answerOne: "", isAnswer: true},
            {answerTwo: "", isAnswer: true},
            {answerThree: "", isAnswer: false},
            {answerFour: "", isAnswer: false}
        ]
    },
    // Arrray of those objects
    quote: [],
    // Function to select quote

    selectquotes : function(arr){
        // Go through array of quotes
    },

    checkAnswer : function(){
        // Take clicked answer and check if it is the answer
        // Highlight selected answer red or green base on isAnswer
    },

    // Function to update page with currentquote details
    updatePage : function(){
        //
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

countdown();