import { getRandomNumber } from '../utils.js';

const getProgression = (initial, step, length) => {
  const a = [];
  a.length = length;
  a.fill(initial);
  for (let i = 0; i < length; i += 1) {
    a[i] += step * i;
  }
  return a;
};

const progressionGame = (maxLength = 20) => {
  const initialValue = getRandomNumber(50);
  const stepValue = getRandomNumber(25);
  const minLength = 5;
  let progLength = getRandomNumber(maxLength);
  progLength = (progLength >= minLength) ? progLength : minLength;
  const progression = getProgression(initialValue, stepValue, progLength);
  const missingPos = getRandomNumber(progLength - 1);
  const correctAnswer = progression[missingPos];
  progression[missingPos] = '..';
  return [progression.join(' '), correctAnswer];
};

export default progressionGame;
