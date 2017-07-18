"use strict";

// <section id="login" class="login">
// </section>

window.app = window.app || {};
app.components = app.components || {};

app.components.LoginSection = function LoginSection(props) {
    var state = props.state;

    return app.$$$.dom(
        'section', {
            id: 'login',
            'class': 'login'
        }, [
            app.components.Header(),
            app.components.Notifications(),
            app.components.LoginForm(props),
            app.components.SignUp()
        ]
    );
};