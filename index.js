"use strict";

(function() {

    var initialState = {
        content: {
            logo: 'Triple Dollar Logo',
            email: 'Email',
            password: 'Password',
            emailRequired: 'Required',
            passwordRequired: 'Required PPP',
            emailWrongFormat: 'That email format is not right',
            nextButton: 'Next',
            loginButton: 'Login',
            signup: 'Sign Up',
            notYou: 'Not you?',
            passwordlessHeadline: 'Verifying...',
            passwordlessMessage: 'Passwordless Login',
            finishedHeadline: 'Welcome!'
        },
        section: 'login',
        loginContext:  'inputEmail'
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
