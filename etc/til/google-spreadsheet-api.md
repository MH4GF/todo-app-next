# Google SpreadSheet API

## やりたいこと

- OAuthでログインしたアカウントに紐づくスプレッドシートを操作できるようにする
  - シートのfindOrCreate
  - シートの行のCRUD

## OAuth認証情報

https://console.cloud.google.com/apis/credentials

## Sheet API
- APIドキュメント 
  - https://googleapis.dev/nodejs/googleapis/latest/sheets/index.html
- node.js クイックスタート
  - https://developers.google.com/sheets/api/quickstart/nodejs  

## OAuth認証時にスプシの利用をユーザーに許可してもらう
### NextAuthでのscope設定
- 調べたらNextAuthがGoogle Providerを利用する際にデフォルトで必要としているscopeに加えて、Google APIの必要なscopeを追加することができそう  
  - https://blog.srij.dev/nextauth-google-access-token
  - getToken()で手に入るjwt tokenをOAuthClientに渡せば良さそう
    - `oAuth2Client.setCredentials(token)` に渡す？
  
### NextAuthのCallbacksを使ってJWTに保持する情報を拡張する
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

## ユーザーのアカウントに紐づくスプシをFindOrCreateする

### ユーザーのアカウントに紐づくスプシを検索する
- これはdrive APIを使うみたい
  - https://developers.google.com/drive/api/v3/reference/files/list

### sessionにspreadSheetIdを追加できると嬉しそう
- callbackでsessionに情報を追加できそう
  - https://next-auth.js.org/configuration/callbacks#session-callback

## 参考

[Next.js + Vercel + Cloudflare Workers KV + Googleスプレットシートで寄付管理サービスを作った](https://efcl.info/2021/03/12/next.js-vercel-cloudflare-workers-kv/)
