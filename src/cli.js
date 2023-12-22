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

export default greet;
