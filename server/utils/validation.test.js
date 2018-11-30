const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    expect(isRealString(1)).toBeFalsy();
    expect(isRealString({})).toBeFalsy();
  });
  it('should reject string with only spaces', () => {
    expect(isRealString('   ')).toBeFalsy();
    expect(isRealString('')).toBeFalsy();
  });
  it('should allow string with non-space characters', () => {
    expect(isRealString('abc')).toBeTruthy();
    expect(isRealString('123')).toBeTruthy();
  });
});
