import { createQuestion } from '../model/question.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  let max = Math.max(num1, num2);
  let divisor = Math.min(num1, num2);
  let result = max % divisor;
  while (result !== 0) {
    max = divisor;
    divisor = result;
    result = max % divisor;
  }
  return divisor;
};

const generateQuestion = () => {
  const maxNum = 100;
  // Надо бы генерацию поумнее сделать, почти всегда ответ 1 или 2.
  const randomNum1 = Math.round(Math.random() * maxNum);
  const randomNum2 = Math.round(Math.random() * maxNum);
  const expected = getGCD(randomNum1, randomNum2);
  const question = `${randomNum1} ${randomNum2}`;
  return createQuestion(question, expected);
};

export { rules, generateQuestion };
