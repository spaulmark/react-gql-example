import ApolloClient from "apollo-boost";

// TODO: change uri to our backend uri
const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
});

export function getApolloClient(): ApolloClient<any> {
  return client;
}
