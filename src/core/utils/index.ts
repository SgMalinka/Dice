import { GuessType } from '@/core/enums';

export const operandFunctions = {
    [GuessType.UNDER]: (result: number, threshold: number) => result < threshold,
    [GuessType.OVER]: (result: number, threshold: number) => result > threshold,
};
