import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SliderInput } from './index';

const MOCK_SlIDER_VALUE = 42;
const MOCK_ROLE = 'slider';

describe('SliderInput', () => {
    it('renders the slider input', () => {
        render(<SliderInput value={MOCK_SlIDER_VALUE} onChange={() => {}} />);
        const slider = screen.getByRole(MOCK_ROLE);
        expect(slider).toBeInTheDocument();
    });

    it('calls onChange when slider value changes', () => {
        const handleChange = jest.fn();
        render(<SliderInput value={MOCK_SlIDER_VALUE} onChange={handleChange} />);
        const slider = screen.getByRole(MOCK_ROLE);
        fireEvent.change(slider, { target: { value: 60 } });
        expect(handleChange).toHaveBeenCalled();
    });
});
