import Link from "next/link";
export const UnAuthenticated = () => {
  return (
    <>
      <Link href={"/login"}>Login</Link>
      <Link href={"/register"}>Register</Link>
    </>
  );
};
