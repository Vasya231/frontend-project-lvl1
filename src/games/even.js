import randomInt from '../randomInt.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateQuestion = () => {
  const maxNum = 100;
  const randomNum = randomInt(maxNum);
  const expected = (randomNum % 2 === 0) ? 'yes' : 'no';
  const questionText = `${randomNum}`;
  return { questionText, expected };
};

export { description, generateQuestion };
