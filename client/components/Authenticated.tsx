import { useMutation, gql, useQuery } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "utils/globalState";
import { setAccessToken } from "utils/security";
import { MeTypes } from "./Types";

const LOGOUT = gql`
  mutation LOGOUT {
    logout
  }
`;

const ME_QUEY = gql`
  query ME_QUERY {
    me {
      id
      username
      email
      name
    }
  }
`;

export const Authenticated = () => {
  const router = useRouter();
  const { data, loading, error } = useQuery<MeTypes>(ME_QUEY);
  const [logout, { client }] = useMutation(LOGOUT);
  const { isSignedIn, setUserInfo } = useAuth();

  if (loading) {
    return <div>Loading..</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  setUserInfo(data?.me);

  return (
    <>
      <Link href={"/posts"}>Posts</Link>
      <Link href={"/addPost"}>Add Post</Link>

      <a
        onClick={async () => {
          await logout();
          setAccessToken("");
          client?.clearStore();
          router.push("/");
        }}
      >
        Logout
      </a>
    </>
  );
};
