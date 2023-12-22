import readlineSync from 'readline-sync';
import greet from './cli.js';

const castYesNo = (val) => {
  const values = ['no', 'yes'];
  const i = Number(val);
  if (Number.isNaN(i)) {
    return values[0];
  }
  return values[i % values.length];
};

const castInt = (val) => {
  const values = ['no', 'yes'];
  return values.indexOf(val.toLowerCase());
};

const isEven = (n) => (n % 2 === 0);

const printEvenRules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const printWrongAnswMsg = (userName, userAns, correctAns) => {
  console.log(`'${userAns}' is wrong answer ;(. Correct answer was '${correctAns}'.`);
  console.log(`Let's try again, ${userName}!`);
};

const printCorrectMsg = () => {
  console.log('Correct!');
};

const printEndGameMsg = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

const printQuestion = (value) => {
  console.log(`Question: ${value}`);
};

const playEven = () => {
  const val = Math.floor(Math.random() * 0xffffff);
  printQuestion(val);
  const userAns = readlineSync.question('Your answer: ');
  const correctAns = castYesNo(isEven(val));
  if (Number(isEven(val)) === castInt((userAns))) {
    return [userAns, correctAns, true];
  }
  return [userAns, correctAns, false];
};

const evenGame = () => {
  let roundResult = false;
  let userAnswer = '';
  let correctAnswer = 0;
  let score = 0;
  const rounds = 3;
  const userName = greet();
  printEvenRules();
  while (score !== 3) {
    for (let cur = 0; cur < rounds; cur += 1) {
      [userAnswer, correctAnswer, roundResult] = playEven();
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

export default evenGame;
