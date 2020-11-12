//default
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//Pages
import AllGames from '@/pages/AllGames'
import TopGames from '@/pages/TopGames'
import LiveCasino from '@/pages/LiveCasino'
import SlotsGames from '@/pages/SlotsGames'
import Roulette from '@/pages/Roulette'
import TableGames from '@/pages/TableGames'
import CardGames from '@/pages/CardGames'
import NotFound from '@/pages/404'

//Routering
export default new Router({
	// mode: 'history',
	// scrollBehavior: () => ({ x: 0, y: 0 }),
	routes: [
		{
			path: '/',
			name: 'AllGames',
			component: AllGames
		},
		{
			path: '/top-games',
			name: 'topGames',
			component: TopGames
		},
		{
			path: '/live-casino',
			name: 'liveCasino',
			component: LiveCasino
		},
		{
			path: '/slots-games',
			name: 'slotsGames',
			component: SlotsGames
		},
		{
			path: '/roulette',
			name: 'roulette',
			component: Roulette
		},
		{
			path: '/table-games',
			name: 'tableGames',
			component: TableGames
		},
		{
			path: '/card-games',
			name: 'cardGames',
			component: CardGames
		},
		{
			path: '*',
			name: 'notFound',
			component: NotFound
		}
	]
})