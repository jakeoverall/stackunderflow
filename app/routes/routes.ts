import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {route} from './route';
import {HomeComponent, StartComponent} from '../components/all';

var routes: route[] =[{
		path: '/',
		name: 'Home',
		component: HomeComponent,
		useAsDefault: true	
	},{
		path: '/getting-started',
		name: 'Getting Started',
		component: StartComponent,
	}]

@Component({
	selector: 'router-links',
	moduleId: 'app/routes/',
	templateUrl: 'navbar.html',
	directives: [ROUTER_DIRECTIVES]
})

export class RouterLinks {
	public routes = routes;
}

export {
	routes
}