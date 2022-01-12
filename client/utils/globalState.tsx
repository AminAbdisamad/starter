import * as React from "react";
import { getAccessToken } from "./security";

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
