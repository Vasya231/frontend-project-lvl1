const cyanyes = (user) => {
  const { stdin } = process;
  stdin.setRawMode(true);
  stdin.resume();
  stdin.setEncoding('utf8');
  let answer = '';
  let readingAnswer = false;
  let num = 0;
  let expected = '';
  let success = 0;

  const displayRules = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  };

  const askIfEven = () => {
    num = Math.round(Math.random() * 100);
    expected = (num % 2 === 0) ? 'yes' : 'no';
    console.log(`Question: ${num}`);
    process.stdout.write('Your answer: ');
    readingAnswer = true;
    answer = '';
  };

  const congrats = () => {
    console.log(`Congratulations, ${user}!`);
    process.exit(0);
  };

  const checkAnswer = () => {
    if (answer.toLowerCase() === expected) {
      console.log('Correct!');
      success += 1;
      // console.log(`${success} in a row!`);
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${expected}".`);
      success = 0;
    }
    if (success === 3) {
      congrats();
    }
    askIfEven();
  };

  stdin.on('data', (key) => {
    if (!readingAnswer) {
      return;
    }
    if (key === '\r') {
      readingAnswer = false;
      process.stdout.write('\n');
      checkAnswer();
    }
    if (key === '\u0003') {
      process.exit();
    }
    if ((key.match(/[a-zA-Z]/i))) {
      answer += key;
    }
    if (String(key).charCodeAt() === 127) {
      process.stdout.write('\r');
      for (let i = 0; i < answer.length; i += 1) {
        process.stdout.write(' ');
      }
      answer = answer.slice(0, -1);
    }
    process.stdout.write('\r');
    process.stdout.write('Your answer: ');
    if (answer === 'yes') {
      process.stdout.write('\x1b[36m');
    }
    process.stdout.write(answer);
    if (answer === 'yes') {
      process.stdout.write('\x1b[0m');
    }
  });

  displayRules();
  askIfEven();
};

export default cyanyes;
