# Claude Code PR Review - 検証用リポジトリ

このリポジトリは、Claude Code による自動PRレビュー機能を検証するためのテストリポジトリです。

## 目的

- Claude Code CLI を使用した自動コードレビューの検証
- GitHub Actions ワークフローの動作確認
- Sharefull Frontend への本番導入前の評価

## セットアップ

### 1. Anthropic API Keyの取得

1. https://console.anthropic.com/ にアクセス
2. ログインまたは新規アカウント作成
3. 左メニューの「API Keys」から新しいキーを作成
4. 「Personal」ワークスペースを選択

### 2. GitHub Secretsの設定

1. リポジトリの Settings > Secrets and variables > Actions
2. 「New repository secret」をクリック
3. **Name**: `ANTHROPIC_API_KEY`
4. **Value**: 作成したAPIキー
5. 「Add secret」をクリック

## テストファイル

`src/` ディレクトリ内のファイルには、意図的に以下の問題を含めています：

- **`src/sample.ts`**:
  - 未使用変数
  - any型の使用
  - 0除算のチェック欠如
  - コメント不足

- **`src/api.ts`**:
  - エラーハンドリング欠如（try-catchなし）
  - ネットワークエラーのチェックなし

## 使い方

### テストPRの作成

```bash
# 機能ブランチを作成
git checkout -b feature/test-review

# テストファイルを修正
# 例: src/sample.ts の未使用変数を削除、any型をnumberに変更

# コミット
git add src/sample.ts
git commit -m "fix: Improve type safety in Calculator class"

# プッシュ
git push origin feature/test-review
```

### PRを作成

```bash
# GitHub CLI を使用
gh pr create --base main --head feature/test-review \
  --title "fix: Improve type safety in Calculator class" \
  --body "Calculator クラスの型安全性を改善しました"

# または GitHub Web UI で作成
# https://github.com/kazuya-sakamoto/claude-code-review/pulls
```

### レビュー結果の確認

1. PR作成後、GitHub Actionsが自動実行される（1-3分）
2. PRに「🤖 Claude Code レビュー結果」コメントが投稿される
3. 指摘内容を確認

### コメントトリガー

PRに以下のコメントを投稿すると、レビューを再実行できます：

```
@claude
```

## ワークフロー

- **ファイル**: `.github/workflows/claude-pr-review.yml`
- **トリガー**: `main` ブランチへのPR作成時（`opened`）
- **コメントトリガー**: `@claude`
- **対象ファイル**: `.ts`, `.tsx`, `.js`, `.jsx`（最大20ファイル）

## 認証方式

**Option A: Anthropic API Key** (現在採用)
- シンプルな設定
- GitHub Secrets に `ANTHROPIC_API_KEY` を登録

**Option B: GCP Vertex AI** (サポート済み、設定次第で使用可能)
- Workload Identity Federation
- 短命トークン認証

## コスト目安

- 1 PR あたり: 約$0.03-0.10
- 月間50PR: 約$2.25

## 次のステップ

検証が成功したら、`sharefull-frontend` リポジトリへ展開します。

## ライセンス

MIT
