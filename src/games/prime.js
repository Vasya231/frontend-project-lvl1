const displayRules = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};

const isPrime = (num) => {
  if (num === 1) return false;
  for (let i = 2; i <= num / 2; i += 1) {
    if ((num % i) === 0) return false;
  }
  return true;
};

const generateQuestion = () => {
  const num = Math.round(Math.random() * 50) * 2 + 1;
  const expected = (isPrime(num)) ? 'yes' : 'no';
  const question = `${num}`;
  return (field) => {
    switch (field) {
      case 'question': return question;
      case 'expected': return expected;
      default: return null;
    }
  };
};

export { displayRules, generateQuestion };
