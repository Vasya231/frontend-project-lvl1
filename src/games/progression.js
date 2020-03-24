import randomInt from '../randomInt.js';

const description = 'What number is missing in the progression?';

const generateQuestion = () => {
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
  const expected = progression[missing];
  progression[missing] = '..';
  const text = progression.join(' ');
  return { text, expected };
};

export { description, generateQuestion };
