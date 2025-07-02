import React from 'react';
import s from './index.module.scss';

interface ResultProps {
    value: number | null;
}

export const Result = ({ value }: ResultProps) => (
    <div className={s.result}>
        <p className={s.result__info}>{value !== null ? value : '-'}</p>
    </div>
);
