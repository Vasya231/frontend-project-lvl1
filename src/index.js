import init from './init.js';
import playEven from './even.js';
import cyanyes from './cyanyes.js';

const playGame = (gameNames) => {
  const username = init();
  switch (gameNames) {
    case 'evencolors':
      cyanyes(username);
      break;
    case 'even':
      playEven(username);
      break;
    default:
      break;
  }
};

export default playGame;
