# todo-app-next

TODOリストをnextで実装してみる

## deployed on vercel

https://todo-app-next.vercel.app/

## Features

- [x] 各種ツールの導入(TypeScript, ESLint, Jest)
- [ ] Material-UIの導入
- [ ] TODOのCRUD, 状態遷移(NotStarted, InProgress, Completed)
- [x] Googleアカウントによる認証
- [ ] スプレッドシートによるデータ永続化
- [ ] CSVインポートによるTODO追加
- [x] vercelへのデプロイ

## Development

```bash
# .env.localを作成し環境変数それぞれを設定
cp .env.local.sample .env.local
yarn
yarn dev
```

## 参考資料

- [プログラミングTypeScript ――スケールするJavaScriptアプリケーション開発](https://www.oreilly.co.jp/books/9784873119045/)