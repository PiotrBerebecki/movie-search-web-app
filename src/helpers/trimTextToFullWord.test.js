import trimTextToFullWord from './trimTextToFullWord';

describe('trimTextToFullWord', () => {
  it('trims text to full word', () => {
    const input = 'Welcome to the desert of the real';
    const expected = 'Welcome';
    expect(trimTextToFullWord(input, 0, 2)).toEqual(expected);
  });

  it('returns the full text if the text is short', () => {
    const input = 'Welcome to the desert of the real';
    const expected = input;
    expect(trimTextToFullWord(input, 0, 80)).toEqual(expected);
  });
});
