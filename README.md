# todo-app-next

TODOリストをnextで実装してみる

## deployed on vercel

https://todo-app-next.vercel.app/

## Features

- [x] 各種ツールの導入(TypeScript, ESLint, Jest)
- [ ] TODOのCRUD, 状態遷移(NotStarted, InProgress, Completed)
- [x] Googleアカウントによる認証
- [ ] スプレッドシートによるデータ永続化
- [ ] CSVインポートによるTODO追加
- [x] vercelへのデプロイ

## Development

```bash
cp .env.local.sample .env.local
# 環境変数それぞれを設定した後にyarn dev

yarn dev
```

## 参考資料

- [プログラミングTypeScript ――スケールするJavaScriptアプリケーション開発](https://www.oreilly.co.jp/books/9784873119045/)