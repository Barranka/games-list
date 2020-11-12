import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import axios from "axios"

export default new Vuex.Store({
	state: {
		allGames: null,
		topGames: null,
		liveCasino: null,
		slotsGames: null,
		rouletteGames: null,
		tableGames: null,
		cardGames: null,
		images: null
	},
	mutations: {
		setAllGames (state, allGames) {
			state.allGames = allGames
		},
		setTopGames (state, topGames) {
			state.topGames = topGames
		},
		setLiveCasino (state, liveCasino) {
			state.liveCasino = liveCasino
		},
		setSlotsGames (state, slotsGames) {
			state.slotsGames = slotsGames
		},
		setRouletteGames(state, rouletteGames) {
			state.rouletteGames = rouletteGames
		},
		setTableGames(state, tableGames) {
			state.tableGames = tableGames
		},
		setCardGames(state, cardGames) {
			state.cardGames = cardGames
		},
	},
	actions: {
		setAllGames({commit}, allGames) {
			axios
      		.get('https://57d10932-44d0-4d3a-98a9-6dda8c67bdd3.mock.pstmn.io/?liveCasinoOnly=true&limit=25')
      		.then(response => {
      		  let allGames = response.data;
				commit('setAllGames', allGames)
      		});
		},
		setTopGames({commit}, topGames) {
			axios
      		.get('https://57d10932-44d0-4d3a-98a9-6dda8c67bdd3.mock.pstmn.io/?liveCasinoOnly=true&limit=25&is_most_popular')
      		.then(response => {
      		  let topGames = response.data;
				commit('setTopGames', topGames)
      		});
		},
		setLiveCasino({commit}, liveCasino) {
			axios
      		.get('https://57d10932-44d0-4d3a-98a9-6dda8c67bdd3.mock.pstmn.io/?liveCasinoOnly=true&limit=25&categories=Live%20Casino')
      		.then(response => {
      		  let liveCasino = response.data;
      		  commit('setLiveCasino', liveCasino)
      		});
		},
		setSlotsGames({commit}, slotsGames) {
			axios
      		.get('https://57d10932-44d0-4d3a-98a9-6dda8c67bdd3.mock.pstmn.io/?liveCasinoOnly=true&limit=25&categories=Slot')
      		.then(response => {
      		  let slotsGames = response.data;
      		  commit('setSlotsGames', slotsGames)
      		});
		},
		setRouletteGames({commit}, rouletteGames) {
			axios
      		.get('https://57d10932-44d0-4d3a-98a9-6dda8c67bdd3.mock.pstmn.io/?liveCasinoOnly=true&limit=25&categories=Roulette')
      		.then(response => {
      		  let rouletteGames = response.data;
      		  commit('setRouletteGames', rouletteGames)
      		});
		},
		setTableGames({commit}, tableGames) {
			axios
      		.get('https://57d10932-44d0-4d3a-98a9-6dda8c67bdd3.mock.pstmn.io/?liveCasinoOnly=true&limit=25&categories=Live%20Casino')
      		.then(response => {
      		  let tableGames = response.data;
      		  commit('setTableGames', tableGames)
      		});
		},
		setCardGames({commit}, cardGames) {
			axios
      		.get('https://57d10932-44d0-4d3a-98a9-6dda8c67bdd3.mock.pstmn.io/?liveCasinoOnly=true&limit=25&categories=Card%20Games')
      		.then(response => {
      		  let cardGames = response.data;
      		  commit('setCardGames', cardGames)
      		});
		},
	},
	getters: {
		allGames: (s) => s.allGames,
		topGames: (s) => s.topGames,
		liveCasino: (s) => s.liveCasino,
		slotsGames: (s) => s.slotsGames,
		rouletteGames: (s) => s.rouletteGames,
		tableGames: (s) => s.tableGames,
		cardGames: (s) => s.cardGames
	}
})