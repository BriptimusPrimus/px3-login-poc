"use strict";

// <a id="createAccount" href="/" class="button secondary">
//     Sign Up
// </a>

window.app = window.app || {};
app.components = app.components || {};

app.components.SignUp = function SignUp(props) {
    return app.$$$.dom('a', {
            id: 'createAccount',
            href: '/',
            'class': 'button secondary'
        },
        props.content.signup
    );
}