import Router from "next/router";
import { useAuth } from "utils/globalState";
const DashboardPage = () => {
  const { userInfo, isSignedIn } = useAuth();
  return <>{isSignedIn() && <h1> Hello There {userInfo?.username}</h1>}</>;
};

export default DashboardPage;
