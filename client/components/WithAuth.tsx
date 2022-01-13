import { useRouter } from "next/router";
import React from "react";
import { useAuth } from "utils/globalState";

const withAuth = (Component: any) => {
  return class AuthComponent extends React.Component {
    static async getInitialProps(ctx: any) {
      const { isSignedIn } = useAuth();
      console.log(isSignedIn());
      const router = useRouter();
      if (!isSignedIn()) {
        router.replace("/");
        return;
      }
    }
    render() {
      return <Component {...this.props} />;
    }
  };
};
export default withAuth;
