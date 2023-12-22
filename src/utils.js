const isEven = (n) => (n % 2 === 0);

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const interpolate = (value) => String(value).toLowerCase().trim();

const castYesNo = (val) => {
  const values = ['no', 'yes'];
  const i = Number(val);
  if (Number.isNaN(i)) {
    return values[0];
  }
  return values[i % values.length];
};

export {
  castYesNo, isEven, getRandomNumber, interpolate,
};
