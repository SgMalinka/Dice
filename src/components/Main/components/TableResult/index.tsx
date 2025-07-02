import React from 'react';
import { resultData } from '@/core/constants/index';

import s from './index.module.scss';

export const TableResult = () => {
    return (
        <div className={s.table}>
            <div className={s.table__header}>
                <p className={s.table__header__item}>Time</p>
                <p className={s.table__header__item}>Guess</p>
                <p className={s.table__header__item}>Result</p>
            </div>
            <div className={s.table__container}>
                {resultData.map(item => (
                    <div key={item.id} className={s.table__item}>
                        <div className={s.table__cell}>{item.time}</div>
                        <div className={s.table__cell}>{item.guess}</div>
                        <div
                            className={s.table__cell}
                            style={{ color: item.isUserWon ? '#1b5e20' : '#c62828' }}
                        >
                            {item.result}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
