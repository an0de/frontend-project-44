import { castYesNo, getRandomNumber } from '../utils.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const primeGame = (maxNumber = 100) => {
  const number = getRandomNumber(maxNumber);
  const correctAnswer = castYesNo(isPrime(number));
  return [number, correctAnswer];
};

export default primeGame;
