// import { ApolloClient } from 'apollo-client'
// import { InMemoryCache } from 'apollo-cache-inmemory'
// import { HttpLink } from 'apollo-link-http'
// import { persistCache } from 'apollo-cache-persist'
// import { ApolloLink } from 'apollo-link';
// import { RetryLink } from "apollo-link-retry";

// const retryLink = new RetryLink({
//   delay: {
//     initial: 800,
//     max: Infinity,
//     jitter: true
//   },
//   attempts: {
//     max: 5,
//     retryIf: (error, _operation) => {
//       console.log('retryIf', error)
//       return !!error
//     }
//   }
// })

// const httpLink =  new HttpLink({ uri: 'https://v9zqq45l3.lp.gql.zone/graphql' })

// const link = ApolloLink.from([
//   // middlewareLink,
//   retryLink,
//   httpLink
// ]);

// const cache = new InMemoryCache({
// 	dataIdFromObject: (object) => {
// 		switch (object.__typename) {
// 			// User is whatever type "me" query resolves to
// 			case 'User':
// 				return object.name
// 			default:
// 				return object.id || object._id
// 		}
// 	}
// })

// persistCache({
// 	cache,
// 	storage: window.localStorage,
// 	debug: true
// })

// export const client = new ApolloClient({
// 	link,
// 	cache
// })

// export default client
