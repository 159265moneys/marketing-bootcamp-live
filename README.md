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

講義内の数値（95.1%、489人、209%UP）は元原稿の表現例です。ファネルの帯幅は概念を示し、実測データではありません。Git操作画面は学習用のシミュレーションであり、訪問者のリポジトリを操作しません。

## 参照

- [Git: Recording Changes](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository)
- [Git: Working with Remotes](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes)
- [GitHub: About repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories)
- [GitHub Pages: Publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

デザイン評価では、意味のない抽象3D、定型ヒーロー、グラデーション、均一なカードの反復、説明のない余白、装飾だけの動きを確認対象にしています。
