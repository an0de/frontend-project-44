import { castYesNo, isEven, getRandomNumber } from '../utils.js';

const evenGame = (maxNumber = 0xffffff) => {
  const number = getRandomNumber(maxNumber);
  const correctAnswer = castYesNo(isEven(number));
  return [number, correctAnswer];
};

export default evenGame;
