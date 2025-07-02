'use client';

import React from 'react';
import { PlayButton, RadioGroupInputs, Result, SliderInput } from './components';

import s from './index.module.scss';

export const ControlPanelWithOutput = () => {
    return (
        <div className={s.panel}>
            <div className={s.panel__select}>
                <Result />
                <RadioGroupInputs />
                <SliderInput />
            </div>
            <PlayButton />
        </div>
    );
};
