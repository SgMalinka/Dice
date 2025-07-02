import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SliderInput } from './index';

describe('SliderInput', () => {
    it('renders the slider and responds to value and onChange', () => {
        const handleChange = jest.fn();
        render(<SliderInput value={50} onChange={handleChange} />);
        const slider = screen.getByRole('slider');
        expect(slider).toBeInTheDocument();
        fireEvent.change(slider, { target: { value: 60 } });
        expect(handleChange).toHaveBeenCalled();
    });
});
