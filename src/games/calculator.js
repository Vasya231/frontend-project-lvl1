import { createQuestion } from '../model/question.js';

const getRules = () => 'What is the result of the expression?';

const getRandomOperation = () => {
  const numberOfOperations = 3;
  const operationIndex = Math.round(Math.random() * (numberOfOperations - 1));
  switch (operationIndex % numberOfOperations) {
    case 0:
      return '+';
    case 1:
      return '-';
    case 2:
      return '*';
    default:
      return null;
  }
};

const generateQuestion = () => {
  const maxNum = 100;
  const randomNum1 = Math.round(Math.random() * maxNum);
  const randomNum2 = Math.round(Math.random() * maxNum);
  const operation = getRandomOperation();
  let expected = 0;
  switch (operation) {
    case '+':
      expected = randomNum1 + randomNum2;
      break;
    case '-':
      expected = randomNum1 - randomNum2;
      break;
    case '*':
      expected = randomNum1 * randomNum2;
      break;
    default:
      break;
  }
  const question = `${randomNum1} ${operation} ${randomNum2}`;
  return createQuestion(question, expected);
};

export { getRules, generateQuestion };
