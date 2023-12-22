import { getRandomNumber } from '../utils.js';
import { printQuestion, getUserAnswer } from '../cli.js';

const getRandomExpr = (maxLeftValue, maxRightValue) => {
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

const calcGame = () => {
  const maxLeftValue = 20;
  const maxRightValue = 10;
  const [expr, correctAnswer] = getRandomExpr(maxLeftValue, maxRightValue);
  printQuestion(expr);
  const userAnswer = getUserAnswer();
  return [userAnswer, correctAnswer, (correctAnswer === Number(userAnswer))];
};

export default calcGame;
