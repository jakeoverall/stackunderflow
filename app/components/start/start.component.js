System.register(['angular2/core', '../../utils/firebasepipe', '../../app.constants'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, firebasepipe_1, app_constants_1;
    var StartComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (firebasepipe_1_1) {
                firebasepipe_1 = firebasepipe_1_1;
            },
            function (app_constants_1_1) {
                app_constants_1 = app_constants_1_1;
            }],
        execute: function() {
            // import {user} from './user'
            StartComponent = (function () {
                function StartComponent() {
                    this.authRef = new Firebase(app_constants_1.FBREF);
                    this.activeForm = "login";
                    this.user = {};
                }
                StartComponent.prototype.login = function () {
                    this.authRef.authWithPassword({
                        email: this.email,
                        password: this.password
                    }, this.handleAuth.bind(this));
                };
                StartComponent.prototype.handleAuth = function (error, authData) {
                    if (error) {
                        return this.handleError(error);
                    }
                    this.user.email = this.email;
                    this.user.uid = authData.uid;
                    this.user.imgUrl = authData.password ? authData.password.profileImageURL : app_constants_1.DEFAULTIMGURL;
                    this.authRef.child('users').child(authData.uid).update(this.user);
                };
                StartComponent.prototype.register = function () {
                    this.authRef.createUser({
                        email: this.email,
                        password: this.password
                    }, function (error) {
                        error ? this.handleError(error) : this.login.call(this);
                    }.bind(this));
                };
                StartComponent.prototype.handleError = function (error) {
                    this.error = error;
                };
                StartComponent.prototype.showForm = function (type) {
                    this.activeForm = type;
                };
                StartComponent = __decorate([
                    core_1.Component({
                        selector: 'start',
                        moduleId: 'app/components/start/',
                        templateUrl: 'start.html',
                        pipes: [firebasepipe_1.FirebaseEventPipe],
                        inputs: ['user']
                    }), 
                    __metadata('design:paramtypes', [])
                ], StartComponent);
                return StartComponent;
            })();
            exports_1("StartComponent", StartComponent);
        }
    }
});
//# sourceMappingURL=start.component.js.map