# 取得したい

getSession()にreqを引数として渡せば良い。
``` 
import { getSession } from 'next-auth/client'

export default async (req, res) => {
  const session = await getSession({ req })
  if (session) {
    // Signed in
    console.log('Session', JSON.stringify(session, null, 2))
  } else {
    // Not Signed in
    res.status(401)
  }
  res.end()
}
```

https://next-auth.js.org/tutorials/securing-pages-and-api-routes#securing-api-routes