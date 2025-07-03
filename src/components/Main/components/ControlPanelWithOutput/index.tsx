'use client';

import React from 'react';
import { PlayButton, RadioGroupInputs, Result, SliderInput } from './components';
import { Box } from '@mui/material';
import { GuessType } from '@/core/enums';

import s from './index.module.scss';

interface ControlProps {
    result: number | null;
    threshold: number;
    operand: GuessType.UNDER | GuessType.OVER;
    setOperand: (operand: GuessType.UNDER | GuessType.OVER) => void;
    setThreshold: (value: number) => void;
    playGame: () => void;
}

export const ControlPanelWithOutput = ({
    result,
    threshold,
    operand,
    setOperand,
    setThreshold,
    playGame,
}: ControlProps) => {
    return (
        <Box className={s.panel}>
            <Box className={s.panel__select}>
                <Result value={result} />
                <RadioGroupInputs value={operand} onChange={setOperand} />
                <SliderInput value={threshold} onChange={setThreshold} />
            </Box>
            <PlayButton onClick={playGame} />
        </Box>
    );
};
