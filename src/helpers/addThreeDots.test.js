import addThreeDots from './addThreeDots.js';

describe('addThreeDots', () => {
  it('', () => {
    const input = 'Welcome to the desert of the real';
    const expected = 'Welcome to the desert of the real...';
    expect(addThreeDots(input)).toEqual(expected);
  });
});
