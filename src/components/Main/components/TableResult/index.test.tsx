import React from 'react';
import { render, screen } from '@testing-library/react';
import { TableResult } from './index';

describe('TableResult', () => {
    it('renders history items in the table', () => {
        const history = [
            { time: '12:00:00', guess: 'Under 50', result: 42, isUserWon: true },
            { time: '12:01:00', guess: 'Over 60', result: 70, isUserWon: false },
        ];
        render(<TableResult history={history} />);
        expect(screen.getByText('12:00:00')).toBeInTheDocument();
        expect(screen.getByText('Under 50')).toBeInTheDocument();
        expect(screen.getByText('42')).toBeInTheDocument();
        expect(screen.getByText('12:01:00')).toBeInTheDocument();
        expect(screen.getByText('Over 60')).toBeInTheDocument();
        expect(screen.getByText('70')).toBeInTheDocument();
    });
});
