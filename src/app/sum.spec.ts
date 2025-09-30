const sum = (a: number, b: number) => a + b;

describe('sum', () => {
  it('returns the sum of two numbers', () => {
    const result = sum(2, 3);
    expect(result).toEqual(5);
  });
});

// Testar o Jest!
