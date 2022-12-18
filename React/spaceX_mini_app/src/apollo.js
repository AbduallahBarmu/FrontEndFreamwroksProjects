import ApolloClient from 'apollo-boost'


// create a connection with graphQL API 
export default new ApolloClient({
    uri:'https://api.spacex.land/graphql/' ,
})