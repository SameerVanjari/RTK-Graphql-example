import { ApolloClient, from, HttpLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, extensions, path }) => {
      console.log("gql errors ===> ", message, locations, extensions, path);
    });
    // alert(graphQLErrors[0].message);
    console.log(graphQLErrors[0].message);
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: import.meta.env.VITE_ANIME_API }),
]);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});
