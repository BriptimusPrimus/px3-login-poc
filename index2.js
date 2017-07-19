"use strict";

(function() {

    var initialState = {
        content: {},
        section: 'login',
        loginContext:  'inputPassword',
        profile: {
            displayName: 'Johnny Cage',
            email: 'abc@px3.com'
        }
    }

    window.app = window.app || {};
    app.components = app.components || {};

    // This function can be invoked conditionally to support server side rendering
    function renderApp() {
        var MainArea = app.components.MainArea &&
            app.components.MainArea({initialState: initialState});
        if (MainArea) {
            app.$$$.place(
                MainArea,
                document.getElementById('app')
            );
        }
    }

    window.onload = function() {
        console.log('ON LOAD');
        renderApp();
    }

}())
