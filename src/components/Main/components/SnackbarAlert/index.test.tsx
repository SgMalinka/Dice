import React from 'react';
import { render, screen } from '@testing-library/react';
import { SnackbarAlert } from './index';

describe('SnackbarAlert', () => {
    it('renders win message', () => {
        render(<SnackbarAlert isWin={true} open={true} onClose={() => {}} />);
        expect(screen.getByText('You won')).toBeInTheDocument();
    });
    it('renders loss message with higher', () => {
        render(
            <SnackbarAlert isWin={false} isNumberHigher={true} open={true} onClose={() => {}} />,
        );
        expect(screen.getByText('You lost')).toBeInTheDocument();
        expect(screen.getByText(/Number was higher/)).toBeInTheDocument();
    });
    it('renders custom message', () => {
        render(
            <SnackbarAlert
                isWin={null}
                open={true}
                onClose={() => {}}
                customMessage="Test message"
            />,
        );
        expect(screen.getByText('Test message')).toBeInTheDocument();
    });
});
