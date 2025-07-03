import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { RadioGroupInputs } from './index';
import { GuessType } from '@/core/enums';

describe('RadioGroupInputs', () => {
    it('renders both "Under" and "Over" radio buttons', () => {
        render(<RadioGroupInputs value={GuessType.UNDER} onChange={jest.fn()} />);
        const underRadio = screen.getByLabelText('Under');
        const overRadio = screen.getByLabelText('Over');
        expect(underRadio).toBeInTheDocument();
        expect(overRadio).toBeInTheDocument();
    });

    it('calls onChange when "Over" radio button is clicked', () => {
        const handleChange = jest.fn();
        render(<RadioGroupInputs value={GuessType.UNDER} onChange={handleChange} />);
        const overRadio = screen.getByLabelText('Over');
        fireEvent.click(overRadio);
        expect(handleChange).toHaveBeenCalled();
    });
});
