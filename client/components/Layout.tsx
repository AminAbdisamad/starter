import * as React from "react";

import jwtDecode from "jwt-decode";
import { Header } from "./Header";
import Dashboard from "./Dashboard";
// import Footer from "./Footer";
import Head from "next/head";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

import { useAuth } from "utils/globalState";
import { Authenticated } from "./Authenticated";
import { UnAuthenticated } from "./UnAuthenticated";
import { restApiEndpoint } from "config";
import { setAccessToken } from "utils/security";
import withAuth from "./WithAuth";

const Layout: React.FC<{ children: any }> = ({ children }) => {
  const { setAuthToken, isSignedIn } = useAuth();
  const [processing, setProcessing] = React.useState(true);
  const router = useRouter();

  // check if authenticated
  // if (typeof window !== "undefined" && !isSignedIn()) {
  //   return <div> {router.push("/")} </div>;
  // }
  // if (!isSignedIn()) {
  //   return <div>Loading...</div>;
  // }
  React.useEffect(() => {
    fetch(restApiEndpoint, { method: "POST", credentials: "include" }).then(
      async (x) => {
        const { accessToken } = await x.json();
        setAuthToken(accessToken);
        setAccessToken(accessToken);
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
export default withAuth(Layout);

// export const getServerSideProps = async () => {
//   const isAuthenticated = await checkAuthentication() // you need to implement this

//   if (!isAuthenticated) {
//     return {
//       redirect: { destination: '/sign-in', permanent: false },
//     }
//   }
// }
