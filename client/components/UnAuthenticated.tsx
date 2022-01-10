import Link from "next/link";
export const UnAuthenticated = () => {
  return (
    <>
      <Link href={"/register"}>Register</Link>
    </>
  );
};
