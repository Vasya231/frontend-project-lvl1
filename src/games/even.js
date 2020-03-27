import randomInt from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateGameRound = () => {
  const maxNum = 100;
  const randomNum = randomInt(maxNum);
  const answer = (randomNum % 2 === 0) ? 'yes' : 'no';
  const question = `${randomNum}`;
  return { question, answer };
};

export { description, generateGameRound };
