import readlineSync from 'readline-sync';

const playGame = (game) => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ') || 'anonymous';
  console.log(`Hello, ${username}!`);
  const gameRules = game.description;
  console.log(gameRules);
  const numberOfQuestions = 3;
  for (let questionsAsked = 1; questionsAsked <= numberOfQuestions; questionsAsked += 1) {
    const { questionText, expected } = game.generateQuestion();
    console.log(questionText);
    const actual = readlineSync.question('Your answer: ');
    const correct = actual.toLowerCase() === String(expected);
    if (!correct) {
      console.log(`"${actual}" is wrong answer ;(. Correct answer was "${expected}".`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${username}!`);
};

export default playGame;
