const displayRules = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

const generateGCD = (num1, num2) => {
  let max = Math.max(num1, num2);
  let denom = Math.min(num1, num2);
  let result = max % denom;
  while (result !== 0) {
    max = denom;
    denom = result;
    result = max % denom;
  }
  return denom;
};

const generateQuestion = () => {
  const maxNum = 100;
  // Надо бы генерацию поумнее сделать, почти всегда ответ 1 или 2.
  const randomNum1 = Math.round(Math.random() * maxNum);
  const randomNum2 = Math.round(Math.random() * maxNum);
  const expected = generateGCD(randomNum1, randomNum2);
  const question = `${randomNum1} ${randomNum2}`;
  return (field) => {
    switch (field) {
      case 'question': return question;
      case 'expected': return expected;
      default: return null;
    }
  };
};

export { displayRules, generateQuestion };
