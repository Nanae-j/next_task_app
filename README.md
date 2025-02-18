<div id="top"></div>

## 使用技術一覧

<div style="display: inline">

  <!-- フロントエンドのフレームワーク一覧 -->
  <a href="https://nodejs.org/ja">
  <img src="https://img.shields.io/badge/-Node.js-000000.svg?logo=node.js&style=for-the-badge">
  </a>
  <a href="https://nextjs.org/">
  <img src="https://img.shields.io/badge/-Next.js-blue.svg?logo=next.js&style=for-the-badge">
  </a>
  <!-- フロントエンドの言語 -->
  <a href="http://ja.react.dev/">
  <img src="https://img.shields.io/badge/-React-23272f.svg?logo=react&style=for-the-badge">
  </a>
  <a href="https://www.typescriptlang.org/">
  <img src="https://img.shields.io/badge/-Typescript-FFF.svg?logo=typescript&style=for-the-badge">
  </a>
  
  <!-- ミドルウェア -->
  <a href="https://www.mongodb.com/ja-jp">
  <img src="https://img.shields.io/badge/-Mongodb-47A2.svg?logo=mongodb&style=for-the-badge">
  </a>

</div>

#### 使用ライブラリ
<div>
  <!-- 使用ライブラリ -->
  <p><a href="https://tailwindcss.com/">Tailwind CSS(v4)</a></p>
</div>


## 目次

1. [プロジェクトについて](#プロジェクトについて)
2. [環境](#環境)
3. [ディレクトリ構成](#ディレクトリ構成)
4. [開発環境構築](#開発環境構築)
5. [開発メモ](#開発メモ)


<!-- プロジェクトの概要を記載 -->

## プロジェクトについて


<p align="right">(<a href="#top">トップへ</a>)</p>



<!-- プロジェクトの環境を記載 -->

## 環境

<!-- 言語、フレームワーク、ミドルウェア、インフラの一覧とバージョンを記載 -->

| 言語・フレームワーク  | バージョン |
| --------------------- | ---------- |
| Node.js               | 18.20.4    |
| Next.js               | 14.2.20    |
| React                 | 18.3.1     |

その他のパッケージのバージョンは package.json を参照してください

<p align="right">(<a href="#top">トップへ</a>)</p>


## ディレクトリ構成

```
.
├── .env.local
├── .eslintrc.json
├── .gitignore
├── .nvmrc
├── .vscode
├── README.md
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── /src
└── tsconfig.json
```

/src
```
.
├── actions (serverActions用のディレクトリ)
│   └── task.ts
├── app
│   ├── (main) (ページ構成)
│   │   ├── completed
│   │   ├── edit
│   │   ├── expired
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   ├── new
│   │   └── page.tsx
│   ├── api (ルートハンドラー用のディレクトリ)
│   │   └── tasks
│   ├── error.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── not-found.tsx
├── components
│   ├── EditTaskForm
│   │   └── EditTaskForm.tsx
│   ├── NewTaskForm
│   │   └── NewsTaskForm.tsx
│   ├── SideMenu
│   │   ├── NavList
│   │   └── SideMenu.tsx
│   └── TaskCard
│       ├── TaskCard.tsx
│       ├── TaskDeleteButton
│       └── TaskEditButton
├── models 
│   └── task.ts (Mongo DBのモデル作成)
└── utils
    └── database.ts (DB接続関数)
```

<p align="right">(<a href="#top">トップへ</a>)</p>


## 開発環境構築

In the project directory, you can run:

#### `npm install`

### .env ファイルを作成 (.env-sampleあり)

以下の環境変数の一覧を元に作成

```
### 環境変数の一覧

| 変数名                 | 役割                                   
| ----------------------| ----------------------------------------------------------------
| DB_URI                | 
| API_URL               |

```

### 動作確認

#### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

<p align="right">(<a href="#top">トップへ</a>)</p>


## 開発メモ

<p><a href="https://www.notion.so/Udemy-Next-js-web-158df53fe25a809d8951e70cf9b03afb?pvs=4">Notion まとめ</a></p>

