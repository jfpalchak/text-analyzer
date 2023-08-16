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

Test 7: "If an empty string is passed in as a word, it should return 0."
Code:
    const word = "";
    const text = "red RED Red!";
    numberOfOccurrencesInTest(word, text);
Expected Output: 0

##### **Describe:** boldPassage() // UI LOGIC //

Test 1: "It should return null if no word or text is entered."
Code:
    const text = "";
    const word = "";
    boldPassage(word, text);
Expected Output: null

Test 2: "It should return a non-matching word in a p tag."
Code: 
    const word = "hello";
    const text = "yo";
    boldPassage(word, text);
Expected Output: <p>yo</p>

Test 3: "It should return a matching word in a strong tag."
Code:
    const word = "hello";
    const text = "hello";
    boldPassage(word, text);
Expected Output: <p><strong>hello</strong><p>

Test 4: "It should wrap words that match in strong tages but not words that don't."
Code:
    const word = "hello";
    const text = "hello there";
    boldPassage(word, text);
Expected Output: <p><strong>hello</strong> there</p>

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

##### **Describe:** countForEachWord()

Test 1: "It should return null if an empty string is passed through."
Code:
    const text = "";
    countForEachWord(text);
Expected Output: null

Test 2: "If the text contains one word, it should return a count of 1, alongside the respective word."
Code:
    const text = "word";
    countForEachWord(text);
Expected Output: "word: 1"

Test 3: "If the text contains two different words, it should create a list of each word, and a list for each word's occurrence."
Code:
    const text = "one two";
    countForEachWord(text);
Expected Output:    array1 ['one', 'two']
                    array2 [1, 1]

Test 4: "If the text contains multiple of the same word, it should create a list containing that one word, and a second list containing the number of the words occurrence."
Code:
    const text = "word word word";
    countForEachWord(text);
Expected Output:    array1 ['word']
                    array2 [3]

Test 5: "It should return one array, where each element is a word and its number of occurrences throughout a string of text."
Code:
    const text = "word word word count count hello";
    countForEachWord(text);
Expected Output: ["word: 3", "count: 2", "hello: 1"]

Test 6: "It should return one array, which contains objects whose properties are the words and their number of occurrences throughout a string of text."
Code:
    const text = "word word word count count hello";
    countForEachWord(text);
Expected Output: [{word: word, count: 3}, {word: count, count: 2}, {word: hello, count: 1}]

Test 7: "It should return the array of word counts, in descending order."
Code:
    const text = "word word another hello hello hello";
    countForEachWord(text);
Expected Output: [{word: hello, count: 3}, {word: word, count: 2}, {word: another, count: 1}]

Test 8: "It should return the array, and ignore the case of each word."
Code:
    const text = "word Word another HELLO hello hello";
    countForEachWord(text);
Expected Output: [{word: hello, count: 3}, {word: word, count: 2}, {word: another, count: 1}]

