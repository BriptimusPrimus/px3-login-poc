"use strict";

// <form action="/login-endpoint" method="post" id="loginForm" autocomplete="off" name="login" novalidate="">
// </form>

window.app = window.app || {};
app.components = app.components || {};

app.components.LoginForm = function LoginForm(props) {
    function showLoginScreen() {
        if (props.loginContext === 'inputEmail') {
            return app.components.InputEmail(props)
        } else if (props.loginContext === 'inputPassword') {
            return app.components.InputPassword(props)
        } else if (props.loginContext === 'implicitEmail') {
            return app.components.ImplicitEmail(props)
        }
    }

    return app.$$$.dom(
        'form', {
            id: 'loginForm',
            action: props && props.action,
            method: 'post',
            autocomplete: 'off',
            name: 'login',
            novalidate: ''
        }, [
            showLoginScreen()
        ]
    );
}
