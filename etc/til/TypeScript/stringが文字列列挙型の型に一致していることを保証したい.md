# stringが文字列列挙型の型に一致していることを保証したい

## やりたいこと

- phase型があり、中身はこう `"NotStarted" | "InProgress" | "Completed"`
- スプレッドシートのA列に入ってるstringがphase型であることを保証したい
- スプレッドシートの列をこの3つのenumでfilterした結果であればphase型にマッピングできるはず
- しかしstringはphase型に入れられないよ！とコンパイルが通らない

## 情報

- 一般的にreverse mappingと呼び、TSの機能としては提供されていないらしい。
  - https://github.com/Microsoft/TypeScript/issues/21935
  - 逆引きするヘルパーメソッドを作っている例
    - https://qiita.com/unhurried/items/3ee6b86b82d98805b435
    - あんまりよくわからん
- 型アサーションと呼ばれる機能があり、 `as` で指定した型であると強制的にTypeScriptに指示することができる
  - 危険なので影響範囲は可能な限り小さくすべき ex: [敗北者のTypeScript](https://qiita.com/uhyo/items/aae57ba0734e36ee846a)
  - 今回はこの方法でできた

## 解決法

```typescript
  const todoAllCells = spreadSheet.data.sheets[0].data[0].rowData;
  const todoItems: Todo[] = todoAllCells
    .filter((row) => {
      const values = row.values;
      return (
        // 指定したenumが含まれている列をfilterする (==enumであることを保証する)
        values?.[0].userEnteredValue?.stringValue &&
        ["NotStarted", "InProgress", "Completed"].includes(
          values?.[0].userEnteredValue?.stringValue
        )
      );
    })
    ?.map((row) => {
      const values = row.values;
      // asを使って型を強制すれば、stringではなくPhase型であるとTypeScriptに伝えることができる
      const phase = values?.[2]?.userEnteredValue?.stringValue as Phase;
      return {
        phase: phase,
      };
    });
```

## 感想

- asが危険なことはわかった
- 外部APIのレスポンスが正しいことを、外部APIのclientが提供している型ならまだしも、自サービスだけで通用する型で担保しようとしてるから辛い気持ちになってそう
- 型の恩恵が受けられるのでanyよりマシという気持ちでasを使ってみたけど、他に良い方法はあるんじゃろか