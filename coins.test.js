const assert = require('assert');
const { coinChanger } = require('./coins');

describe('Coins', () => {
  it('returns 4, for an array of [1,2,3] and a sum of 4', () => {
    assert.equal(coinChanger([1,2,3], 4), 4);
  });
});
