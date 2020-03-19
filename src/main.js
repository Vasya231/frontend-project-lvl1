import * as base from './index.js';
import * as even from './brain-even-src.js';

const init = () => {
  base.welcome();
  const user = base.getName();
  base.greetings(user);
  return user;
};

const playGame = (gameNames) => {
  const username = init();
  switch (gameNames) {
    case 'even':
      even.play(username);
      break;
    default:
      break;
  }
};

export default playGame;
