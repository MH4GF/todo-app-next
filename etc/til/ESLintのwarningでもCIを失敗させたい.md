# warningにも厳しくするぞ

`--max-warnings` オプションを使えばよかった

```
  "scripts": {
    ~~ 略 ~~
    "lint": "eslint . --ext .ts,.tsx,.js,.jsx --fix --max-warnings=0"
  }
```

https://ishkawa.org/1585698119/