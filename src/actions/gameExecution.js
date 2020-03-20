import readlineSync from 'readline-sync';
import { getText, getExpectedAnswer } from '../model/question.js';

const areEqual = (actual, expected) => {
  const actualLc = String(actual).toLocaleLowerCase();
  const expectedLc = String(expected).toLowerCase();
  return actualLc === expectedLc;
};

const playGame = (username, game) => {
  const rules = game.getRules();
  console.log(rules);
  const succToQuit = 3;
  const needAStreak = true;
  let successCount = 0;
  while (successCount < succToQuit) {
    const currentQuestion = game.generateQuestion();
    const questionText = getText(currentQuestion);
    const expected = getExpectedAnswer(currentQuestion);
    console.log(questionText);
    const actual = readlineSync.question('Your answer: ');
    const correct = areEqual(actual, expected);
    if (correct) {
      successCount += 1;
      console.log('Correct!');
    } else {
      if (needAStreak) successCount = 0;
      console.log(`"${actual}" is wrong answer ;(. Correct answer was "${expected}".`);
      console.log(`Let's try again, ${username}!`);
    }
  }
  console.log(`Congratulations, ${username}!`);
};

export default playGame;
