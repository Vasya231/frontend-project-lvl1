import generateAnswer from '../model/answer.js';

const displayRules = () => {
  console.log('What is the result of the expression?');
};

const askQuestion = () => {
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
  const answer = generateAnswer(question, expected);
  return answer();
};

const play = (user) => {
  displayRules();
  let successCount = 0;
  while (successCount < 3) {
    const correct = askQuestion();
    if (correct) {
      successCount += 1;
    } else {
      successCount = 0;
      console.log(`Let's try again, ${user}!`);
    }
  }
  console.log(`Congratulations, ${user}!`);
};

export default play;
