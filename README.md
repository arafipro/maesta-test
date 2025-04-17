# AICoaching モノレポ

Bunのワークスペース機能を使用したモノレポ構成のプロジェクトです。

## プロジェクト構造

```
.
├── package.json     # ルートパッケージ設定（workspaces定義）
├── apps/            # アプリケーションディレクトリ
│   ├── frontend/    # フロントエンドアプリケーション（Next.js）
│   └── backend/     # バックエンドアプリケーション（Mastra）
```

### Mastraのプロジェクトを作成

```bash
bun create mastra@latest backend

What do you want to name your project?
backend

Where should we create the Mastra files? (default: src/)
src/

Choose components to install:
Agents, Workflows

Add tools?
Yes

Select default provider:
OpenAI

Enter your openai API key?
Skip for now

Add example
No

Make your AI IDE into a Mastra expert? (installs Mastra docs MCP server)
Skip for now
```

### Next.jsのプロジェクトを作成

```bash
bun create cloudflare@latest frontend --framework=next --platform=workers

In which directory do you want to create your application?
dir ././

✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like your code inside a `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to use Turbopack for `next dev`? … No / Yes
✔ Would you like to customize the import alias (`@/*` by default)? … No / Yes

Do you want to use git for version control?
no git

Do you want to deploy your application?
no
```

## セットアップ

```bash
# 依存関係のインストール
bun install
```

## 開発

各アプリケーションディレクトリ内でBunコマンドを実行できます。あるいは、ルートから以下のように実行することもできます：

```bash
# フロントエンド関連のコマンド実行
bun run --filter frontend dev

# バックエンド関連のコマンド実行
bun run --filter backend dev
```
