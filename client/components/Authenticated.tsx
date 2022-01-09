import Link from "next/link";
export const Authenticated = () => {
  return (
    <>
      <Link href={"/"}>Home</Link>
      <Link href={"/posts"}>Posts</Link>
      <Link href={"/addPost"}>Add Post</Link>
      <Link href={"/logout"}>Logout</Link>
    </>
  );
};
