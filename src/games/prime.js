const getRules = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 1) return false;
  for (let i = 2; i <= num / 2; i += 1) {
    if ((num % i) === 0) return false;
  }
  return true;
};

const generateQuestion = () => {
  const maxNum = 99;
  const randomNum = Math.round((Math.random() * (maxNum - 1)) / 2) * 2 + 1;
  const expected = (isPrime(randomNum)) ? 'yes' : 'no';
  const question = `${randomNum}`;
  return (field) => {
    switch (field) {
      case 'question': return question;
      case 'expected': return expected;
      default: return null;
    }
  };
};

export { getRules, generateQuestion };
