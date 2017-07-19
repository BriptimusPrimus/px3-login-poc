"use strict";

// <section id="login" class="login">
// </section>

window.app = window.app || {};
app.components = app.components || {};

app.components.FinishedSection = function FinishedSection(props) {
    if (props.section !== 'finished') {
        return;
    }

    var dom = app.$$$.dom;

    return dom(
        'section', {
            id: 'finished',
            'class': 'finished'
        }, [
            dom('h1', 
                {}, 
                props.content.finishedHeadline
            )
        ]
    );
}