import gql from 'graphql-tag'
export const LOGIN_USER = gql`
mutation login ($login: LoginInput){
  login(login:$login ){
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