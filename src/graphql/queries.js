import gql from 'graphql-tag'

export const LOGGED_IN_USER = gql`
  query ($username:String!){
    getUsuarioByUsername(username:$username){
    id
    username
    first_name
    last_name
    email
    rol
  }
  }
`