import { getRandomNumber } from '../utils.js';

const gcd = (number) => number;

const gcdGame = (maxNumber = 100) => {
  const number = getRandomNumber(maxNumber);
  const correctAnswer = gcd(number);
  return [number, correctAnswer];
};
export default gcdGame;
