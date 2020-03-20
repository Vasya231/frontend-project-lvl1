const displayRules = () => {
  console.log('What is the result of the expression?');
};

const generateQuestion = () => {
  const num1 = Math.round(Math.random() * 100);
  const num2 = Math.round(Math.random() * 100);
  const num3 = Math.round(Math.random() * 100);
  let expected = 0;
  let operation = '';
  switch (num3 % 3) {
    case 0:
      operation = '+';
      expected = num1 + num2;
      break;
    case 1:
      operation = '-';
      expected = num1 - num2;
      break;
    case 2:
      operation = '*';
      expected = num1 * num2;
      break;
    default:
      break;
  }
  const question = `${num1} ${operation} ${num2}`;
  return (field) => {
    switch (field) {
      case 'question': return question;
      case 'expected': return expected;
      default: return null;
    }
  };
};

export { displayRules, generateQuestion };
