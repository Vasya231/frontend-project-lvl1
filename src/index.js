import init from './actions/init.js';
import play from './actions/gameExecution.js';
import * as Even from './games/even.js';
import * as Calc from './games/calculator.js';
import * as GCD from './games/gcd.js';
import * as Progression from './games/progression.js';


const start = (gameNames) => {
  const username = init();
  switch (gameNames) {
    case 'progression':
      play(username, Progression);
      break;
    case 'gcd':
      play(username, GCD);
      break;
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
