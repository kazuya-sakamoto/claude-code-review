// シンプルな計算機クラス（検証用サンプル）

export class Calculator {
  // 問題1: 未使用の変数
  private unusedVariable = 0;

  // 問題2: any型の使用（型安全性が低い）
  add(a: any, b: any): number {
    return a + b;
  }

  // 問題3: 0除算のチェックがない
  divide(a: number, b: number): number {
    return a / b;
  }

  // 問題4: 複雑なロジックにコメントがない
  calculate(numbers: number[]): number {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (i % 2 === 0) {
        result += numbers[i] * 2;
      } else {
        result -= numbers[i];
      }
    }
    return result;
  }

  // 正常な関数（比較用）
  multiply(a: number, b: number): number {
    return a * b;
  }
}
