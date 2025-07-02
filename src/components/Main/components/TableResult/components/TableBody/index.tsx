import React from 'react';

import s from '../../index.module.scss';
import { COLORS } from '@/core/enums';

interface TableProps {
    time: string;
    guess: string;
    isUserWon: boolean;
    result: number;
}

export const TableBody = ({ time, guess, isUserWon, result }: TableProps) => {
    return (
        <div className={s.table__item}>
            <div className={s.table__cell}>{time}</div>
            <div className={s.table__cell}>{guess}</div>
            <div className={s.table__cell} style={{ color: isUserWon ? COLORS.GREEN : COLORS.RED }}>
                {result}
            </div>
        </div>
    );
};
