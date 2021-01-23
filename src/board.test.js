import { render, fireEvent } from '@testing-library/react';
import Board from './Board';

test('should render an X and O', () => {
   const board = render(<Board />);
   const button = board.queryAllByRole("button");
   fireEvent.click(button[0]);
   fireEvent.click(button[1]);
   expect(button[0].innerHTML).toBe("X");
   expect(button[1].innerHTML).toBe("O");
});
test('should say next player is X', () => {
   const board = render(<Board />);
   const button = board.queryAllByRole('button');
   const text = board.getByText(/Next player:/);
   expect(text.innerHTML).toBe('Next player: X');
   fireEvent.click(button[0]);
   expect(text.innerHTML).toBe('Next player: O');

});
