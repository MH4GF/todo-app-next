# ISRとは

- 初回アクセス時にレスポンス内容を生成し、次回以降はその内容を使い回す
  - その裏で次のアクセスに向けてキャッシュが再生成される(revalidateという)
- SSGのようにビルド時に静的ファイルを生成しないため、初回ビルドが高速になる
- 古いデータが表示されてしまうことが許容できるページに向いている
  - もしくはクライアントでマウント後に最新のデータをフェッチし直す戦略が良さそう

## 感想

- CDNのキャッシュかつリクエスト時に都度invalidateみたいな認識で良さそう

## 参考
- [Next.js の Incremental Static Regeneration を理解する](https://zenn.dev/ria/articles/b709ae94e919c76f814a)
- [Next.jsのISRで動的コンテンツをキャッシュするときの戦略](https://zenn.dev/catnose99/articles/8bed46fb271e44)  
- [ISRから考察するこれからのJamstack](https://blog.microcms.io/think-about-jamstack-2021/)
  - 面白かった。Lambda@Edgeのようなエッジコンピューティングの重要性が高まってくる