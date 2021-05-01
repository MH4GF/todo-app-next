import NextAuth from "next-auth";
import Providers from "next-auth/providers";

// TODO: 実行時には必ず環境変数が存在する感じにしたい 環境変数を扱う関数を作って、ビルド時に存在確認をしてなければコケるようにしたい
export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorizationUrl:
        "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
      scope:
        "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/spreadsheets",
    }),
  ],
  jwt: {
    signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
    encryptionKey: process.env.JWT_ENCRYPTION_KEY,
    secret: process.env.JWT_SECRET,
    encryption: true,
  },
  callbacks: {
    async jwt(token, user, account) {
      if (account?.accessToken) {
        token.accessToken = account.accessToken;
      }
      return token;
    },
  },
});
