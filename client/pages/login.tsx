import RegistrationForm from 'components/Register'
import { gql, useMutation } from '@apollo/client'
import LoginForm from '../components/Login'

const LOGIN = gql`
  mutation LOGIN($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        id
        email
        username
        name
      }
      token
    }
  }
`

export default function Login() {
  const [login, { data, loading, error }] = useMutation(LOGIN)
  console.log({ data, loading, error })
  if (loading) return 'Loading...'
  if (error) return 'Error....'
  console.log(data)
  return <LoginForm login={login} />
}
