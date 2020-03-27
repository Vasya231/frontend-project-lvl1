import randomInt from '../utils.js';

const description = 'What number is missing in the progression?';

const generateGameRound = () => {
  const progression = [];
  const maxFirstNum = 100;
  const maxDiff = 30;
  const progressionLength = 10;
  const firstNum = randomInt(maxFirstNum);
  const diff = randomInt(maxDiff);
  const missing = randomInt(progressionLength - 1);
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstNum + (diff * i));
  }
  const answer = progression[missing];
  progression[missing] = '..';
  const question = progression.join(' ');
  return { question, answer };
};

export { description, generateGameRound };
