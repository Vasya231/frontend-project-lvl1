const description = 'What is the result of the expression?';

const getRandomOperation = () => {
  const operations = ['+', '-', '*'];
  const operationIndex = Math.round(Math.random() * (operations.length - 1));
  return operations[operationIndex];
};

const apply = (num1, num2, operation) => {
  switch (operation) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: return NaN;
  }
};

const generateQuestion = () => {
  const maxNum = 100;
  const randomNum1 = Math.round(Math.random() * maxNum);
  const randomNum2 = Math.round(Math.random() * maxNum);
  const operation = getRandomOperation();
  const expected = apply(randomNum1, randomNum2, operation);
  const question = `${randomNum1} ${operation} ${randomNum2}`;
  return [question, expected];
};

export { description, generateQuestion };
