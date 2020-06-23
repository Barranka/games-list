import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: { //наши данные, которые храним
		message: 'Hello Vuex 123'
	},
	mutations: { //изменине state
		setMessage (state, message) {
			state.message = message
		}
	},
	actions: { //отправляем в наши мутации при асинхронных операциях
		setMessage ({commit}, payload) {
			commit('setMessage', payload)
		}
	},
	getters: { //может забирать значения из state
		getMessage (state) {
			return state.message
		}
	}
})