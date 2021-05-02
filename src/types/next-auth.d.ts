import {} from "next-auth/jwt";
import {} from "next-auth";

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
  }
}

declare module "next-auth" {
  interface Session {
    spreadSheetId: string;
  }
}
