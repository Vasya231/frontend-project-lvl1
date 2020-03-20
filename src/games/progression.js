const displayRules = () => {
  console.log('What number is missing in the progression?');
};

const generateQuestion = () => {
  const progression = [];
  const firstNum = Math.round(Math.random() * 100);
  const diff = Math.round(Math.random() * 100);
  const missing = Math.round(Math.random() * 100) % 10;
  for (let i = 0; i < 10; i += 1) {
    progression.push(firstNum + (diff * i));
  }
  const expected = progression[missing];
  progression[missing] = '..';
  const question = progression.join(' ');
  return (field) => {
    switch (field) {
      case 'question': return question;
      case 'expected': return expected;
      default: return null;
    }
  };
};

export { displayRules, generateQuestion };
