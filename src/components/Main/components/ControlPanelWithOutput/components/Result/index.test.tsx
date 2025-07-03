import React from 'react';
import { render, screen } from '@testing-library/react';
import { Result } from './index';

export const MOCK_RESULT_VALUE = 42;
const MOCK_RESULT_VALUE_STRING = MOCK_RESULT_VALUE.toString();
const MOCK_NULL_DISPLAY = '-';

describe('Result', () => {
    it('renders the result value', () => {
        render(<Result value={MOCK_RESULT_VALUE} />);
        expect(screen.getByText(MOCK_RESULT_VALUE_STRING)).toBeInTheDocument();
    });

    it('renders dash if value is null', () => {
        render(<Result value={null} />);
        expect(screen.getByText(MOCK_NULL_DISPLAY)).toBeInTheDocument();
    });
});
