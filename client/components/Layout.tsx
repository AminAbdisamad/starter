import * as React from "react";
import jwtDecode from "jwt-decode";
import { Header } from "./Header";
// import Footer from "./Footer";
import Head from "next/head";
import { restApiEndpoint } from "config";
import { NextSeo } from "next-seo";
import { getAccessToken, setAccessToken } from "utils/security";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import { useAuth } from "utils/globalState";

const USER_QEURY = gql`
  query USER_QEURY($userId: ID!) {
    user(id: $userId) {
      id
      username
      email
      name
    }
  }
`;

const Layout: React.FC<{ children: any }> = ({ children }) => {
  const [processing, setProcessing] = React.useState(true);
  const { setUserInfo, setAuthToken } = useAuth();

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
  let id;
  if (!processing) {
    const token = getAccessToken();
    const { userId }: any = jwtDecode(token);
    id = userId;
  }

  console.log({ id });
  const { data, error, loading } = useQuery(USER_QEURY, {
    variables: { userId: id },
  });
  // console.log(userId);
  setUserInfo(data?.user);
  if (processing) return <div>Loading...</div>;
  if (loading) return <div>User Loading..</div>;
  if (error) return <div>Error</div>;

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
