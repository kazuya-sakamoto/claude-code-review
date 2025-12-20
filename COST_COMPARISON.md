# GitHub Actions 自動コードレビュー コスト比較ガイド

## 📋 概要

このドキュメントでは、GitHub Actions で Claude による自動コードレビューを実現する 3 つのオプションのコスト比較を提供します。

**目的**: 最もコスト効率の良い自動レビューソリューションを選択する

**対象読者**: 個人開発者、スタートアップ、企業の技術選定担当者

**重要な発見**: ✨ **ユーザーの期待「無料で使える」は実現可能です！**

---

## 🎯 エグゼクティブサマリー

### 検証用（今すぐ・パブリックリポジトリ）

**推奨**: **CodeRabbit**（完全無料）

- ✅ パブリックリポジトリは永久無料
- ✅ セットアップ 2 分で完了
- ✅ クレジットチャージ不要

### 実運用（将来・企業プロジェクト・月 50 回以上）

**推奨**: **Anthropic API 直接使用** または **CodeRabbit**

- **Anthropic API**: $11-$56/月（従量課金、カスタマイズ性高）
- **CodeRabbit**: $24/月/開発者（固定料金、専用 UI）
- **Vertex AI**: $12.50-$62.50/月 + α（GCP 統合、セキュリティ重視）

---

## 💰 無料枠の詳細

### Option 1: Anthropic API 直接使用

- **無料枠**: 月 50,000 トークン
- **レート制限**: 最大 60 リクエスト/分
- **対象モデル**: Claude Sonnet 4.5 を含む全モデル
- **超過後**: 従量課金（Input $3/1M tokens, Output $15/1M tokens）

**月 10 回のレビューのトークン消費試算**:

- 小規模 PR（100 行）: 約 10,000 トークン/回 → 月 10 回 = 100,000 トークン → **無料枠超過**
- 中規模 PR（300 行）: 約 30,000 トークン/回 → 月 10 回 = 300,000 トークン → **無料枠超過**

**超過分のコスト**:

- 月 10 回（小規模 PR）: 約 100,000 トークン → 超過 50,000 トークン → **$0.45-$2.25/月**
- 月 10 回（中規模 PR）: 約 300,000 トークン → 超過 250,000 トークン → **$2.25-$11.25/月**

### Option 2: CodeRabbit

- **無料枠（パブリックリポジトリ）**: 永久無料（レート制限あり）
  - ファイル: 200/時間
  - レビュー: 3 連続後、4 レビュー/時間
  - 会話: 25 連続後、50 メッセージ/時間
- **無料トライアル（プライベートリポジトリ）**: 14 日間
- **プライベートリポジトリ**: $24/月/開発者（年間契約）または $30/月

### Option 3: Vertex AI（Google Cloud 経由）

- **無料枠（GCP 新規アカウントのみ）**: $300 クレジット（90 日間）
- **既存アカウント**: 無料枠なし
- **料金**: Anthropic 直接 API と同等 + 10% 地域プレミアム + 隠れコスト

---

## 📊 詳細コスト比較表

| 項目                            | Anthropic API 直接      | CodeRabbit                                  | Vertex AI                  |
| ------------------------------- | ----------------------- | ------------------------------------------- | -------------------------- |
| **無料枠**                      | 月 50,000 トークン      | パブリック永久無料                          | GCP 新規$300（90 日のみ）  |
| **月 10 回コスト（小規模 PR）** | $0.45-$2.25             | **$0（パブリック）**<br>$24（プライベート） | $0.50-$2.50 + 隠れコスト   |
| **月 10 回コスト（中規模 PR）** | $2.25-$11.25            | **$0（パブリック）**<br>$24（プライベート） | $2.50-$12.50 + 隠れコスト  |
| **月 50 回コスト（小規模 PR）** | $5.62-$28.13            | **$0（パブリック）**<br>$24（プライベート） | $6.25-$31.25 + 隠れコスト  |
| **月 50 回コスト（中規模 PR）** | $11.25-$56.25           | **$0（パブリック）**<br>$24（プライベート） | $12.50-$62.50 + 隠れコスト |
| **セットアップ時間**            | 5 分（簡単）            | 2 分（最も簡単）                            | 30-60 分（複雑）           |
| **カスタマイズ性**              | ✅ 高（プロンプト自由） | ⚠️ 低（UI 設定のみ）                        | ✅ 高（プロンプト自由）    |
| **インラインコメント**          | ⚠️ MCP 問題で不安定     | ✅ 完全サポート                             | ⚠️ MCP 問題で不安定        |
| **セキュリティ**                | ⚠️ API Key 管理         | ✅ OAuth 認証                               | ✅ Workload Identity       |
| **GCP 統合**                    | ❌ 不要                 | ❌ 不要                                     | ✅ 既存プロジェクト活用    |
| **レート制限**                  | 60 リクエスト/分        | ファイル 200/時間                           | GCP クォータ管理           |
| **隠れコスト**                  | なし                    | なし                                        | データ転送、CloudLogging   |
| **メンテナンス負荷**            | 低（公式 Action 使用）  | なし（フルマネージド）                      | 中（GCP 設定管理）         |

