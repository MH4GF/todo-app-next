# 認証認可

## Google認証機能作りたい

[NextAuth](https://next-auth.js.org/) 使うのがいいらしい  
- [NextAuthでNext.jsに認証機能をサクッと実装するサンプルが無かったので作った](https://zenn.dev/thim/articles/7e3fc6a67de764daf50a)  

### Google providerを使う

- [Google公式ドキュメント](https://developers.google.com/identity/protocols/oauth2)
- [NextAuthのドキュメント](https://next-auth.js.org/providers/google)
  - 今回はバックエンドにRDBを使わないため、jwtを利用する必要がある
    
## APIにてログイン状態によってレスポンスを分ける処理をいい感じにやりたい

### AsIs
- sessionの状態によって場合分けしてる  
- これを全てのエンドポイントで書くのは辛い

```
  const session = await getSession({ req });
  if (session) {
    res.status(200).json({ result: todoItems });
  } else {
    res.status(401).json({ errors: ["Not Authorized"] });
  }
```

### 解決策

- ミドルウェアとして `requireLogin` 的な感じで呼び出せるようにしたい  
  
こんな感じのを作って
```typescript
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";

export const requireLogin = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const session = await getSession({ req });
  if (!session) {
    res.status(401).json({ errors: ["Not Authorized"] });
    res.end();
  }

  return res;
};
```

こんな感じに呼び出してみたけれども、非ログイン時にres.end()で終わってくれず、下の行まで進んでしまうため `ERR_STREAM_WRITE_AFTER_END` エラーが出てしまう
```typescript
export default async (req: NextApiRequest, res: NextApiResponse) => {
  await requireLogin(req, res);

  res.status(200).json({ result: [] });
};

```

- next-connectを使うと簡単にできそう
  - ミドルウェアとしてはnext()を呼び出して次のミドルウェアに進むか、呼び出さずに処理を終了するかを選べる
  - expressっぽく `.use()` のメソッドチェーンでできるらしい
  - https://serip39.hatenablog.com/entry/2020/08/27/083000
