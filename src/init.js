import readlineSync from 'readline-sync';

const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name || 'anonymous';
};

const greetings = (username) => {
  console.log(`Hello, ${username}!`);
};

const welcome = () => {
  console.log('Welcome to the Brain Games!', '\x1b[0m');
};

const init = () => {
  welcome();
  const user = getName();
  greetings(user);
  return user;
};

export default init;
