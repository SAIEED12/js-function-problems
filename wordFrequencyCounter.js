/* Function name: wordFrequency(sentence)
Statement: Count how many times each word appears in a sentence and return the result as an object.
Rules:
Ignore case differences


Ignore extra spaces


Test case 1
Input: "I love JS and I love coding and JS is fun"
Output: { i: 2, love: 2, js: 2, and: 2, coding: 1, is: 1, fun: 1 }

Test case 2
Input:  " Hello hello HELLO "
Output: { hello: 3 }
 */

let sentence = "I love JS and I love coding and JS is fun FUN";
function wordFrequency(sentence){
    let words = sentence.split(" ");
    let totalWord = {};
    for(let i of words){
        let wordLowerCase = i.toLowerCase();
        if(totalWord.hasOwnProperty(wordLowerCase)){
            totalWord[wordLowerCase]++;
        }
        else{
            totalWord[wordLowerCase] = 1;
        }
    }
    return totalWord;
}

console.log(wordFrequency(sentence));