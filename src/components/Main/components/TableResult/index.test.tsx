import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { TableResult } from './index';
import { MOCK_RESULT_VALUE } from '../ControlPanelWithOutput/components/Result/index.test';

describe('TableResult', () => {
    const history = [
        {
            id: '1',
            time: '12:00:00',
            guess: 'Under 50',
            result: MOCK_RESULT_VALUE,
            isUserWon: true,
        },
        { id: '2', time: '12:01:00', guess: 'Over 60', result: 70, isUserWon: false },
    ];

    it('renders history items in the table', () => {
        render(<TableResult history={history} />);

        const table = screen.getByRole('table');
        expect(table).toBeInTheDocument();

        const tbody = table.querySelector('tbody');
        expect(tbody).toBeInTheDocument();

        const rows = tbody ? within(tbody).getAllByRole('row') : [];
        expect(rows.length).toBe(history.length);

        history.forEach(({ time, guess, result }) => {
            expect(screen.getByText(time)).toBeInTheDocument();
            expect(screen.getByText(guess)).toBeInTheDocument();
            expect(screen.getByText(result.toString())).toBeInTheDocument();
        });
    });
});
