import {
  greet, getUserAnswer, printWrongAnswMsg, printCorrectMsg, printEndGameMsg,
  printGameRules, printQuestion,
} from './cli.js';
import { interpolate } from './utils.js';

import evenGame from './games/even.js';
import calcGame from './games/calc.js';
import gcdGame from './games/gcd.js';

const gameRules = {
  even: ['Answer "yes" if the number is even, otherwise answer "no".'],
  calc: ['What is the result of the expression?'],
  gcd: ['Find the greatest common divisor of given numbers.'],
};

const playRound = (game) => {
  const [task, correctAnswer] = game().map((el) => interpolate(el));
  printQuestion(task);
  const userAnswer = getUserAnswer();
  return [userAnswer, correctAnswer, (correctAnswer === interpolate(userAnswer))];
};

const play = (game, rule = '') => {
  let roundResult = false;
  let userAnswer = '';
  let correctAnswer = 0;
  let score = 0;
  const rounds = 3;
  const userName = greet();
  printGameRules(rule);
  while (score !== 3) {
    for (let cur = 0; cur < rounds; cur += 1) {
      [userAnswer, correctAnswer, roundResult] = playRound(game);
      if (roundResult === true) {
        score += 1;
        printCorrectMsg();
      } else {
        printWrongAnswMsg(userName, userAnswer, correctAnswer);
        score = 0;
        break;
      }
    }
  }
  printEndGameMsg(userName);
};

const selectGame = (game, rule) => () => play(game, rule);
const playEven = selectGame(evenGame, gameRules.even);
const playCalc = selectGame(calcGame, gameRules.calc);
const playGcd = selectGame(gcdGame, gameRules.gcd);

export {
  playEven, playCalc, playGcd,
};
