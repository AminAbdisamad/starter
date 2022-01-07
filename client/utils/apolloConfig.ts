import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { endpoint, prodEndpoint } from "../config";
import { getAccessToken } from "./security";

const httpLink = createHttpLink({
  uri: process.env.NODE_ENV === "development" ? endpoint : prodEndpoint,
  credentials: "include",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  //   const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  const token = getAccessToken();
  console.log({ headers });
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link:authLink.concat(httpLink),,
});
