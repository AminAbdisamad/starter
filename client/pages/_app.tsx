import type { AppProps } from "next/app";
import * as React from "react";
import { DefaultSeo } from "next-seo";
import Layout from "../components/Layout";
import withData from "../utils/withData";
// import { GlobalStyles } from "styles/ThemeConfig";
import SEO from "../next-seo.config";
import "antd/dist/antd.css";
import { AuthProvider } from "utils/globalState";
import { ApolloProvider } from "@apollo/client";
import { withApollo } from "utils/initApollo";

// import { client } from "utils/apolloConfig";
// import "@/styles/antd.less";

const toggleIconStyle = {
  position: "absolute",
  top: 20,
  right: 20,
  zIndex: 100,
};

interface ApolloProps {
  apollo: any;
}
function MyApp(props: any) {
  const { Component, pageProps, apolloClient } = props;
  return (
    <AuthProvider>
      <ApolloProvider client={apolloClient}>
        <DefaultSeo {...SEO} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </AuthProvider>
  );
}

// Make Apollo  & Nextjs work together
// MyApp.getInitialProps = async function ({
//   Component,
//   ctx,
// }: {
//   Component: any;
//   ctx: any;
// }) {
//   let pageProps: any = {};
//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx);
//   }
//   pageProps.query = ctx.query;
//   return { pageProps };
// };
// //@ts-ignore
// export default withData(MyApp);

// export default MyApp;

export default withApollo(MyApp);
