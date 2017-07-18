"use strict";

window.app = window.app || {};
app.services = app.services || {};

(function() {
    function submitRequest(options) {
        // Login REST service implementation
        // var service = app.services.implementations.loginRestServ;

        // Mock server
        var service = app.services.mocks.loginMock;

        service.submitRequest(options.data, options.success, options.fail);
    }

    app.services.login = {
        submitRequest: submitRequest
    }
}());