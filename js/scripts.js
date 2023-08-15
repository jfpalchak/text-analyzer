// Business Logic

// lesson function 1
function wordCounter(text) {
    
    if (text.trim().length === 0) {
        return 0;
    }
    
    let wordCount = 0;
    const textArray = text.split(' ');
    textArray.forEach(function(element) {
        if (!Number(element)) {
        wordCount++;
        }
    });
    return wordCount;
}

// lesson function 2
function numberOfOccurrencesInText(word, text) {
    if (word.trim().length === 0) {
        // if, after being trimmed, the word has NO characters in it:
        return 0;
    }
    
    const textArray = text.split(' ');
    let wordCount = 0;

    textArray.forEach(function(element) {

        // if an element in the text array (such as "red.") includes 
        // the word we are searching for ("red"),
        // wordCount will be incremented
        if (element.toLowerCase().includes(word.toLowerCase())){
            wordCount++;
        }
    });

    return wordCount;
}

// practice function 1 - offensive word remover
// This is the version of the function that solves Test 4.
// function omitOffensiveWords(text) {
//     const offensiveWords = ['zoinks', 'muppeteer', 'biffaroni', 'loopdaloop'];
    
//     let bool= false;

//     offensiveWords.forEach(function(word) {
//         if (text.includes(word)) {
//             bool = true;
//         } 

//     });

//     return bool;

// }

function omitOffensiveWords(text) {
    // const textArray = text.split(" ");
    const offensiveWords = ['zoinks', 'muppeteer', 'biffaroni', 'loopdaloop'];
    
    let newText = text;

    offensiveWords.forEach(function(word) {

        // could instead use IF to compare textArray word to badwords,
        // if word isn't bad, push to new array, if it is bad, ignore word
        // recreate new array without bad words
        if (text.toLowerCase().includes(word.toLowerCase())) {
            newText = text.replace(word, "").replace("  ", " ");
        } 
    });

    return newText;
}

// UI Logic

function boldPassage(word, text) {
    // if empty string is sent, return null
    if ((text.trim().length === 0) || (word.trim().length ===0)) {
        return null;
    }

    const p = document.createElement('p');
    let textArray = text.split(" ");
    textArray.forEach(function(element, index) {
        if (word === element) {
            const bold = document.createElement('strong');
            bold.append(element);
            p.append(bold);
        } else {
            p.append(element);
        }
        if (index !== (textArray.length -1)) {
            p.append(" ");
        }
    });

    return p;
}

function handleFormSubmission () {
    event.preventDefault();

    const passage = document.getElementById("text-passage").value;
    const word = document.getElementById("word").value;
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    document.getElementById("total-count").innerText = wordCount;
    document.getElementById("selected-count").innerText = occurrencesOfWord;

    let boldedPassage = boldPassage(word, passage);
    if (boldedPassage) {
        document.querySelector("div#bolded-passage").append(boldedPassage);
    } else {
        document.querySelector("div#bolded-passage").innerText = null;
    }
}

window.addEventListener("load", function() {
    document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});
