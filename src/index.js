import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { persistCache } from 'apollo-cache-persist'
import { ApolloLink } from 'apollo-link'

// import client from './client'

export class Index extends Component {
	state = {
		client: null
	}

	async componentWillMount() {
		const httpLink = new HttpLink({ uri: 'https://v9zqq45l3.lp.gql.zone/graphql' })

		const link = ApolloLink.from([ httpLink ])

		const cache = new InMemoryCache({
			dataIdFromObject: (object) => {
				switch (object.__typename) {
					// User is whatever type "me" query resolves to
					case 'User':
						return object.name
					default:
						return object.id || object._id
				}
			}
		})

		await persistCache({
			cache,
			storage: window.localStorage,
			debug: true
		})

		const client = new ApolloClient({
			link,
			cache
    })

    this.setState({ client })
	}

	render() {
		return !this.state.client ? (
			null
		) : (
			<ApolloProvider client={this.state.client}>
				<App />
			</ApolloProvider>
		)
	}
}

ReactDOM.render(<Index />, document.getElementById('root'))

// ReactDOM.render(<ApolloProvider client={client}><App /></ApolloProvider>, document.getElementById('root'))

registerServiceWorker()
