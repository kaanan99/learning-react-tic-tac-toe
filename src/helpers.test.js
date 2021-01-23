import { calculateWinner } from './helpers';

test('should return X as the winner if it has the top row', () => {
  // Arrange the test
  const squares = ['X', 'X', 'X', 'O', null, 'O', null, null, null];
  
  // Act
  const winner = calculateWinner(squares);

  // Assert
  expect(winner).toBe('X');
});

test('should return O as the winner since it has the first column', () => {
  // Arrange the test
  const squares = ['O', 'X', 'X', 'O', 'X', 'O', 'O', null, null];
  
  // Act
  const winner = calculateWinner(squares);

  // Assert
  expect(winner).toBe('O');
});


test('should return null as the winner since there is a tie', () => {
  // Arrange the test
  const squares = ['X', 'O', 'X', 'O', 'O', 'X', 'X', 'X', 'O'];
  
  // Act
  const winner = calculateWinner(squares);

  // Assert
  expect(winner).toBe(null);
});
