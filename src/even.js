import readlineSync from 'readline-sync';
import greet from './cli.js';

const castYesNo = (val) => {
  const values = ['no', 'yes'];
  const i = values.indexOf(val.toLowerCase());
  if (i !== -1) {
    return Boolean(i);
  }
  return -1;
};

const isEven = (n) => (n % 2 === 0);

const printEvenRules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const printWrongAnswMsg = (userName, ans, val) => {
  const answers = ['no', 'yes'];
  const correct = answers.at(Number(isEven(val)));
  console.log(`'${ans}' is wrong answer ;(. Correct answer was '${correct}'.`);
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
  const ans = readlineSync.question('Your answer: ');
  if (isEven(val) === castYesNo(ans)) {
    return [ans, val, true];
  }
  return [ans, val, false];
};

const evenGame = () => {
  const userName = greet();
  printEvenRules();
  const rounds = 3;
  let res = false;
  let ans = '';
  let val = 0;
  let score = 0;
  while (score !== 3) {
    for (let cur = 0; cur < rounds; cur += 1) {
      [ans, val, res] = playEven();
      if (res === true) {
        score += 1;
        printCorrectMsg();
      } else {
        printWrongAnswMsg(userName, ans, val);
        score = 0;
        break;
      }
    }
  }
  printEndGameMsg(userName);
};

export default evenGame;
