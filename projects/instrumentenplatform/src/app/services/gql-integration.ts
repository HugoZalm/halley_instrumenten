import { ApolloLink, createHttpLink } from '@apollo/client/core';
import { environment } from '../../environments/environment';
import { InMemoryCache } from '@apollo/client/cache';

export function apolloLinks(
  mockForwarder: ApolloLink
) {
  return ApolloLink.from(
    [
      mockForwarder,
      createHttpLink({ uri: environment.base }),
    ].filter(link => link !== null)
  );
}

export function apolloProviders(
  mockForwarder: ApolloLink
) {
  return {
    cache: new InMemoryCache(),
    link: apolloLinks(mockForwarder)
  };
}

