# jwtの秘密鍵はどのように生成するのがベスト？

- ssh-keygenを使って生成する必要があるんか？
- 長くてランダムな文字列であればなんでも良い
  - https://github.com/dwyl/hapi-auth-jwt2/issues/48
  - このリポジトリでは以下の方法が推奨されている。便利〜
```
node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"
```