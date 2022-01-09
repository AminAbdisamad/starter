import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";
// import { useAuth } from "./globalState";
import { onError } from "apollo-link-error";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { createUploadLink } from "apollo-upload-client";
import withApollo from "next-with-apollo";
import { endpoint, prodEndpoint } from "config";

// import paginationField from "./paginationField";

// const { authToken } = useAuth();
// console.log({ authToken });

function createClient({ headers, initialState }) {
  return new ApolloClient({
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
          graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
          );
        if (networkError)
          console.log(
            `[Network error]: ${networkError}. Backend is unreachable. Is it running?`
          );
      }),
      // this uses apollo-link-http under the hood, so all the options here come from that package
      createUploadLink({
        uri: process.env.NODE_ENV === "development" ? endpoint : prodEndpoint,
        headers: {
          ...headers,
          authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTY0MTIwNjk3Nn0.6tH6C40Ki1YWYnhUgzrItDo2LQWx6tsMiUtsWxDcEYQ`,
        },
        fetchOptions: {
          credentials: "include",
        },

        // pass the headers along from this request. This enables SSR with logged in state
      }),
    ]),

    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            // TODO: We will add this together!
            // ! Using pagination :- When you delete item from the pagination we need to remove that item from apollo cache
            // !without reseting application cache
            // @ts-ignore
            // allProducts: paginationField(),
          },
        },
      },
    }).restore(initialState || {}),
  });
}

export default withApollo(createClient, { getDataFromTree });
