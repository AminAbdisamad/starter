import { useQuery, gql } from "@apollo/client";
import { restApiEndpoint } from "config";
import jwtDecode from "jwt-decode";
import * as React from "react";
import { useAuth } from "utils/globalState";
import { getAccessToken, setAccessToken } from "utils/security";

export const Dashboard: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { setUserInfo, setAuthToken, isSignedIn } = useAuth();

  //   let id;
  //   const token = getAccessToken();
  //   if (token) {
  //     const { userId }: any = jwtDecode(token);
  //     id = userId;
  //   }

  //   console.log({ id });
  //   const { data, error, loading } = useQuery(USER_QEURY, {
  //     variables: { userId: id },
  //   });
  // console.log(userId);
  //   setUserInfo(data?.user);

  //   if (loading) return <div>User Loading..</div>;
  //   if (error) return <div>Error...</div>;

  return <>{children}</>;
};
