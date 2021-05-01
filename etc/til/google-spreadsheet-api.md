# Google SpreadSheet API

## やりたいこと

- OAuthでログインしたアカウントに紐づくスプレッドシートを操作できるようにする
  - シートのfindOrCreate
  - シートの行のCRUD

## Sheet API
- APIドキュメント 
  - https://googleapis.dev/nodejs/googleapis/latest/sheets/index.html
- node.js クイックスタート
  - https://developers.google.com/sheets/api/quickstart/nodejs  

## NextAuthでのscope設定
- NextAuthでOAuth認証を実装しているため、その際にスプレッドシートAPIの利用を許可できたら嬉しい  
- 調べたらNextAuthがGoogle Providerを利用する際にデフォルトで必要としているscopeに加えて、Google APIの必要なscopeを追加することができそう  
  - https://blog.srij.dev/nextauth-google-access-token
  - getToken()で手に入るjwt tokenをOAuthClientに渡せば良さそう
    - `oAuth2Client.setCredentials(token)` に渡す？
  
## NextAuthのCallbacksを使ってJWTに保持する情報を拡張する
- `oAuth2Client.setCredentials(token)` に渡してもダメで、GoogleのOAuthで手に入るaccessTokenが必要
- JWT型にはaccessTokenなんてないけどどうやるんだと調べたところ、callbacksを使ってJWTに保持する情報を拡張する必要がある。
  - https://next-auth.js.org/configuration/callbacks

```
  // src/pages/api/auth/[...nextauth].ts
  
  callbacks: {
    async jwt(token, user, account) {
      if (account?.accessToken) {
        token.accessToken = account.accessToken;
      }
      return token;
    },
  },
 
```

- その上でaccessTokenを型として扱うためには、 `next-auth.d.ts` を作ってmodule拡張を行えば良い

```typescript
// src/types/next-auth.d.ts

import {} from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
  }
}

```

https://next-auth.js.org/getting-started/typescript#module-augmentation


## 参考

[Next.js + Vercel + Cloudflare Workers KV + Googleスプレットシートで寄付管理サービスを作った](https://efcl.info/2021/03/12/next.js-vercel-cloudflare-workers-kv/)
