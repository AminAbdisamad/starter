import { useAuth } from "utils/globalState";
const Index = () => {
  const { userInfo, isSignedIn } = useAuth();
  console.log(userInfo?.id);
  console.log(isSignedIn());
  return <h1>Hello There {userInfo?.username}</h1>;
};

export default Index;
