const displayRules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const generateQuestion = () => {
  const num = Math.round(Math.random() * 100);
  const expected = (num % 2 === 0) ? 'yes' : 'no';
  const question = `${num}`;
  return (command) => {
    switch (command) {
      case 'question': return question;
      case 'expected': return expected;
      default: return null;
    }
  };
};

export { displayRules, generateQuestion };
