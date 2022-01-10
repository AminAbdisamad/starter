import Router from "next/router";
import { useAuth } from "utils/globalState";
const DashboardPage = () => {
  //   const router = useRouter();
  const { userInfo, isSignedIn } = useAuth();
  console.log(userInfo?.id);
  if (!isSignedIn()) {
    Router.push("/");
  }
  return <>{isSignedIn() && <h1> Hello There {userInfo?.username}</h1>}</>;
};

export default DashboardPage;
