// graphql/mutations/auth.ts
import { gql } from 'graphql-request'

export const SIGNUP_MUTATION = gql`
	mutation Signup($email: String!, $password: String!) {
		signup(email: $email, password: $password) {
			token
			user {
				id
				email
			}
		}
	}
`

export const SIGNIN_MUTATION = gql`
	mutation Login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				id
				email
			}
		}
	}
`
