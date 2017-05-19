import * as api from '../api'

export const initApp = ({ commit }) => {
  api.initDb((user) => {
		if (user) {
			commit('currentUser', user)
			console.log('signed in: ', user.email)
		} else {
			// No user is signed in.
			commit('currentUser', null)
			console.log('not signed in')
		}
	})
}

export const signout = ({ commit }) => {
	console.log('got here')
	commit('currentUser', null)
	api.signout()
}
