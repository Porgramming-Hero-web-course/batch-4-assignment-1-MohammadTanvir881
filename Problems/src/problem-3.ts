{
  /**
  Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

// Sample Input:
countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");

// Sample Output:
2;
 */

  function countWordOccurrences(param1: string, param2: string): number {
    let countLetter = 0;
    const sentence = param1.split(" ");
    for (const word of sentence) {
      const cleanWord = word.replace(/[^\w\s]|_/g, "").toLowerCase(); // remove special character from words
      if (cleanWord.includes(param2.toLocaleLowerCase())) {
        countLetter = countLetter + 1;
      }
    }
    return countLetter;
  }

  const result = countWordOccurrences(
    "TypeScript is great. I love TypeScript!",
    "typescript"
  );
  console.log(result);
}
