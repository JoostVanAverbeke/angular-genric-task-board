"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var can_activate_when_authenticated_guard_1 = require("./can-activate-when-authenticated.guard");
describe('CanActivateWhenAuthenticatedGuard', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [can_activate_when_authenticated_guard_1.CanActivateWhenAuthenticatedGuard]
        });
    });
    it('should ...', testing_1.inject([can_activate_when_authenticated_guard_1.CanActivateWhenAuthenticatedGuard], function (guard) {
        expect(guard).toBeTruthy();
    }));
});
