import pipe from './pipe.js';
import trimTextToFullWord from './trimTextToFullWord.js';
import addThreeDots from './addThreeDots.js';

describe('pipe', () => {
  it('pipes two functions', () => {
    const input = 'Welcome to the desert of the real';
    const expected = 'Welcome...';
    expect(pipe(trimTextToFullWord, addThreeDots)(input, 0, 1)).toEqual(
      expected
    );
  });

  it('pipes three functions', () => {
    const input = 'Welcome to the desert of the real';
    const expected = 'Welcome......';
    expect(
      pipe(trimTextToFullWord, addThreeDots, addThreeDots)(input, 0, 1)
    ).toEqual(expected);
  });
});
