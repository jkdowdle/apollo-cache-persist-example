import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'


export const DATA_QUERY = gql`
	query Data {
		me {
			id
			name
			bestFriend {
				id
				name
			}
		}
	}
`

const options = () => ({
	// fetchPolicy: 'cache-only',
})

const withData = graphql(DATA_QUERY, { options })

export const Start = ({ data }) => {
	return data.loading ? (
		'loading!'
	) : data.me ? (
		<div>
			<h3>Me: {data.me.name}</h3>
			<p>Best friend: {data.me.bestFriend.name}</p>
		</div>
	) : (
		<>
		no data
		<button onClick={data.refetch}>Pull Again</button>
		</>
	)
}
export default withData(Start)
