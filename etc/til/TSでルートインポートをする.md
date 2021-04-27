# TSでルートインポートをする

## やりたいこと

```
# こういう相対パスが辛いので、
import { useTodosList } from "../../../../hooks/usecases/useTodosList";

# こんな感じにできないかな？
import { useTodosList } from "~/hooks/usecases/useTodosList";
```

## できた

tsconfig.jsonをこんな感じに修正すればできた
```
{
  "compilerOptions": {
    ~~ 省略 ~~
    "baseUrl": ".",
    "paths": {
      "~/*": ["src/*"]
    }
  }
}
```

https://lightbulbcat.hatenablog.com/entry/2018/09/05/005631