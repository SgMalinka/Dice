import React from 'react';
import { render, screen } from '@testing-library/react';
import { TableBody } from './index';
import { COLORS } from '@/core/enums';

describe('TableBody', () => {
    it('renders the table row with correct values and win color', () => {
        render(<TableBody time="12:00:00" guess="Under 50" result={42} isUserWon={true} />);
        expect(screen.getByText('12:00:00')).toBeInTheDocument();
        expect(screen.getByText('Under 50')).toBeInTheDocument();
        const resultCell = screen.getByText('42');
        expect(resultCell).toBeInTheDocument();
        expect(resultCell).toHaveStyle(`color: ${COLORS.GREEN}`);
    });
    it('renders the table row with loss color', () => {
        render(<TableBody time="12:01:00" guess="Over 60" result={70} isUserWon={false} />);
        const resultCell = screen.getByText('70');
        expect(resultCell).toHaveStyle(`color: ${COLORS.RED}`);
    });
});
