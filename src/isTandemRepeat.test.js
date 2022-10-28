const solution = require('./isTandemRepeat.js');

test('test 1', () => {
    expect(solution('tandemtandem')).toBe(true);
});

test('test 2', () => {
    expect(solution('qqq')).toBe(false);
});

test('test 3', () => {
    expect(solution('2w2ww')).toBe(false);
});

test('test 4', () => {
    expect(solution('hophey')).toBe(false);
});

test('test 5', () => {
    expect(solution('CodeSignalCodeSignal')).toBe(true);
});

test('test 6', () => {
    expect(solution('interestinterest')).toBe(true);
});

test('test 7', () => {
    expect(solution('aa')).toBe(true);
});

test('test 8', () => {
    expect(solution('ab')).toBe(false);
});

test('test 9', () => {
    expect(solution('stringString')).toBe(false);
});

test('test 10', () => {
    expect(solution('truetruetrue')).toBe(false);
});
