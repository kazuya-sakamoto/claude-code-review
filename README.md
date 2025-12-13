# AI 自動コードレビュー 検証用リポジトリ

このリポジトリは、AI による自動 PR レビュー機能の検証用です。

## 検証内容

以下の 2 つのオプションを検証しました：

### 1. Anthropic API（直接使用）

- **方式**: GitHub Actions で Claude API を直接呼び出し
- **コスト**: 月 10 回で約$0.45-$2.25（従量課金）
- **メリット**: カスタマイズ性が高い
- **デメリット**: クレジットチャージが必要

### 2. CodeRabbit

- **方式**: GitHub App による自動レビュー
- **コスト**: **完全無料**（パブリックリポジトリ）
- **メリット**: 無料、セットアップ簡単、インラインコメント対応
- **設定**: 手動トリガーモード（`.coderabbit.yaml`）

**検証結果**: CodeRabbit を採用（無料、簡単、機能豊富）

## 詳細なコスト比較

3 つのオプション（Anthropic API、CodeRabbit、Vertex AI）の詳細な比較は以下をご覧ください：

→ **[COST_COMPARISON.md](./COST_COMPARISON.md)**

## 🚀 使い方（CodeRabbit）

### レビューのトリガー

PR 作成後、自動レビューは実行されません（手動トリガーモード）。

レビューが必要な場合、PR に以下のコメントを投稿：

```
@coderabbitai review
```

数分以内に CodeRabbit が日本語でレビューを実行します。

### その他のコマンド

- `@coderabbitai full review` - 完全レビュー（全ファイル再レビュー）
- `@coderabbitai summary` - サマリー再生成
- `@coderabbitai configuration` - 現在の設定を表示

## 📁 テストファイル

`src/stringUtils.ts` には、意図的に以下の問題を含めています：

- `any`型の使用
- null/undefined チェック欠如
- バリデーション不足

CodeRabbit がこれらを正しく検出できるか検証しています。

## 🔄 次のステップ

検証が成功したら、`sharefull-frontend` リポジトリへの本番導入を検討します。

## ライセンス

MIT
