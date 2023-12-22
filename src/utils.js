const isEven = (n) => (n % 2 === 0);

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const interpolate = (value) => String(value).toLowerCase().trim();

export { isEven, getRandomNumber, interpolate };
