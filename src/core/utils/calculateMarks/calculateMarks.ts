export function calculateMarks(min: number, max: number): number[] {
    if (!Number.isInteger(min) || !Number.isInteger(max))
        throw new TypeError('min/max should be int values');
    if (max <= min) throw new RangeError('max should be greater than min');

    const len = max - min;
    const base = Math.floor(len / 5);
    const extra = len % 5;
    const ticks: number[] = [];
    let current = min;

    for (let i = 0; i < 5; i++) {
        const step = base + (i < extra ? 1 : 0);
        current += step;
        ticks.push(current);
    }
    return ticks;
}
