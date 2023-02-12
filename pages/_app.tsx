import { Auth0Provider } from "@auth0/auth0-react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <Auth0Provider
      clientId="RbsmccbSQYgWRyzEtGw1f6WRTaNBuI1X"
      domain="dev-mm-92021.us.auth0.com"
      onRedirectCallback={(appState) =>
        router.replace(appState?.returnTo || "/")
      }
      authorizationParams={{
        audience: "https://auth0-react-test-api/",
        redirect_uri:
          typeof window !== "undefined" ? window.location.origin : undefined,
      }}
      useRefreshTokens
      cacheLocation="localstorage"
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
}
