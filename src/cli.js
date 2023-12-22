import readlineSync from 'readline-sync';

const getName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const printWelcomeMsg = () => {
  console.log('Welcome to the Brain Games!');
};

const greet = () => {
  printWelcomeMsg();
  return getName();
};

const printWrongAnswMsg = (userName, userAns, correctAns) => {
  console.log(`'${userAns}' is wrong answer ;(. Correct answer was '${correctAns}'.`);
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

const getUserAnswer = () => readlineSync.question('Your answer: ');

const printGameRules = (rules) => {
  for (let i = 0; i < rules.length; i += 1) {
    console.log(rules[i]);
  }
};

export {
  greet, printWrongAnswMsg, printCorrectMsg, printEndGameMsg, printQuestion,
  getUserAnswer, printGameRules,
};
