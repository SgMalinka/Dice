import { GameNumbers, GuessType } from '@/core/enums';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { operandFunctions } from '@/core/utils';

const MAX_HISTORY = GameNumbers.MAX_HISTORY;

interface History {
    id: string;
    time: string;
    guess: string;
    result: number;
    isUserWon: boolean;
}

export const useDiceGame = () => {
    const [threshold, setThreshold] = useState<number>(GameNumbers.START_WITH);
    const [operand, setOperand] = useState<GuessType.UNDER | GuessType.OVER>(GuessType.UNDER);
    const [result, setResult] = useState<number | null>(null);
    const [isWin, setIsWin] = useState<boolean | null>(null);
    const [history, setHistory] = useState<History[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [customMessage, setCustomMessage] = useState<string | null>(null);

    useEffect(() => {
        const storedHistory = localStorage.getItem('diceGameHistory');
        if (storedHistory) {
            setHistory(JSON.parse(storedHistory));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('diceGameHistory', JSON.stringify(history));
    }, [history]);

    const playGame = () => {
        if (threshold === 100 && operand === GuessType.OVER) {
            setCustomMessage('You cannot choose a number greater than 100.');
            setIsOpen(true);
            setIsWin(null);
            return;
        }

        if (threshold === 0 && operand === GuessType.UNDER) {
            setCustomMessage('You cannot get a number less than 0.');
            setIsOpen(true);
            setIsWin(null);
            return;
        }

        const rolled = Math.floor(Math.random() * GameNumbers.MAX_THRESHOLD) + GameNumbers.ONE;
        const win = operandFunctions[operand](rolled, threshold);

        setResult(rolled);
        setIsWin(win);
        setCustomMessage(null);

        const newEntry = {
            id: uuidv4(),
            time: new Date().toLocaleTimeString('en-GB', { hour12: false }),
            guess: `${operand === GuessType.UNDER ? GuessType.UNDER : GuessType.OVER} ${threshold}`,
            result: rolled,
            isUserWon: win,
        };

        setHistory(prev => [newEntry, ...prev].slice(GameNumbers.MIN_THRESHOLD, MAX_HISTORY));
        setIsOpen(false);

        setTimeout(() => {
            setIsOpen(true);
        }, 0);
    };

    return {
        threshold,
        setThreshold,
        setIsOpen,
        operand,
        setOperand,
        result,
        isWin,
        playGame,
        history,
        isOpen,
        customMessage,
    };
};
