import init from './actions/init.js';
import * as Even from './games/even.js';
import * as Calc from './games/calculator.js';
import play from './actions/gameExecution.js';

const start = (gameNames) => {
  const username = init();
  switch (gameNames) {
    case 'even':
      play(username, Even);
      break;
    case 'calculator':
      play(username, Calc);
      break;
    default:
      break;
  }
};

export default start;
