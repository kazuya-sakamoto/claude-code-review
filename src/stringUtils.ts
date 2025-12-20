/**
 * 文字列を逆順にする関数
 * 意図的な問題:
 * - null/undefined チェックがない
 * - any型を使用
 */
export function reverseString(str: any): string {
  return str.split('').reverse().join('');
}

/**
 * 文字列を大文字に変換する関数
 * 意図的な問題:
 * - エラーハンドリングがない
 */
export function toUpperCase(str: string): string {
  return str.toUpperCase();
}

/**
 * 文字列の長さを返す関数（正常な実装）
 */
export function getLength(str: string): number {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }
  return str.length;
}

/**
 * 文字列を繰り返す関数
 * 意図的な問題:
 * - 負の数のチェックがない
 */
export function repeatString(str: string, times: number): string {
  return str.repeat(times);
}

/**
 * 文字列をトリムする関数
 * 意図的な問題:
 * - any型を使用している
 * - null/undefinedチェックがない
 */
export function trimString(str: any): string {
  return str.trim();
}

/**
 * 配列を結合して文字列にする関数
 * 意図的な問題:
 * - 配列の型チェックがない
 * - セパレーターのデフォルト値がない
 */
export function joinArray(arr: any, separator: string): string {
  return arr.join(separator);
}