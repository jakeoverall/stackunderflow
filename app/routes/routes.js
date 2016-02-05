System.register(['angular2/core', 'angular2/router', '../components/all'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, all_1;
    var routes, RouterLinks;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (all_1_1) {
                all_1 = all_1_1;
            }],
        execute: function() {
            routes = [{
                    path: '/',
                    name: 'Home',
                    component: all_1.HomeComponent,
                    useAsDefault: true
                }, {
                    path: '/getting-started',
                    name: 'Getting Started',
                    component: all_1.StartComponent,
                }];
            RouterLinks = (function () {
                function RouterLinks() {
                    this.routes = routes;
                }
                RouterLinks = __decorate([
                    core_1.Component({
                        selector: 'router-links',
                        moduleId: 'app/routes/',
                        templateUrl: 'navbar.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], RouterLinks);
                return RouterLinks;
            })();
            exports_1("RouterLinks", RouterLinks);
            exports_1("routes", routes);
        }
    }
});
//# sourceMappingURL=routes.js.map