---

## 🎯 推奨オプション（ケース別）

### パターン A: 検証用・パブリックリポジトリ

**最推奨**: **Option 2（CodeRabbit）**

**理由**:

1. ✅ **完全無料** - パブリックリポジトリは永久無料
2. ✅ **セットアップ最速** - GitHub App インストールのみ（2 分）
3. ✅ **クレジットチャージ不要** - すぐに使い始められる
4. ✅ **インラインコメント完全対応** - MCP 問題なし
5. ✅ **専用 UI** - レビュー履歴、分析ダッシュボード
6. ✅ **メンテナンス不要** - CodeRabbit 側で自動アップデート

**デメリット**:

- カスタマイズ性が低い（ただし、日本語レビュー指示は可能）

**セットアップ手順**:

1. https://www.coderabbit.ai/ にアクセス
2. GitHub アカウントでサインアップ
3. リポジトリを選択
4. 完了（即座にレビュー開始）

**次善の策**: Option 1（Anthropic API 直接）

- 月 10 回（小規模 PR）なら $0.45-$2.25/月 で安価
- カスタマイズ性が高い（プロンプトで日本語レビュー観点を自由に設定）

### パターン B: 実運用・プライベートリポジトリ・少人数（1-2 名）

**最推奨**: **Option 1（Anthropic API 直接）**

**理由**:

1. ✅ **低コスト** - 月 10 回で $0.45-$2.25/月、月 50 回で $11.25-$56.25/月
   - CodeRabbit の $24/月 より大幅に安い（月 50 回中規模 PR でも同等以下）
2. ✅ **従量課金で柔軟** - PR 数が少ない月は安い
3. ✅ **カスタマイズ性高** - プロンプトで日本語レビュー指示可能
4. ✅ **セットアップ簡単** - 5 分で完了
5. ✅ **透明なコスト** - 従量課金で明確
6. ✅ **開発者数に関係なし** - 定額料金ではない

**デメリット**:

- インラインコメントが不安定（MCP 問題）
- トップレベルコメントのみ確実

**コスト試算（月 50 回の場合）**:

- 小規模 PR 中心（100 行）: $5.62-$28.13/月 → CodeRabbit $24/月 より安い〜同等
- 中規模 PR 中心（300 行）: $11.25-$56.25/月 → CodeRabbit $24/月 と比較して柔軟

**次善の策**: Option 2（CodeRabbit）

- 月 $24/月 だが、インラインコメント完全対応
- 固定料金で予算管理しやすい
- ただし、複数開発者がいる場合は割高（$24 × 開発者数）

### パターン C: 実運用・プライベートリポジトリ・複数開発者（3 名以上）

**最推奨**: **Option 1（Anthropic API 直接）** または **Option 2（CodeRabbit）**

**判断基準**:

- **月 50 回以下、小規模 PR 中心**: Anthropic API 直接（$5.62-$28.13/月）
- **月 50 回以上、予算重視**: CodeRabbit（$24/月/開発者 vs Anthropic $11.25-$56.25/月）
- **開発者 1 名のみレビュー使用**: Anthropic API 直接
- **全員がレビュー使用**: CodeRabbit（レビュー回数無制限）

**コスト比較例（3 名の開発者、月 50 回レビュー）**:

- Anthropic API: $11.25-$56.25/月（開発者数に関係なし）
- CodeRabbit: $24 × 3 名 = $72/月

**結論**: 開発者 3 名以上でも、Anthropic API の方が安価な場合が多い

### パターン D: 企業・大規模プロジェクト・GCP 統合・セキュリティ重視

