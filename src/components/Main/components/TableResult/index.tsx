import React from 'react';
import s from './index.module.scss';
import { TableBody } from './components';

interface HistoryItem {
    time: string;
    guess: string;
    result: number;
    isUserWon: boolean;
}

interface TableResultProps {
    history: HistoryItem[];
}

export const TableResult = ({ history }: TableResultProps) => (
    <div className={s.table}>
        <div className={s.table__header}>
            <p className={s.table__header__item}>Time</p>
            <p className={s.table__header__item}>Guess</p>
            <p className={s.table__header__item}>Result</p>
        </div>
        <div className={s.table__container}>
            {history.map((item, idx) => (
                <TableBody
                    key={idx}
                    guess={item.guess}
                    isUserWon={item.isUserWon}
                    result={item.result}
                    time={item.time}
                />
            ))}
        </div>
    </div>
);
