'use client';

import React from 'react';
import { ControlPanelWithOutput, SnackbarAlert, TableResult } from './components';

import s from './index.module.scss';

export const Main = () => {
    return (
        <div className={s.main}>
            <SnackbarAlert isWin={false} isNumberHigher={true} open={true} />
            <div className={s.main__container}>
                <ControlPanelWithOutput />
                <TableResult />
            </div>
        </div>
    );
};
