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

const playGame = (username, game) => {
  game.displayRules();
  let successCount = 0;
  const succToQuit = 3;
  const needAStreak = true;
  while (successCount < succToQuit) {
    const question = game.generateQuestion();
    const answer = generateAnswer(question);
    const correct = resolve(answer);
    if (correct) {
      successCount += 1;
    } else {
      if (needAStreak) successCount = 0;
      console.log(`Let's try again, ${username}!`);
    }
  }
  console.log(`Congratulations, ${username}!`);
};

export default playGame;
