import Link from "next/link";
import { useAuth } from "utils/globalState";
import { Authenticated } from "./Authenticated";
import { UnAuthenticated } from "./UnAuthenticated";
export const Header = () => {
  const { isSignedIn } = useAuth();
  return <>{isSignedIn() ? <Authenticated /> : <UnAuthenticated />}</>;
};
