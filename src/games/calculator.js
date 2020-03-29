import randomInt from '../utils.js';

const description = 'What is the result of the expression?';

const getRandomOperation = () => {
  const operations = ['+', '-', '*'];
  const operationIndex = randomInt(operations.length - 1);
  return operations[operationIndex];
};

const apply = (operation, num1, num2) => {
  switch (operation) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: return NaN;
  }
};

const generateGameRound = () => {
  const maxNum = 100;
  const randomNum1 = randomInt(maxNum);
  const randomNum2 = randomInt(maxNum);
  const operation = getRandomOperation();
  const answer = apply(operation, randomNum1, randomNum2);
  const question = `${randomNum1} ${operation} ${randomNum2}`;
  return { question, answer };
};

export { description, generateGameRound };
