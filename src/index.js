import readlineSync from 'readline-sync';

const askName = () => readlineSync.question('\nMay I have your name? ');

const greet = (name) => {
  if (name === '') {
    console.log('Hello, anonymous!');
    return 'anonymous';
  }
  console.log(`Hello, ${name}!`);
  return name;
};               

const greetings = () => greet( askName());

export default greetings;
