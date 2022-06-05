
import { gql } from "@apollo/client"
const CREATE_USER = gql
`mutation createUser(
    $username: String!, 
    $name: String!, 
    $email: String!, 
    $city: String!,
    $suite: String!,
    $street: String!,
    $zipcode: String!
    ) {
        createUser( input: { 
            username: $username ,
            name: $name,
            email: $email,
            address: {
                city: $city,
                suite: $suite,
                street: $street,
                zipcode: $zipcode
            },
        }){
            username
            name
            email
            address {
              city
              street
              zipcode
            },
            id
        }
    }
`

export { CREATE_USER }
