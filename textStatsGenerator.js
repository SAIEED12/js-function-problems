/* Function name: textStats(text)
Statement:
 Return an object containing:

Characters count excluding spaces

Words count

Vowels count

Consonants count


Test case 1
Input:
 "JavaScript is fun to learn"
Output:
{ characters: 22, words: 5, vowels: 8, consonants: 14 }

Test case 2
Input:
 " I am OK "
Output:
{ characters: 5, words: 3, vowels: 3, consonants: 2 }

 */

function textStats(text) {
  let characters = 0;
  let vowels = 0;
  let consonants = 0;
  let lowerText = (text.toLowerCase()).trim();

  for (let i of lowerText) {
    if (i >= "a" && i <= "z") {
      characters++;
      if ("aeiou".includes(i)) {
        vowels++;
      } else {
        consonants++;
      }
    }
  }
  let words = lowerText.split(" ").length;

  return {
    characters,
    words,
    vowels,
    consonants,
  };
}

console.log(textStats("JavaScript is fun to learn"));
console.log(textStats( " I am OK "));
