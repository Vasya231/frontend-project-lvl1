import readlineSync from 'readline-sync';

const generateAnswer = (question) => {
  const expected = question('expected');
  console.log(question('question'));
  const actual = readlineSync.question('Your answer: ');
  return (field) => {
    switch (field) {
      case 'actual': return actual;
      case 'expected': return expected;
      default: return null;
    }
  };
};

const resolve = (answer) => {
  const actual = answer('actual');
  const expected = answer('expected');
  const actualLc = String(actual).toLocaleLowerCase();
  const expectedLc = String(expected).toLowerCase();
  if (actualLc === expectedLc) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${actual}" is wrong answer ;(. Correct answer was "${expected}".`);
  return false;
};

const playGame = (user, game) => {
  game.displayRules();
  let successCount = 0;
  while (successCount < 3) {
    const correct = resolve(generateAnswer(game.generateQuestion()));
    if (correct) {
      successCount += 1;
    } else {
      successCount = 0;
      console.log(`Let's try again, ${user}!`);
    }
  }
  console.log(`Congratulations, ${user}!`);
};

export default playGame;
