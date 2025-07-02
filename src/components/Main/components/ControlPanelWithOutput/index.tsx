'use client';

import React from 'react';
import { PlayButton, RadioGroupInputs, Result, SliderInput } from './components';

import s from './index.module.scss';
import { GuessType } from '@/core/enums';

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
        <div className={s.panel}>
            <div className={s.panel__select}>
                <Result value={result} />
                <RadioGroupInputs value={operand} onChange={setOperand} />
                <SliderInput value={threshold} onChange={setThreshold} />
            </div>
            <PlayButton onClick={playGame} />
        </div>
    );
};
