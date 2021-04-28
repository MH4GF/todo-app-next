# Google認証機能作りたい

[NextAuth](https://next-auth.js.org/) 使うのがいいらしい  
- [NextAuthでNext.jsに認証機能をサクッと実装するサンプルが無かったので作った](https://zenn.dev/thim/articles/7e3fc6a67de764daf50a)  

## Google providerを使う

- [Google公式ドキュメント](https://developers.google.com/identity/protocols/oauth2)
- [NextAuthのドキュメント](https://next-auth.js.org/providers/google)
  - 今回はバックエンドにRDBを使わないため、jwtを利用する必要がある
    
