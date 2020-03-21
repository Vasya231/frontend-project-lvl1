import readlineSync from 'readline-sync';
import { getText, getExpectedAnswer } from './model/question.js';

const areEqualByRules = (actual, expected) => {
  const actualLc = String(actual).toLocaleLowerCase();
  const expectedLc = String(expected).toLowerCase();
  return actualLc === expectedLc;
};

const getUserName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name || 'anonymous';
};

const greetUser = (username) => {
  console.log(`Hello, ${username}!`);
};

const displayWelcome = () => {
  console.log('Welcome to the Brain Games!');
};

const playGame = (game) => {
  displayWelcome();
  const username = getUserName();
  greetUser(username);
  if (game === undefined) return;
  const rules = game.getRules();
  console.log(rules);
  const numberOfQuestions = 3;
  for (let questionsAsked = 1; questionsAsked <= numberOfQuestions; questionsAsked += 1) {
    const currentQuestion = game.generateQuestion();
    const questionText = getText(currentQuestion);
    const expected = getExpectedAnswer(currentQuestion);
    console.log(questionText);
    const actual = readlineSync.question('Your answer: ');
    const correct = areEqualByRules(actual, expected);
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
