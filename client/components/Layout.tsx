import * as React from "react";
import jwtDecode from "jwt-decode";
import { Header } from "./Header";
import { Dashboard } from "./Dashboard";
// import Footer from "./Footer";
import Head from "next/head";

import { NextSeo } from "next-seo";

import { useAuth } from "utils/globalState";
import { Authenticated } from "./Authenticated";
import { UnAuthenticated } from "./UnAuthenticated";
import { restApiEndpoint } from "config";
import { setAccessToken } from "utils/security";

const Layout: React.FC<{ children: any }> = ({ children }) => {
  const { setUserInfo, setAuthToken, isSignedIn } = useAuth();

  const [processing, setProcessing] = React.useState(true);

  React.useEffect(() => {
    fetch(restApiEndpoint, { method: "POST", credentials: "include" }).then(
      async (x) => {
        const { accessToken } = await x.json();
        setAuthToken(accessToken);
        setAccessToken(accessToken);
        console.log({ accessToken });
        setProcessing(false);
      }
    );
  }, []);
  if (processing) return <div>Loading...</div>;
  return (
    <div>
      {isSignedIn() ? (
        <Dashboard>
          <Authenticated />
        </Dashboard>
      ) : (
        <UnAuthenticated />
      )}

      {children}
      <h1>Footer</h1>
    </div>
  );
};
export default Layout;
