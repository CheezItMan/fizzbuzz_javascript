import { fizzBuzz } from '../src/fizzbuzz';

// const { fizzBuzz } = require("/src/fizzbuzz");

describe('fizzBuzz', () => {
  test('returns Fizz on multiples of 3', () => {
    // Arrange
    const num = 9;

    // Act
    const result = fizzBuzz(num);

    // Assert
    expect(result).toEqual('Fizz');
  });

  test('returns Buzz on multiples of 5', () => {
    expect(fizzBuzz(25)).toEqual('Buzz');
  });

  test('multiples of three and five return FizzBuzz', () => {
    // Arrange
    const num = 225;

    // Act
    const result = fizzBuzz(num);

    // Assert
    expect(result).toEqual('FizzBuzz');
  });

  test('non-multiples of three or five return the number itself', () => {
    // Arrange
    const num = 4;

    // Act
    const result = fizzBuzz(num);

    // Assert
    expect(result).toEqual(num);
  });
});
