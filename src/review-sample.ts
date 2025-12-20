// CodeRabbit 検証用サンプルコード

// 問題1: any型の使用
export function processUserData(userData: any): any {
  return {
    id: userData.id,
    name: userData.name,
    email: userData.email,
  };
}

// 問題2: エラーハンドリングがない非同期処理
export async function fetchUserData(userId: string) {
  const response = await fetch(`https://api.example.com/users/${userId}`);
  const data = await response.json();
  return data;
}

// 問題3: HTTPステータスコードのチェックがない
export async function createPost(postData: any) {
  const response = await fetch('https://api.example.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData),
  });
  return response.json();
}

// 問題4: 未使用の変数
export function calculateTotal(items: number[]) {
  const unusedVariable = 0;
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i];
  }
  return total;
}

// 問題5: console.logの残存
export function validateEmail(email: string): boolean {
  console.log('Validating email:', email);
  return email.includes('@');
}

// 問題6: debuggerステートメント
export function processOrder(orderId: string) {
  debugger;
  return { orderId, status: 'processed' };
}

// 問題7: コメントアウトされたコード
export function getConfig() {
  // const oldConfig = { apiUrl: 'http://old-api.com' };
  return { apiUrl: 'https://api.example.com' };
}

// 問題8: マジックナンバー
export function checkAge(age: number): boolean {
  return age >= 18;
}
