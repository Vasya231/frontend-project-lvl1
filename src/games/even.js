import generateAnswer from '../model/answer.js';

const displayRules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const askQuestion = () => {
  const num = Math.round(Math.random() * 100);
  const expected = (num % 2 === 0) ? 'yes' : 'no';
  const question = `${num}`;
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
