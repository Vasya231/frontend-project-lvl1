import randomInt from '../randomInt.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 1) return false;
  for (let i = 2; i <= num / 2; i += 1) {
    if ((num % i) === 0) return false;
  }
  return true;
};

const generateQuestion = () => {
  const maxNum = 99;
  const randomNum = randomInt(Math.floor((maxNum - 1) / 2)) * 2 + 1;
  const expected = (isPrime(randomNum)) ? 'yes' : 'no';
  const question = `${randomNum}`;
  return [question, expected];
};

export { description, generateQuestion };
