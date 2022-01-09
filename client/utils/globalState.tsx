import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import * as React from "react";
import { getAccessToken } from "./security";
// const LocalStateContext = React.createContext<any>(null);
// const LocalStateProvider = LocalStateContext.Provider;

export interface ContextTypes {
  authToken: any;
  setAuthToken?: any;
  signOut: () => void;
  isSignedIn: () => boolean;
  setUserInfo: any;
  userInfo: any;
}

const authContext = React.createContext<any>(null);

interface ProviderProps {
  children: React.ReactNode;
}
export const AuthProvider: React.FC<ProviderProps> = ({ children }) => {
  const [authToken, setAuthToken] = React.useState<any>(null);
  const [userInfo, setUserInfo] = React.useState("");
  // React.useEffect(() => {
  //   setTest("Testing react context api.....");
  // }, []);
  const token = getAccessToken();
  React.useEffect(() => {
    setAuthToken(token);
  }, []);

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
        setAuthToken,
        authToken,
        signOut,
        isSignedIn,
        setUserInfo,
        userInfo,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuth = (): ContextTypes => {
  return React.useContext(authContext);
};
