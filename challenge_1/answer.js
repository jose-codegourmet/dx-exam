// Given a sentence with multiple lowercase words separated by spaces, write a Javascript function that finds and returns the longest word in the sentence. If there are multiple words of the same length, choose one that has the highest number of vowels. Ignore any character in the sentence that is not an English letter or a space. Find the most efficient way to achieve this.
// Sample input:

// “Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers” (Socrates)

// Sample output:
// “experience”

// Note: Longest words are “everything” and “experience”, but the second has the most vowels

const SAMPLE_INPUT = `Smart people learn from everything and everyone, average  people from their experience, stupid people already, have all the answers`;

function longestWord(sentence) {
  return (
    sentence
      .toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .split(" ")
      // removes white spaces
      .filter(Boolean)
      // comparison
      .reduce((w1, w2) => {
        // if not equal
        if (w1.length !== w2.length) {
          return w1.length > w2.length ? w1 : w2;
        }
        // if equal count vowels
        const countVowels = (str) => str.match(/[aeiou]/gi)?.length ?? 0;
        return countVowels(w1) >= countVowels(w2) ? w1 : w2;
      })
  );
}

function main() {
  const output = longestWord(SAMPLE_INPUT);
  console.log(output);
}

main();
