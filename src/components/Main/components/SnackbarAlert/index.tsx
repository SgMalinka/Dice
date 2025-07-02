'use client';

import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

interface SnackbarAlertProps {
    isWin: boolean;
    isNumberHigher?: boolean;
    open: boolean;
}

export const SnackbarAlert: React.FC<SnackbarAlertProps> = ({ isWin, isNumberHigher, open }) => {
    return (
        <Snackbar
            open={open}
            autoHideDuration={600}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            sx={{ mt: '16px', width: '100%' }}
        >
            <Alert
                severity={isWin ? 'success' : 'error'}
                variant="filled"
                sx={{
                    maxWidth: '600px',
                    width: '100%',
                    mr: '16px',
                    backgroundColor: isWin ? '#2e7d32' : '#d32f2f',
                }}
            >
                <div>
                    {isWin ? (
                        <>You won</>
                    ) : (
                        <>
                            <div>You lost</div>
                            <small>Number was {isNumberHigher ? 'higher' : 'lower'}</small>
                        </>
                    )}
                </div>
            </Alert>
        </Snackbar>
    );
};
