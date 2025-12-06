import { describe, it } from 'node:test';
import assert from 'node:assert';
import {
  reverseString,
  toUpperCase,
  getLength,
  repeatString
} from './stringUtils.js';

describe('stringUtils', () => {
  describe('reverseString', () => {
    it('should reverse a string', () => {
      assert.strictEqual(reverseString('hello'), 'olleh');
      assert.strictEqual(reverseString('123'), '321');
    });

    it('should handle empty string', () => {
      assert.strictEqual(reverseString(''), '');
    });

    // any型の問題を露呈するテスト
    it('should fail with null (intentional issue)', () => {
      assert.throws(() => reverseString(null));
    });
  });

  describe('toUpperCase', () => {
    it('should convert string to uppercase', () => {
      assert.strictEqual(toUpperCase('hello'), 'HELLO');
      assert.strictEqual(toUpperCase('World'), 'WORLD');
    });

    it('should handle empty string', () => {
      assert.strictEqual(toUpperCase(''), '');
    });
  });

  describe('getLength', () => {
    it('should return string length', () => {
      assert.strictEqual(getLength('hello'), 5);
      assert.strictEqual(getLength(''), 0);
    });

    it('should throw error for non-string input', () => {
      assert.throws(() => getLength(null as any));
      assert.throws(() => getLength(123 as any));
    });
  });

  describe('repeatString', () => {
    it('should repeat string n times', () => {
      assert.strictEqual(repeatString('a', 3), 'aaa');
      assert.strictEqual(repeatString('hello', 2), 'hellohello');
    });

    it('should handle zero repetitions', () => {
      assert.strictEqual(repeatString('hello', 0), '');
    });

    // 負の数の問題を露呈するテスト
    it('should handle negative repetitions (intentional issue)', () => {
      assert.throws(() => repeatString('hello', -1));
    });
  });
});
