"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var AuthenticationService = (function () {
    function AuthenticationService() {
    }
    AuthenticationService.prototype.isUserAuthenticated = function () {
        return (localStorage.getItem('currentUser') != null);
    };
    AuthenticationService.prototype.login = function (login, password) {
        //TODO(JVA) Retrieve
        var user = { id: 1, login: 'Miaxello', password: '1234', firstName: 'Mia', lastName: 'Miaxello' };
        localStorage.setItem('currentUser', JSON.stringify(user));
        return rxjs_1.Observable.of(user);
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable()
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
