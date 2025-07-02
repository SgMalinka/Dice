import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { PlayButton } from './index';

describe('PlayButton', () => {
    it('renders the play button and calls onClick', () => {
        const handleClick = jest.fn();
        render(<PlayButton onClick={handleClick} />);
        const button = screen.getByRole('button', { name: /play/i });
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalled();
    });
});
