'use client';

import React from 'react';
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
        <div className={s.main}>
            <SnackbarAlert
                isWin={isWin}
                isNumberHigher={true}
                open={isOpen}
                onClose={() => setIsOpen(false)}
                customMessage={customMessage}
            />
            <div className={s.main__container}>
                <ControlPanelWithOutput
                    threshold={threshold}
                    setThreshold={setThreshold}
                    setOperand={setOperand}
                    result={result}
                    playGame={playGame}
                    operand={operand}
                />
                <TableResult history={history} />
            </div>
        </div>
    );
};
