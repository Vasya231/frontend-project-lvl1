import readlineSync from 'readline-sync';

const generateAnswer = (question, expectedParam) => {
  const expected = expectedParam;
  const expectedLc = String(expected).toLowerCase();
  console.log(question);
  const actual = readlineSync.question('Your answer: ');
  const actualLc = String(actual).toLocaleLowerCase();

  return (command) => {
    switch (command) {
      case 'actual': return actual;
      case 'expected': return expected;
      default:
        if (actualLc === expectedLc) {
          console.log('Correct!');
          return true;
        }
        console.log(`"${actual}" is wrong answer ;(. Correct answer was "${expected}".`);
        return false;
    }
  };
};

export default generateAnswer;
