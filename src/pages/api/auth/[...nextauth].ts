import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "~/lib/prisma";

// TODO: 実行時には必ず環境変数が存在する感じにしたい 環境変数を扱う関数を作って、ビルド時に存在確認をしてなければコケるようにしたい
export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      if (user.id) {
        session.user.id = user.id;
      }

      return session;
    },
  },
});
