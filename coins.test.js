const expect = require('expect.js');

const { coinChanger } = require('./coins');

describe('Coins', () => {
  it('returns 4, for an array of [1,2,3] and a sum of 4', () => {
    expect(coinChanger([1,2,3], 4)).to.equal(4);
  });

  it('returns 5, for an array of [2, 5, 3, 6] and a sum of 10', () => {
    expect(coinChanger([2, 5, 3, 6], 10)).to.equal(5);
  });

  it('is efficient for a large sum', () => {
    const start = performance.now();
    coinChanger([1, 5, 10, 25], 1000);
    const end = performance.now();
    const performanceTime = end - start;

    // Should handle this case in under 10ms
    expect(performanceTime).to.be.lessThan(10);
  });
});
