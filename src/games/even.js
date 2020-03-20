const displayRules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const generateQuestion = () => {
  const maxNum = 100;
  const randomNum = Math.round(Math.random() * maxNum);
  const expected = (randomNum % 2 === 0) ? 'yes' : 'no';
  const question = `${randomNum}`;
  return (field) => {
    switch (field) {
      case 'question': return question;
      case 'expected': return expected;
      default: return null;
    }
  };
};

export { displayRules, generateQuestion };
