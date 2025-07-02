import { ResultFieldId, ResultGuess, ResultTime, ResultValue } from '@/core/enums/index';

export interface ResultItem {
    id: ResultFieldId;
    time: ResultTime;
    guess: ResultGuess;
    result: ResultValue;
    isOver: boolean;
    isUserWon: boolean;
}

export const resultData: ResultItem[] = [
    {
        id: ResultFieldId.One,
        time: ResultTime.T1,
        guess: ResultGuess.Over13,
        result: ResultValue.V100,
        isOver: true,
        isUserWon: true,
    },
    {
        id: ResultFieldId.Two,
        time: ResultTime.T2,
        guess: ResultGuess.Over45,
        result: ResultValue.V56,
        isOver: true,
        isUserWon: true,
    },
    {
        id: ResultFieldId.Three,
        time: ResultTime.T3,
        guess: ResultGuess.Over23,
        result: ResultValue.V43,
        isOver: true,
        isUserWon: false,
    },
    {
        id: ResultFieldId.Four,
        time: ResultTime.T4,
        guess: ResultGuess.Under53,
        result: ResultValue.V0,
        isOver: false,
        isUserWon: true,
    },
    {
        id: ResultFieldId.Five,
        time: ResultTime.T5,
        guess: ResultGuess.Over53,
        result: ResultValue.V100,
        isOver: true,
        isUserWon: false,
    },
    {
        id: ResultFieldId.Six,
        time: ResultTime.T6,
        guess: ResultGuess.Over13,
        result: ResultValue.V100,
        isOver: true,
        isUserWon: true,
    },
];
