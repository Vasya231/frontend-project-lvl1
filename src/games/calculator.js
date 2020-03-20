const displayRules = () => {
  console.log('What is the result of the expression?');
};

const generateQuestion = () => {
  const maxNum = 100;
  const numberOfOperations = 3;
  const randomNum1 = Math.round(Math.random() * maxNum);
  const randomNum2 = Math.round(Math.random() * maxNum);
  const operationIndex = Math.round(Math.random() * (numberOfOperations - 1));
  let expected = 0;
  let operation = '';
  switch (operationIndex % 3) {
    case 0:
      operation = '+';
      expected = randomNum1 + randomNum2;
      break;
    case 1:
      operation = '-';
      expected = randomNum1 - randomNum2;
      break;
    case 2:
      operation = '*';
      expected = randomNum1 * randomNum2;
      break;
    default:
      break;
  }
  const question = `${randomNum1} ${operation} ${randomNum2}`;
  return (field) => {
    switch (field) {
      case 'question': return question;
      case 'expected': return expected;
      default: return null;
    }
  };
};

export { displayRules, generateQuestion };
