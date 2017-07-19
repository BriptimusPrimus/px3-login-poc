"use strict";

// <section id="login" class="login">
// </section>

window.app = window.app || {};
app.components = app.components || {};

app.components.PasswordlessSection = function LoginSection(props) {
    if (props.section !== 'passwordless') {
        return;
    }

    var dom = app.$$$.dom;

    return dom(
        'section', {
            id: 'passwordless',
            'class': 'passwordless'
        }, [
            dom('h1',
                {}, 
                props.content.passwordlessHeadline
            ),
            dom('span', 
                {}, 
                props.content.passwordlessMessage
            )
        ]
    );
}