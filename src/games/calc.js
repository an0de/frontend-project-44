import { getRandomNumber } from '../utils.js';

const calcGame = (maxLeftValue = 20, maxRightValue = 10) => {
  const operators = ['-', '+', '*'];
  const a = getRandomNumber(maxLeftValue);
  const b = getRandomNumber(maxRightValue);
  const op = operators[getRandomNumber(operators.length)];
  let result = 0;
  switch (op) {
    case '-':
      result = a - b;
      break;
    case '+':
      result = a + b;
      break;
    case '*':
      result = a * b;
      break;
    default:
      break;
  }
  return [`${a} ${op} ${b}`, result];
};

export default calcGame;
