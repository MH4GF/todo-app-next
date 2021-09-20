# prisma はブラウザ上で呼び出すことができない

- CSR のページ配下のコンポーネントで prisma からデータを取得する処理を書いたらこんなエラーが出た

```
Unhandled Runtime Error
Error: PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues
```

言われてみればそうで、個々人のブラウザから DB へのコネクションを貼るのは辛いのでサーバーサイドから叩くように変えなければいけない。<br>
となると SSR か？GetServerSideProps を使えばいいか？<br>
と思ってこれを読むと、「SSRは主にSEOの必要なページのために利用し認証が必要なAPIはブラウザから呼び出した方がいいよ」「データの取得にはSWRを使うといいよ」とある。<br>

[SSR はおまいらには早すぎた 〜Next.js の getServerSideProps の登場が何を意味するか〜](https://qiita.com/ryokkkke/items/1bd858a5d6f261a9342a)<br>

そうだよな、SSRのレイテンシが上がるとページのロード時間が長くなるもんな…<br>
となるとCSRではSWR→apiコール, APIでDB呼び出しとドメインモデルのマッピングを分けた方が良さそう

