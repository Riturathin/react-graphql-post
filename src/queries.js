import { gql } from "@apollo/client"
const GET_ALL_USERS = gql
`query users {
  users {
    data {
      id  
      name
      email
      phone
      website
      company{
        name
        catchPhrase
        bs
      }
      address {
        city
        suite
        street
        zipcode
      }
    }
  }
}
`

const GET_USER = gql 
`
query user ($userId: ID!) {
    user (id: $userId){
        id
        name
        email
        phone
        website
        company{
          name
          catchPhrase
          bs
        }
        posts{
          data {
            title
            comments {
              data {
                id
                email
                name
                post {
                  body
                  comments {
                    data {
                      name
                      email
                    }
                  }
                }
              }
            }
          }
        }
        address {
          city
          suite
          street
          zipcode
        }
    }
  }
`

const GET_TODOS = gql `
query todos {
    todos {
      data {
        title
        completed
        user {
          name
          email
        }
      }
    }
  }
`

const ADD_TODO = gql`
  mutation createTodo($title: String!) {
    addTodo(input: { title: $title , completed: false}) {
      id
      title
      completed
    }
  }
`;

export { GET_ALL_USERS, GET_USER, GET_TODOS, ADD_TODO }