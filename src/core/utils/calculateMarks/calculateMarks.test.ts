import { calculateMarks } from './calculateMarks';

const testCases = [
    { min: 0, max: 10, expected: [2, 4, 6, 8, 10] },
    { min: 0, max: 5, expected: [1, 2, 3, 4, 5] },
    { min: 10, max: 20, expected: [12, 14, 16, 18, 20] },
];

const remainderTestCase = { min: 0, max: 7, expected: [2, 4, 5, 6, 7] };

const invalidIntegerCases = [
    { min: 0.5, max: 10 },
    { min: 0, max: 10.1 },
    { min: NaN, max: 10 },
];

const invalidRangeCases = [
    { min: 10, max: 10 },
    { min: 10, max: 5 },
];

describe('calculateMarks', () => {
    it('calculates correct marks for valid integer range', () => {
        testCases.forEach(({ min, max, expected }) => {
            expect(calculateMarks(min, max)).toEqual(expected);
        });
    });

    it('distributes remainder correctly', () => {
        const { min, max, expected } = remainderTestCase;
        expect(calculateMarks(min, max)).toEqual(expected);
    });

    it('throws TypeError if min or max is not integer', () => {
        invalidIntegerCases.forEach(({ min, max }) => {
            expect(() => calculateMarks(min, max)).toThrow(TypeError);
        });
    });

    it('throws RangeError if max is less than or equal to min', () => {
        invalidRangeCases.forEach(({ min, max }) => {
            expect(() => calculateMarks(min, max)).toThrow(RangeError);
        });
    });
});
