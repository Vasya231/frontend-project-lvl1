import randomInt from '../randomInt.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  const max = Math.max(num1, num2);
  const min = Math.min(num1, num2);
  const remainder = max % min;
  return (remainder === 0) ? min : getGCD(min, remainder);
};

const generateGameRound = () => {
  const maxNum = 100;
  // Надо бы генерацию поумнее сделать, почти всегда ответ 1 или 2.
  const randomNum1 = randomInt(maxNum);
  const randomNum2 = randomInt(maxNum);
  const answer = getGCD(randomNum1, randomNum2);
  const question = `${randomNum1} ${randomNum2}`;
  return { question, answer };
};

export { description, generateGameRound };
