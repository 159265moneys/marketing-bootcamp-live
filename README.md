# マーケ合宿 — Webスライド

モノクロとライム色の44画面。画像にスライドを焼き込まず、HTML/CSS/JavaScriptで構成しています。元の講義57項目に、Git・GitHub・リポジトリ・commit・push・GitHub Pagesの5画面を追加しました。

## 操作

- スクロール、矢印キー、PageUp / PageDown、Space、前へ・次へで移動。
- 目次または `I` で目次、`F` で全画面。Home / Endで最初・最後。
- URLのハッシュで各画面へ直接移動。
- 「動き」でアニメーションを停止。初回はOSの動きを減らす設定を尊重。
- 視線誘導の実演、Before/After比較、Gitの操作デモがあります。

## 編集

- `slides.js`: 講義内容。`source` は元の章・項目番号、`addition` は追加内容。
- `app.js`: 各画面のHTML、ナビゲーション、操作デモ。
- `styles.css`: レイアウト、CSS 3D、アニメーション、レスポンシブ表示。
- 外部CDN、実行時ライブラリへの依存なし。
- 生成済み写真から旗・階段の2点だけを背景に再利用。本文と図解はHTMLのまま。

```sh
npm run dev
```

`http://127.0.0.1:4173` を開きます。ビルドは不要です。

## Git / GitHub Pages

このリポジトリでは `main` ブランチのルートをGitHub Pagesの公開元に使います。

```sh
git status
git add index.html styles.css app.js slides.js
git commit -m "スライドを更新"
git push origin main
```

commitはローカルの履歴への記録、pushはリモートへの送信です。Pagesで公開元を設定してから、pushされた変更が公開サイトへ反映されます。初回のremote設定や、他の人の更新の取り込みは別の作業です。

`.env`などは`git add`する前に`.gitignore`へ追加します。すでに追跡しているファイルは、`.gitignore`に書くだけでは追跡対象から外れません。

講義内の数値（95.1%、489人、209%UP）は元原稿の表現例です。ファネルの帯幅は概念を示し、実測データではありません。Git操作画面は学習用のシミュレーションであり、訪問者のリポジトリを操作しません。

顧客1人あたりの採算を説明するページでは、LTVを利益ベースで扱います。Node.jsはJavaScriptの実行環境、Next.jsはWebアプリのフレームワーク、FTPはファイル転送の用語として分類しています。caffeinateはMacのスリープ防止コマンドです。

## 参照

- [Git: Recording Changes](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository)
- [Git: Working with Remotes](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes)
- [GitHub: About repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories)
- [GitHub Pages: Publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Git: gitignore](https://git-scm.com/docs/gitignore)
- [Node.js: Introduction](https://nodejs.org/learn/getting-started/introduction-to-nodejs)
- [Next.js: Documentation](https://nextjs.org/docs)

## 評価基準

見た目だけでなく、次の5項目をそれぞれ10点満点で評価します。

1. AI定型デザインの回避：汎用ヒーロー、意味のない抽象3D、均一なカードの反復を避けているか。
2. 視認性：文字サイズ・改行・コントラスト・操作の優先順位が適切か。
3. 動き：アニメーションや3Dが、内容や操作を理解する助けになっているか。
4. 完成度：レイアウト・文章・動作が整合しているか。
5. **コピーの具体性・自然さ・非AI定型性**：対象と作業が分かるか、原稿の意味を変えていないか。演出用の読点、汎用的な煽り、不自然な比喩、不要な英語で説明を置き換えていないか。

意味が通らない見出しや、原稿の趣旨を逆転させた要約は、見た目の評価が高くても修正対象です。本人の原稿にある強い口調と、AIが足した意味の薄いスローガンは区別します。視線誘導の実演文はユーザー指定の教材として保持します。
