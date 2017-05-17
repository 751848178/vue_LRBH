import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import CarIndex from '@/components/CarIndex'
import CarConfirm from '@/components/CarConfirm'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Hello',
			component: Hello
		},
		{
			path: '/CarConfirm',
			name: 'CarConfirm',
			component: CarConfirm
		},
		{
			path: '/CarIndex',
			name: 'CarIndex',
			component: CarIndex
		}
	]
})
