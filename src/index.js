import readlineSync from 'readline-sync';

const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name || 'anonymous';
};

const greetings = (username) => {
  console.log(`Hello, ${username}!`);
};

const welcome = () => {
  console.log('\x1b[31m', 'Welcome to the Brain Games!', '\x1b[0m');
};

export { greetings, welcome, getName };
