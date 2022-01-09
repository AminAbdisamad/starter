import * as React from "react";
import { Header } from "./Header";
// import Footer from "./Footer";
import Head from "next/head";
import { restApiEndpoint } from "config";
import { NextSeo } from "next-seo";
import { setAccessToken } from "utils/security";
// import Meta from "./Meta";

const Layout: React.FC<{ children: any }> = ({ children }) => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(restApiEndpoint, { method: "POST", credentials: "include" }).then(
      async (x) => {
        const { accessToken } = await x.json();
        setAccessToken(accessToken);
        console.log({ accessToken });
        setLoading(false);
      }
    );
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* <Meta name='Home' path='/' /> */}
      <Header />
      {/* <h1>Header</h1> */}
      {children}
      {/* <Footer /> */}
      <h1>Footer</h1>
    </div>
  );
};
export default Layout;
