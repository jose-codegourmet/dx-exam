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
  console.log(`
    Sample output:
    ${SAMPLE_INPUT}
    \n
    Answer:
    ${output}
  `);
}

main();
