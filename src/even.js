import readlineSync from 'readline-sync';

const displayRules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const askIfEven = () => {
  const num = Math.round(Math.random() * 100);
  const expected = (num % 2 === 0) ? 'yes' : 'no';
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer.toLowerCase() === expected) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${expected}".`);
  return false;
};

const play = (user) => {
  displayRules();
  let successCount = 0;
  while (successCount < 3) {
    const correct = askIfEven();
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
