import Link from 'next/link'
export const Header = () => {
  return (
    <>
      <Link href={'/'}>Home</Link>
      <Link href={'/login'}>Login</Link>
      <Link href={'/register'}>Register</Link>
    </>
  )
}
