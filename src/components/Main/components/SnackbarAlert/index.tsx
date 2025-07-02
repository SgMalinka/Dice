'use client';

import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { COLORS, Number, Status } from '@/core/enums';

interface SnackbarAlertProps {
    isWin: boolean | null;
    isNumberHigher?: boolean;
    open: boolean;
    onClose: () => void;
    customMessage?: string | null;
}

export const SnackbarAlert = ({
    isWin,
    isNumberHigher,
    open,
    onClose,
    customMessage,
}: SnackbarAlertProps) => {
    if (isWin === null && !customMessage) return null;

    return (
        <Snackbar
            open={open}
            autoHideDuration={6000}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            onClose={onClose}
            sx={{ mt: '16px', width: '100%' }}
        >
            <Alert
                severity={isWin ? Status.SUCCESS : Status.ERROR}
                variant="filled"
                sx={{
                    maxWidth: '600px',
                    width: '100%',
                    mr: '16px',
                    backgroundColor: isWin ? COLORS.LIGHT_GREEN : COLORS.LIGHT_RED,
                }}
            >
                <div>
                    {customMessage ? (
                        <>{customMessage}</>
                    ) : isWin ? (
                        <>You won</>
                    ) : (
                        <>
                            <div>You lost</div>
                            <small>
                                Number was {isNumberHigher ? Number.HIGHER : Number.LOWER}
                            </small>
                        </>
                    )}
                </div>
            </Alert>
        </Snackbar>
    );
};