**最推奨**: **Option 3（Vertex AI）**

**理由**:

1. ✅ **セキュリティ** - Workload Identity、短命トークン（1 時間で自動失効）
2. ✅ **GCP 統合** - 既存の GCP プロジェクト活用
3. ✅ **コンプライアンス** - VPC-SC、IAM、単一請求書
4. ✅ **エンタープライズ機能** - BigQuery 連携、Cloud Logging

**デメリット**:

- セットアップ複雑（30-60 分）
- 隠れコスト（データ転送、ログ保存）
- コストが Anthropic 直接より 10%高い

**適している場合**:

- 既に GCP を使用している企業
- セキュリティ・コンプライアンス要件が厳しい
- Workload Identity などのエンタープライズ機能が必要

---

## 🛠️ セットアップ手順比較

### Option 1: Anthropic API 直接使用

**所要時間**: 5 分

**手順**:

1. Anthropic Console で API キーを作成（1 分）
2. GitHub Secrets に `ANTHROPIC_API_KEY` を登録（2 分）
3. ワークフローファイル（`.github/workflows/claude-pr-review.yml`）を作成（2 分）

**必要な知識**:

- GitHub Actions の基本（ワークフローファイル編集）
- GitHub Secrets の設定

**参考**: [公式セットアップガイド](https://github.com/anthropics/claude-code-action/blob/main/docs/setup.md)

### Option 2: CodeRabbit

**所要時間**: 2 分

**手順**:

1. https://www.coderabbit.ai/ でサインアップ（1 分）
2. リポジトリを選択（1 分）
3. 完了（即座にレビュー開始）

**必要な知識**:

- なし（GitHub App インストールのみ）

**参考**: [CodeRabbit 公式ドキュメント](https://www.coderabbit.ai/)

### Option 3: Vertex AI

**所要時間**: 30-60 分

**手順**:

1. GCP プロジェクトの作成または選択（5 分）
2. Vertex AI API の有効化（2 分）
3. Service Account の作成（5 分）
4. Workload Identity Pool と Provider の作成（10-15 分）
5. GitHub Secrets に設定値を登録（5 分）
6. ワークフローファイルの作成（5 分）
7. テストと検証（10-20 分）

**必要な知識**:

- GCP の基本（プロジェクト、IAM、Service Account）
- Workload Identity Federation の理解
- GitHub Actions の基本

**参考**: [Vertex AI Claude ドキュメント](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/partner-models/claude)

---

## 🔧 機能比較

| 機能                     | Anthropic API 直接                          | CodeRabbit                    | Vertex AI                                 |
| ------------------------ | ------------------------------------------- | ----------------------------- | ----------------------------------------- |
| **インラインコメント**   | ⚠️ MCP 問題で不安定（トップレベルのみ確実） | ✅ 完全サポート               | ⚠️ MCP 問題で不安定                       |
| **カスタムプロンプト**   | ✅ 完全自由                                 | ⚠️ UI 設定のみ                | ✅ 完全自由                               |
| **日本語レビュー**       | ✅ プロンプトで指示可能                     | ✅ 設定で指示可能             | ✅ プロンプトで指示可能                   |
| **セキュリティチェック** | ✅ プロンプトでカスタマイズ可能             | ✅ デフォルト対応             | ✅ プロンプトでカスタマイズ可能           |
| **コード品質チェック**   | ✅ プロンプトでカスタマイズ可能             | ✅ デフォルト対応             | ✅ プロンプトでカスタマイズ可能           |
| **専用 UI**              | ❌ なし（GitHub PR UI のみ）                | ✅ あり（レビュー履歴、分析） | ❌ なし（GitHub PR UI のみ）              |
| **レビュー履歴**         | ❌ なし（GitHub 履歴のみ）                  | ✅ 専用ダッシュボード         | ❌ なし（Cloud Logging）                  |
| **進捗追跡**             | ✅ あり（`track_progress` オプション）      | ✅ リアルタイム表示           | ✅ あり（`track_progress` オプション）    |
| **セキュリティ**         | ⚠️ API Key 管理                             | ✅ OAuth 認証                 | ✅ Workload Identity（短命トークン）      |
| **GCP 統合**             | ❌ なし                                     | ❌ なし                       | ✅ フル統合（BigQuery、Cloud Logging 等） |
| **メンテナンス負荷**     | 低（公式 Action）                           | なし（フルマネージド）        | 中（GCP 設定管理）                        |

---

## 🔄 実運用への移行ガイド

### フェーズ 1: CodeRabbit で検証（今すぐ・パブリックリポジトリ）

**推奨**: まずは CodeRabbit で無料検証

**理由**:

- 完全無料で試せる
- セットアップ 2 分で完了
- 機能とコスト感を把握できる

**手順**:

1. CodeRabbit にサインアップ
2. パブリックリポジトリを選択
3. 数回の PR でレビュー品質を確認
4. インラインコメント、専用 UI の使い勝手を評価

### フェーズ 2: 実運用への移行判断（企業・プライベートリポジトリ）

**判断基準**:

| 条件                          | 推奨オプション                   | 理由                    |
| ----------------------------- | -------------------------------- | ----------------------- |
| 月 10 回以下、小規模 PR       | Anthropic API 直接               | $0.45-$2.25/月で最安    |
| 月 10-50 回、小〜中規模 PR    | Anthropic API 直接               | $2.25-$56.25/月で柔軟   |
| 月 50 回以上、固定料金希望    | CodeRabbit                       | $24/月/開発者で予算明確 |
| 開発者 3 名以上、レビュー頻繁 | Anthropic API 直接 or CodeRabbit | コスト次第              |
| GCP 統合・セキュリティ重視    | Vertex AI                        | エンタープライズ機能    |

### フェーズ 3: 選択肢別の移行手順

#### Anthropic API へ移行（検証 → 実運用）

**手順**:

1. Anthropic Console で API キーを作成
2. GitHub Secrets に `ANTHROPIC_API_KEY` を登録
3. ワークフローファイルを作成
4. PR で動作確認
5. Anthropic Console で使用量を監視

**注意**:

- 月 50,000 トークンまで無料
- 超過分は従量課金（Input $3/1M tokens, Output $15/1M tokens）

#### CodeRabbit へ移行（パブリック → プライベート）

**手順**:

1. CodeRabbit の Pro Plan にアップグレード（$24/月/開発者）
2. プライベートリポジトリを選択
3. 14 日間無料トライアルで検証
4. 問題なければ継続使用

#### Vertex AI へ移行（セキュリティ強化）

**手順**:

1. GCP プロジェクトで Vertex AI を有効化
2. Workload Identity Federation を設定
3. ワークフローファイルを Vertex AI 用に変更
4. テスト後、本番デプロイ

---

## ❓ FAQ

### Q1: Anthropic API のクレジット残高不足エラーを回避できますか？

**A**: はい、以下の方法で回避可能です：

1. **CodeRabbit（パブリック）を使用**: 完全無料
2. **Anthropic API 無料枠内で使用**: 月 50,000 トークンまで無料
3. **Anthropic Console でクレジットをチャージ**: $5-$10 で月 10 回程度のレビューが可能

### Q2: 月に何回レビューを実行すればコスト効率が良いですか？

**A**: 利用パターン別の推奨：

- **月 10 回以下**: Anthropic API 直接（$0.45-$2.25/月）
- **月 10-50 回**: Anthropic API 直接（$2.25-$56.25/月、柔軟）
- **月 50 回以上**: CodeRabbit（$24/月/開発者、固定）または Anthropic API（コスト次第）

### Q3: インラインコメントは必須ですか？

**A**: 必須ではありません。トップレベルコメントでも十分有用です。

- **Anthropic API / Vertex AI**: トップレベルコメントのみ確実（インラインは MCP 問題で不安定）
- **CodeRabbit**: インラインコメント完全サポート

### Q4: 日本語でレビューを受けることはできますか？

**A**: はい、全てのオプションで可能です：

- **Anthropic API / Vertex AI**: プロンプトで「日本語でレビューを実施してください」と指示
- **CodeRabbit**: 設定で日本語レビューを指定

### Q5: GCP 統合は必要ですか？

**A**: 以下の場合のみ必要です：

- 既に GCP を使用している企業
- Workload Identity などのエンタープライズ機能が必要
- セキュリティ・コンプライアンス要件が厳しい

個人や小規模プロジェクトでは不要です（Anthropic API 直接または CodeRabbit で十分）。

### Q6: 複数の開発者がレビューを使う場合、どのオプションが良いですか？

**A**: 開発者数とレビュー頻度によります：

- **1-2 名、月 50 回以下**: Anthropic API 直接（$11.25-$56.25/月、開発者数に関係なし）
- **3 名以上、月 50 回以上**: Anthropic API 直接 or CodeRabbit（コスト比較が必要）
  - Anthropic: $11.25-$56.25/月（開発者数に関係なし）
  - CodeRabbit: $24 × 開発者数/月

### Q7: 無料枠を超過した場合、どうなりますか？

**A**:

- **Anthropic API**: 自動的に従量課金に移行（Input $3/1M tokens, Output $15/1M tokens）
- **CodeRabbit**: レート制限超過後、一定時間待機すれば再び使用可能
- **Vertex AI**: GCP 課金に自動移行

### Q8: セキュリティは大丈夫ですか？

**A**: はい、全てのオプションでセキュリティは考慮されています：

- **Anthropic API**: API Key を GitHub Secrets で暗号化管理
- **CodeRabbit**: OAuth 認証、GitHub App による安全な権限管理
- **Vertex AI**: Workload Identity、短命トークン（1 時間で自動失効）、VPC-SC

---

## 📚 参考リンク

### 公式ドキュメント

- **Anthropic Claude Code Action**: https://github.com/anthropics/claude-code-action
- **Anthropic API 価格**: https://www.anthropic.com/pricing
- **Anthropic API ドキュメント**: https://docs.anthropic.com/
- **CodeRabbit 公式サイト**: https://www.coderabbit.ai/
- **CodeRabbit 価格**: https://www.coderabbit.ai/pricing
- **CodeRabbit FAQ**: https://www.coderabbit.ai/faq
- **Vertex AI 価格**: https://cloud.google.com/vertex-ai/generative-ai/pricing
- **Vertex AI Claude ドキュメント**: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/partner-models/claude

### コスト比較調査ソース

- [CodeRabbit Pricing 2025 | G2](https://www.g2.com/products/coderabbit/pricing)
- [LLM API Pricing Comparison (2025) | IntuitionLabs](https://intuitionlabs.ai/articles/llm-api-pricing-comparison-2025)
- [Claude Haiku 4.5 on Vertex AI vs Native API: 2025 Comparison Guide | Skywork AI](https://skywork.ai/blog/claude-haiku-4-5-vertex-ai-vs-anthropic-api-2025-comparison/)
- [Claude on Vertex AI vs native Anthropic - hidden differences that matter | Amit Kothari](https://amitkoth.com/claude-vertex-ai-vs-native-api/)
- [Claude AI Free Trials: how to get temporary premium access in late 2025 | DataStudios](https://www.datastudios.org/post/claude-ai-free-trials-how-to-get-temporary-premium-access-in-late-2025)

### 既知の問題（参考）

- [Issue #548: MCP GitHub comment tool fails | claude-code-action](https://github.com/anthropics/claude-code-action/issues/548)
- [Issue #647: Permission denied for mcp servers | claude-code-action](https://github.com/anthropics/claude-code-action/issues/647)
- [Issue #533: allowedTools filtering not working | claude-code-action](https://github.com/anthropics/claude-code-action/issues/533)

---

## 📝 まとめ

### 最重要ポイント

1. ✨ **無料で使えるオプションが存在する**（CodeRabbit パブリックリポジトリ）
2. 💰 **月 10 回程度なら $0.45-$2.25/月 で使える**（Anthropic API）
3. 🎯 **検証は CodeRabbit、実運用は Anthropic API または CodeRabbit が推奨**
4. 🔒 **セキュリティ重視なら Vertex AI**

### 推奨フロー

**今すぐ（検証用）**:

1. ✅ CodeRabbit を導入（完全無料、2 分で完了）
2. ✅ 現在の Anthropic API 実装は保留（クレジットチャージ不要）
3. ✅ CodeRabbit で機能とコスト感を検証

**実運用への移行（将来）**:

1. 開発者 1-2 名: Anthropic API 直接（$11-$56/月）
2. 開発者 3 名以上: CodeRabbit（$24/開発者）または Anthropic API
3. GCP 統合必要: Vertex AI

### 判断基準

- **コスト重視** → Anthropic API 直接（従量課金）
- **固定料金重視** → CodeRabbit（$24/月/開発者）
- **セキュリティ/GCP 統合重視** → Vertex AI

---

**最終更新**: 2025-12-13
