# next.jsでログイン可否によってページの認可を制御したい

- NextAuthでは[useSession](https://next-auth.js.org/getting-started/client#usesession) を使ってログイン状態を制御するのが良さそう

## 認可制御のパターン
- AuthenticatedComponentパターン ... 高階コンポーネントを作って認証が必要なページでコンポーネントをラップする
  - [【Next.js】Auth0で認証が必要な画面の作り方](https://zenn.dev/syu/articles/24f64a5a417df6)
  - [Reactの高次コンポーネント](https://zephyrnet.com/ja/higher-order-components-in-react/)
  - これだとページがSSRされてしまい、useSessionはclientサイドのAPIなので呼び出せない
- _app.tsxでuseEffectやる方法
  - [Next.jsでページ共通の処理をする（useEffectを使う例）](https://zenn.dev/catnose99/articles/2169dae14b58b6)
  - これを使った