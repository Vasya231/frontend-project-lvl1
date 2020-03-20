import init from './init.js';
import playEven from './games/even.js';
import calc from './games/calculator.js';

const playGame = (gameNames) => {
  const username = init();
  switch (gameNames) {
    case 'even':
      playEven(username);
      break;
    case 'calculator':
      calc(username);
      break;
    default:
      break;
  }
};

export default playGame;
