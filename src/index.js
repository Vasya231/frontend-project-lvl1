import init from './init.js';
import playEven from './even.js';

const playGame = (gameNames) => {
  const username = init();
  switch (gameNames) {
    case 'even':
      playEven(username);
      break;
    default:
      break;
  }
};

export default playGame;
