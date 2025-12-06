// シンプルなAPI処理（検証用サンプル）

export class ApiClient {
  private baseUrl = 'https://api.example.com';

  // 問題1: エラーハンドリングがない（try-catchなし）
  async fetchUser(userId: string) {
    const response = await fetch(`${this.baseUrl}/users/${userId}`);
    return response.json();
  }

  // 問題2: ネットワークエラーのチェックがない
  async createUser(userData: any) {
    const response = await fetch(`${this.baseUrl}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return response.json();
  }

  // 正常な関数（比較用）
  async fetchUserSafe(userId: string) {
    try {
      const response = await fetch(`${this.baseUrl}/users/${userId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Failed to fetch user:', error);
      throw error;
    }
  }
}
