"use strict";

// <section id="login" class="login">
// </section>

window.app = window.app || {};
app.components = app.components || {};

app.components.LoginSection = function LoginSection(props) {
    props.action = '/login-endpoint';

    return app.$$$.dom(
        'section', {
            id: 'login',
            'class': 'login'
        }, [
            app.components.Header({content: props.content}),
            app.components.Notifications(props.notifications),
            app.components.LoginForm(props),
            app.components.SignUp({content: props.content})
        ]
    );
};