import { isEven, getRandomNumber } from '../utils.js';

const castYesNo = (val) => {
  const values = ['no', 'yes'];
  const i = Number(val);
  if (Number.isNaN(i)) {
    return values[0];
  }
  return values[i % values.length];
};

const evenGame = (maxNumber = 0xffffff) => {
  const number = getRandomNumber(maxNumber);
  const correctAnswer = castYesNo(isEven(number));
  return [number, correctAnswer];
};

export default evenGame;
