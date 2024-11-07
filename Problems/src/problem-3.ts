{
  /**
Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

Example:

Input: "I love typescript", "typescript"
Output: 1
// Sample Input:
countWordOccurrences("I love typescript", "typescript");

// Sample Output: 1;
 */

  function countWordOccurrences(param1: string, param2: string): number {
    let countLetter = 0;
    const sentence = param1.split(" ");
    for (const word of sentence) {
     
      if (word.toLocaleLowerCase()===param2.toLocaleLowerCase()) {
        countLetter = countLetter + 1;
        console.log(word)
      }
    }
    return countLetter;
  }

  const result =countWordOccurrences("I love typescript", "typescript");
  console.log(result);
}
