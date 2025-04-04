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
  <p><a href="https://lottiefiles.com/jp/" target="_blank">Lottie</a></p>
  <p><a href="https://mongoosejs.com/" target="_blank">mongoose</a></p>
  <p><a href="https://react-icons.github.io/react-icons/" target="_blank">react icons</a></p>
  <p><a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a></p>
</div>


## 目次

1. [プロジェクトについて](#プロジェクトについて)
2. [環境](#環境)
3. [ディレクトリ構成](#ディレクトリ構成)
4. [開発環境構築](#開発環境構築)
5. [開発メモ](#開発メモ)


## プロジェクトについて

<p align="right">(<a href="#top">トップへ</a>)</p>

<!-- プロジェクトの概要を記載 -->
### プロジェクトの概要

<p>
このアプリは、Next.jsの基本構文や使用方法、そしてMongoDBを使用したCRUD操作の基礎を学ぶ目的でUdemy講座を参考に制作しました。<br />
以前に作成した<a href="https://github.com/Nanae-j/react_householdbudget_app">家計簿アプリ</a>で習得したTypeScriptの型定義などの基本構文を活用し、MongooseなどのODMを使用したデータベースとのやり取りについて学びました。<br />
また、今回はスタイリングにTailwind CSSを導入し、効率的なユーティリティファーストのCSSフレームワークについても実践的に学習することができました。
</p>

<a href="https://www.udemy.com/course/nextjs-fullstack/?couponCode=KEEPLEARNING">udemy - Next.jsフルスタックWebアプリケーション開発入門</a>


### つまずいたところ

#### Nextのフォント設定とtailwind CSS(v4)のフォント設定が干渉する

<p>
  Nextのリファレンスにあるgoogleフォントの読み込みをおこうなうとtailwind v4の@theme効かない事象が発生<br />
  <a href="https://nextjs.org/docs/pages/building-your-application/optimizing/fonts">Nextのフォント設定</a>しないで、<a href="https://tailwindcss.com/docs/font-family#customizing-your-theme">Tailwindのフォント設定</a>をすることで解決しました
</p>

<p>
  検証画面のsourceからcssファイルを確認。Nextの方のgoogleフォント設定をすると、cssの@importが一番上にならなくてエラーになりフォント設定が反映されなかった
</p>

```
// layout.cssに以下のエラー出る
Define @import rules at the top of the stylesheet
```

### 制作後の振り返り

<p>
  Mongooseを使用したデータベース連携において、モデルの作成・構造の理解に時間を要しました。<br />
  また、タスクの取得表示にはルートハンドラーを、タスクの作成にはサーバーアクションを使用するという新しい構造について理解は深まりましたが、学習難度を感じました。<br/>
  前回制作した<a href="https://github.com/Nanae-j/react_householdbudget_app">家計簿アプリ</a>とは異なる技術でデータベース操作を行ったため、当初はすべてが新しく感じられましたが、CRUD操作の基本は同じであるという点を再認識でき、非常に有意義な学びとなりました。<br/>
  データベースの基本操作について理解が定着してきたので、今後のアプリ開発では、どのようなシチュエーションでどのデータベース技術を活用すべきか自身で判断できるようになりたいと考えています。また、各データベースの特徴やそれぞれのメリットについても知識を深めていきたいと思います。
</p>


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
│   └── settings.json
├── README.md
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── src
│   ├── actions
│   │   └── task.ts
│   ├── app
│   │   ├── (main)
│   │   ├── api
│   │   ├── error.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   ├── opengraph-image.alt.txt
│   │   ├── opengraph-image.jpg
│   │   ├── twitter-image.alt.txt
│   │   └── twitter-image.jpg
│   ├── components
│   │   ├── EditTaskForm
│   │   ├── NewTaskForm
│   │   ├── SideMenu
│   │   └── TaskCard
│   ├── models
│   │   └── task.ts
│   └── utils
│       └── database.ts
└── tsconfig.json
```

/src
```
.
├── actions (serverActions用のディレクトリ タスクの作成はこちらを使用)
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
│   ├── api (ルートハンドラー用のディレクトリ タスクの取得表示はこちらを使用)
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

### .env ファイルを作成

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

