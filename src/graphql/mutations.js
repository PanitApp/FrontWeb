import gql from 'graphql-tag'
export const LOGIN_USER = gql`
mutation ($username: String!, $password: String!){
      login(input: {
        username: $username 
        password: $password
      }){
        access
      }
} 
`
export const REGISTER_USER = gql`
mutation crearUsuario($usuario: RegisterInput) {
    createUser( name: $name, email: $email, password: $password) {
      token
    }
}
`