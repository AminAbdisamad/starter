import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import * as React from "react";

// const LocalStateContext = React.createContext<any>(null);
// const LocalStateProvider = LocalStateContext.Provider;

const authContext = React.createContext<any>(null);

export const AuthProvider: React.FC<{ children: any }> = ({ children }) => {
  const [authToken, setAuthToken] = React.useState<string | null>(null);

  const setToken = (token: any) => {
    setAuthToken(token);
  };
  const getToken = () => {
    return authToken;
  };

  console.log({ authToken });
  // const getAuthHeaders = () => {
  //   if (!authToken) return null;

  //   return {
  //     authorization: `Bearer ${authToken}`,
  //   };
  // };

  const signOut = () => {
    // Implement Signout Functinality here
    setAuthToken(null);
  };

  const isSignedIn = () => {
    if (authToken) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <authContext.Provider
      value={{
        setToken,
        getToken,
        signOut,
        isSignedIn,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export interface AuthType {
  authToken?: string;
  setAuthToken?: string;
  setToken: (token: string) => void;
  getToken: () => void;
  signOut: () => boolean;
  isSignedIn: () => boolean;
}
export const useAuth = (): AuthType => {
  return React.useContext(authContext);
};
