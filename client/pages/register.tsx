import RegistrationForm from 'components/Register'
import { gql, useMutation } from '@apollo/client'

const CREATE_USER = gql`
  mutation CREATE_USER(
    $username: String!
    $name: String
    $password: String!
    $email: String!
  ) {
    createUser(
      data: {
        username: $username
        name: $name
        password: $password
        email: $email
      }
    ) {
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

export default function Register() {
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER)
  if (loading) return 'loading..'
  if (error) return 'Errorrrrr'
  console.log(data)
  return <RegistrationForm createUser={createUser} />
}
