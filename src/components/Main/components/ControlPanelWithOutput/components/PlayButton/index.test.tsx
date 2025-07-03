import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { PlayButton } from './index';

describe('PlayButton', () => {
    it('renders the play button', () => {
        render(<PlayButton onClick={jest.fn()} />);
        const button = screen.getByRole('button', { name: /play/i });
        expect(button).toBeInTheDocument();
    });

    it('calls onClick when the play button is clicked', () => {
        const handleClick = jest.fn();
        render(<PlayButton onClick={handleClick} />);
        const button = screen.getByRole('button', { name: /play/i });
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalled();
    });
});
