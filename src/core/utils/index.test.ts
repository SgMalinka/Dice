import { operandFunctions } from './index';
import { GuessType } from '@/core/enums';

describe('operandFunctions', () => {
    it('should return true if result < threshold for GuessType.UNDER', () => {
        expect(operandFunctions[GuessType.UNDER](5, 10)).toBe(true);
        expect(operandFunctions[GuessType.UNDER](10, 10)).toBe(false);
        expect(operandFunctions[GuessType.UNDER](15, 10)).toBe(false);
    });

    it('should return true if result > threshold for GuessType.OVER', () => {
        expect(operandFunctions[GuessType.OVER](15, 10)).toBe(true);
        expect(operandFunctions[GuessType.OVER](10, 10)).toBe(false);
        expect(operandFunctions[GuessType.OVER](5, 10)).toBe(false);
    });
});
