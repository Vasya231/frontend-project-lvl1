import colors from 'colors';

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
  // const cyanColor = '\x1b[36m';
  // const resetColor = '\x1b[0m';

  const displayRules = () => {
    const redYes = colors.red('"yes"');
    const redNo = colors.red('"no"');
    const boldIf = colors.bold('if');
    console.log(`Answer ${redYes} ${boldIf} the number is even, otherwise answer ${redNo}.`);
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
      const boldSmile = colors.bold(';(');
      console.log(`"${colors.red(answer)}" is wrong answer ${boldSmile}. Correct answer was "${colors.red(expected)}".`);
      const stryAgain = colors.red(`'s try again, ${user}!`);
      console.log(`Let${stryAgain}`);
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
      for (let i = 0; i < answer.length + 13; i += 1) {
        process.stdout.write(' ');
      }
      answer = answer.slice(0, -1);
    }
    process.stdout.write('\r');
    process.stdout.write('Your answer: ');
    if (answer === 'yes') {
      process.stdout.write(colors.cyan(answer));
    } else {
      process.stdout.write(answer);
    }
  });

  displayRules();
  askIfEven();
};

export default cyanyes;
