import { google } from "googleapis";

const useGoogleOAuthClient = async () => {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const redirectUrl = process.env.GOOGLE_OAUTH_REDIRECT_URL;
  return new google.auth.OAuth2(clientId, clientSecret, redirectUrl);
};

export default useGoogleOAuthClient();
