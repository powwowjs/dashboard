import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as api from '../api'

Vue.use(Vuex)

const state = {
	currentUser: null
}

const getters = {
	isUserAuthed() {
		const user = api.currentFirebaseUser()
		return user ? true : false
	}
}

const mutations = {
	currentUser(state, user) {
		state.currentUser = user
	}
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})