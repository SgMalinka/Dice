import React from 'react';
import { render, screen } from '@testing-library/react';
import { Result } from './index';

describe('Result', () => {
    it('renders the result value', () => {
        render(<Result value={42} />);
        expect(screen.getByText('42')).toBeInTheDocument();
    });
    it('renders dash if value is null', () => {
        render(<Result value={null} />);
        expect(screen.getByText('-')).toBeInTheDocument();
    });
});
