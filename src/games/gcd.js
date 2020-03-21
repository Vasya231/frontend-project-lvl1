const rules = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  const max = Math.max(num1, num2);
  const min = Math.min(num1, num2);
  for (let divisor = min; divisor > 0; divisor -= 1) {
    if ((max % divisor === 0) && (min % divisor === 0)) {
      return divisor;
    }
  }
  return null;
};

const generateQuestion = () => {
  const maxNum = 100;
  // Надо бы генерацию поумнее сделать, почти всегда ответ 1 или 2.
  const randomNum1 = Math.round(Math.random() * maxNum);
  const randomNum2 = Math.round(Math.random() * maxNum);
  const expected = getGCD(randomNum1, randomNum2);
  const question = `${randomNum1} ${randomNum2}`;
  return [question, expected];
};

export { rules, generateQuestion };
