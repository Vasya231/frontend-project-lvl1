const displayRules = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

const generateGCD = (num1, num2) => {
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
  const num1 = Math.round(Math.random() * 100);
  const num2 = Math.round(Math.random() * 100);
  const expected = generateGCD(num1, num2);
  const question = `${num1} ${num2}`;
  return (field) => {
    switch (field) {
      case 'question': return question;
      case 'expected': return expected;
      default: return null;
    }
  };
};

export { displayRules, generateQuestion };
