import { isEven, getRandomNumber } from '../utils.js';
import { printQuestion, getUserAnswer } from '../cli.js';

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

const evenGame = () => {
  const number = getRandomNumber(0xffffff);
  printQuestion(number);
  const userAnswer = getUserAnswer();
  const correctAnswer = castYesNo(isEven(number));
  if (Number(isEven(number)) === castInt((userAnswer))) {
    return [userAnswer, correctAnswer, true];
  }
  return [userAnswer, correctAnswer, false];
};

export default evenGame;
