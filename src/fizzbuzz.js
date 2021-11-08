export const fizzBuzz = (num) => {
  if (num % 15 === 0) {
    return 'FizzBuzz';
  } else if (num % 5 === 0) {
    return 'Buzz';
  } else {
    return num;
  }
};
