import { getRandomNumber } from '../utils.js';

const gcd = (a, b) => {
  while (b !== 0) {
  [a, b] = [b, a % b]
  }
  return a
}

const gcdGame = (maxNumber = 100) => {
  const a = getRandomNumber(maxNumber);
  const b = getRandomNumber(maxNumber);
  const correctAnswer = gcd(a, b);
  return [`${a} ${b}`, correctAnswer];
};
export default gcdGame;
