import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { RadioGroupInputs } from './index';
import { GuessType } from '@/core/enums';

describe('RadioGroupInputs', () => {
    it('renders both radio buttons and calls onChange', () => {
        const handleChange = jest.fn();
        render(<RadioGroupInputs value={GuessType.UNDER} onChange={handleChange} />);
        const underRadio = screen.getByLabelText('Under');
        const overRadio = screen.getByLabelText('Over');
        expect(underRadio).toBeInTheDocument();
        expect(overRadio).toBeInTheDocument();
        fireEvent.click(overRadio);
        expect(handleChange).toHaveBeenCalled();
    });
});
