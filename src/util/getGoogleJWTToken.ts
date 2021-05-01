import { NextApiRequest } from "next";
import { getToken, JWT } from "next-auth/jwt";

export const getGoogleJWTToken = (req: NextApiRequest): Promise<JWT> => {
  return getToken({
    req: req,
    secret: process.env.JWT_SECRET,
    encryption: true,
    signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
    encryptionKey: process.env.JWT_ENCRYPTION_KEY,
  });
};
