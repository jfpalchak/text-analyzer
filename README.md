### TESTING

##### **Describe:** wordCounter()

Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1

Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2

Test: "It should return 0 for an empty string."
Code: wordCounter("");
Expected Output: 0

Test: "It should return 0 for a string that is only spaces."
Code: wordCounter("            ");
Expected Output: 0

Test: "It should not count numbers as words."
Code: wordCounter("hi there 77 19");
Expected Output: 2

##### **Describe:** numberOfOccurrencesInText()

Test 1: "It should return 0 occurrences of a word for an empty string."
Code:
    const text = "";
    const word = "red";
    numberOfOccurrencesInText(word, text);
Expected Output: 0

Test 2: "It should return 1 occurrence of a word when the word and the text are the same."
Code:
    const text = "red";
    const word = "red";
    numberOfOccurrencesInText(word, text);
Expected Output: 1

Test 3: "It should return 0 occurrences of a word when the word and the text are different."
Code:
    const text = "red";
    const word = "blue";
    numberOfOccurrencesInText(word, text);
Expected Output: 0

Test 4: "It should return the number of occurrences of a word."
Code:
    const text = "red blue red red red green";
    const word = "red";
    numberOfOccurrencesInText(word, text);
Expected Output: 4

Test 5: "It should return a word match regardless of case."
Code:
    const text = "red RED REd green Green GREEN";
    const word = "Red";
    numberOfOccurrencesInText(word, text);
Expected Output: 3

Test 6: "It should return a word match regardless of punctuation."
Code:
    const text = "Red! Red. I like red, green, and yellow.";
    const word = "Red";
    numberOfOccurrencesInText(word, text);
Expected Output: 3

##### **Describe:** omitOffensiveWords()

Test 1: "If text is empty, it should return an empty string."
Code:
    omitOffensiveWords("");
Expected Output: ""

Test 2: "If there is text, return the text."
Code:
    const text = "text";
    omitOffensiveWords(text);
Expected Output: "text";

Test 3: "Returns true if offensive word 'zoinks' is present."
Code:
    const oneBadWord = "zoinks";
    omitOffensiveWords(text);
Expected Output: true

Test 4: "Returns true if offensive words are present, otherwise return false."
Code:
    const text = "zoinks";
    const offensiveWords = ['zoinks', 'muppeteer', 'biffaroni', 'loopdaloop'];
    omitOffensiveWords(text);
Expected Outcome: true

Test 5: "It should remove offensive words and return a new string without the offensive words."
Code:
    const text = "You are a zoinks cat.";
    omitOffensiveWords(text);
Expected Output: "You are a cat."

/*DID NOT COMPLETE*/
Test 6: "Removes and replaces offensive words, regardless of case."
Code:
    const text = "You are a ZOINKS cat.";
    omitOffensiveWords(text);
Expected Output: 



