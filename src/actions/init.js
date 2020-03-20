import readlineSync from 'readline-sync';

const init = () => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ') || 'anonymous';
  console.log(`Hello, ${username}!`);
  return username;
};

export default init;
