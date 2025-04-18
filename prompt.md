コーチングAIエージェントのウェブアプリの要件定義書、機能設計書、画面設計書を順番に作成してほしい。

# 開発環境は以下の通り

- 言語：TypeScript
- フレームワーク：Next.js
- スタイル：Tailwind CSS、shadcn/ui
- バックエンド：Mastra
- データベース：Cloudflare D1
- 認証：NextAuth.js
- AI/ML：OpenAI API、Cloudflare Workers AI

# デプロイ環境は以下の通り

- Cloudflare Workers

# 開発の進め方

MVCで開発したい。
まずは、最低限必要な機能を実装してリリースする。
次に、段階的に機能を充実していきたい。
MVCで進める理由は、使われなかった時にすぐに撤退して、違うプロジェクトに進めるから。
