import { describe, it } from 'node:test';
import assert from 'node:assert';
import { Calculator } from './sample.js';

describe('Calculator', () => {
  describe('add', () => {
    it('should add two numbers correctly', () => {
      const calc = new Calculator();
      assert.strictEqual(calc.add(2, 3), 5);
      assert.strictEqual(calc.add(10, -5), 5);
      assert.strictEqual(calc.add(0, 0), 0);
    });

    it('should handle any type (intentional issue)', () => {
      const calc = new Calculator();
      // any型なので文字列連結になる
      assert.strictEqual(calc.add('2', '3'), '23');
      // nullは0に変換される
      assert.strictEqual(calc.add(null, 5), 5);
      // undefinedの場合はNaNになる
      assert.ok(isNaN(calc.add(undefined, 5)));
    });
  });

  describe('divide', () => {
    it('should divide two numbers correctly', () => {
      const calc = new Calculator();
      assert.strictEqual(calc.divide(10, 2), 5);
      assert.strictEqual(calc.divide(9, 3), 3);
      assert.strictEqual(calc.divide(7, 2), 3.5);
    });

    it('should return Infinity when dividing by zero (intentional issue)', () => {
      const calc = new Calculator();
      // 0除算のチェックがないため、Infinityになる
      assert.strictEqual(calc.divide(10, 0), Infinity);
      assert.strictEqual(calc.divide(-10, 0), -Infinity);
    });

    it('should handle negative numbers', () => {
      const calc = new Calculator();
      assert.strictEqual(calc.divide(-10, 2), -5);
      assert.strictEqual(calc.divide(10, -2), -5);
    });
  });

  describe('calculate', () => {
    it('should calculate with alternating logic', () => {
      const calc = new Calculator();
      // [2, 3, 4, 5]
      // i=0(偶数): result = 0 + 2*2 = 4
      // i=1(奇数): result = 4 - 3 = 1
      // i=2(偶数): result = 1 + 4*2 = 9
      // i=3(奇数): result = 9 - 5 = 4
      assert.strictEqual(calc.calculate([2, 3, 4, 5]), 4);
    });

    it('should handle single element array', () => {
      const calc = new Calculator();
      // i=0(偶数): result = 0 + 5*2 = 10
      assert.strictEqual(calc.calculate([5]), 10);
    });

    it('should handle empty array', () => {
      const calc = new Calculator();
      assert.strictEqual(calc.calculate([]), 0);
    });

    it('should handle two elements', () => {
      const calc = new Calculator();
      // [10, 5]
      // i=0(偶数): result = 0 + 10*2 = 20
      // i=1(奇数): result = 20 - 5 = 15
      assert.strictEqual(calc.calculate([10, 5]), 15);
    });

    it('should handle negative numbers', () => {
      const calc = new Calculator();
      // [-2, -3]
      // i=0(偶数): result = 0 + (-2)*2 = -4
      // i=1(奇数): result = -4 - (-3) = -1
      assert.strictEqual(calc.calculate([-2, -3]), -1);
    });
  });

  describe('multiply', () => {
    it('should multiply two numbers correctly', () => {
      const calc = new Calculator();
      assert.strictEqual(calc.multiply(2, 3), 6);
      assert.strictEqual(calc.multiply(10, 5), 50);
      assert.strictEqual(calc.multiply(7, 8), 56);
    });

    it('should handle zero multiplication', () => {
      const calc = new Calculator();
      assert.strictEqual(calc.multiply(5, 0), 0);
      assert.strictEqual(calc.multiply(0, 5), 0);
      assert.strictEqual(calc.multiply(0, 0), 0);
    });

    it('should handle negative numbers', () => {
      const calc = new Calculator();
      assert.strictEqual(calc.multiply(-5, 3), -15);
      assert.strictEqual(calc.multiply(5, -3), -15);
      assert.strictEqual(calc.multiply(-5, -3), 15);
    });

    it('should handle decimal numbers', () => {
      const calc = new Calculator();
      assert.strictEqual(calc.multiply(2.5, 4), 10);
      assert.strictEqual(calc.multiply(1.5, 2), 3);
    });
  });
});
