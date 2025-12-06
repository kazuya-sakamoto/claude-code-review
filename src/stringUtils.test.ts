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

});