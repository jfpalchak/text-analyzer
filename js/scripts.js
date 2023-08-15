// Business Logic

// lesson function 1
function wordCounter(text) {
    
    if (text.trim().length === 0) {
        return 0;
    }
    
    let wordCount = 0;
    const textArray = text.split(' ');
    textArray.forEach(function(word) {
        if (!Number(element)) {
        wordCount++;
        }
    });
    return wordCount;
}

// lesson function 2
function numberOfOccurrencesInText(word, text) {
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
    
    let bool= false;

    offensiveWords.forEach(function(word) {
        if (text.includes(word)) {
            bool = true;
        } 
        //element.toLowerCase().includes(word.toLowerCase())
    });

    return bool;

    // if (text === "") {
    //     return "";
    // } 
    //     return text;
}

