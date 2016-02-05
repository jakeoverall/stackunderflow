import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {RouterLinks, routes} from './routes/routes';

@RouteConfig(routes)

@Component({
	selector: 'angular2-playground',
	moduleId: 'app/',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	directives: [ROUTER_DIRECTIVES, RouterLinks]
})

export class AppComponent {
	public title = 'Angular 2 Playground';
}


