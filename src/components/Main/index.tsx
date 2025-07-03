'use client';

import React from 'react';
import { Box } from '@mui/material';
import { ControlPanelWithOutput, SnackbarAlert, TableResult } from './components';
import { useDiceGame } from '@/hooks';

import s from './index.module.scss';

export const Main = () => {
    const {
        isOpen,
        setIsOpen,
        threshold,
        setThreshold,
        operand,
        setOperand,
        result,
        isWin,
        playGame,
        history,
        customMessage,
    } = useDiceGame();

    return (
        <Box className={s.main}>
            <SnackbarAlert
                isWin={isWin}
                isNumberHigher={true}
                open={isOpen}
                onClose={() => setIsOpen(false)}
                customMessage={customMessage}
            />
            <Box className={s.main__container}>
                <ControlPanelWithOutput
                    threshold={threshold}
                    setThreshold={setThreshold}
                    setOperand={setOperand}
                    result={result}
                    playGame={playGame}
                    operand={operand}
                />
                <TableResult history={history} />
            </Box>
        </Box>
    );
};
