import { operandFunctions } from './index';
import { GuessType } from '@/core/enums';

const THRESHOLD = 10;
const LESS_THAN_THRESHOLD = 5;
const EQUAL_TO_THRESHOLD = 10;
const GREATER_THAN_THRESHOLD = 15;

describe('operandFunctions', () => {
    describe('GuessType.UNDER', () => {
        it('returns true if result < threshold', () => {
            expect(operandFunctions[GuessType.UNDER](LESS_THAN_THRESHOLD, THRESHOLD)).toBe(true);
        });

        it('returns false if result >= threshold', () => {
            expect(operandFunctions[GuessType.UNDER](EQUAL_TO_THRESHOLD, THRESHOLD)).toBe(false);
            expect(operandFunctions[GuessType.UNDER](GREATER_THAN_THRESHOLD, THRESHOLD)).toBe(
                false,
            );
        });
    });

    describe('GuessType.OVER', () => {
        it('returns true if result > threshold', () => {
            expect(operandFunctions[GuessType.OVER](GREATER_THAN_THRESHOLD, THRESHOLD)).toBe(true);
        });

        it('returns false if result <= threshold', () => {
            expect(operandFunctions[GuessType.OVER](EQUAL_TO_THRESHOLD, THRESHOLD)).toBe(false);
            expect(operandFunctions[GuessType.OVER](LESS_THAN_THRESHOLD, THRESHOLD)).toBe(false);
        });
    });
});
