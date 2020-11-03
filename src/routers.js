//default
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//Pages
import Calendar from '@/pages/Home'
import NotFound from '@/pages/404'

//Routering
export default new Router({
	// mode: 'history',
	scrollBehavior: () => ({ x: 0, y: 0 }),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Calendar
		},
		{
			path: '*',
			name: 'notFound',
			component: NotFound
		}
	]
})