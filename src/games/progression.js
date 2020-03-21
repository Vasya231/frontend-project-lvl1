const rules = 'What number is missing in the progression?';

const generateQuestion = () => {
  const progression = [];
  const maxFirstNum = 100;
  const maxDiff = 30;
  const progressionLength = 10;
  const firstNum = Math.round(Math.random() * maxFirstNum);
  const diff = Math.round(Math.random() * maxDiff);
  const missing = Math.round(Math.random() * (progressionLength - 1));
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstNum + (diff * i));
  }
  const expected = progression[missing];
  progression[missing] = '..';
  const question = progression.join(' ');
  return [question, expected];
};

export { rules, generateQuestion };
