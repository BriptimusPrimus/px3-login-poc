"use strict";

// <header>
//     <p class="logo">Triple Pay Logo</p>
// </header>

window.app = window.app || {};
app.components = app.components || {};

app.components.Header = function Header() {

    return app.$$$.dom(
        'header', {}, [
            app.$$$.dom('p', {'class': 'logo'}, 'Triple Pay Logo')
        ]
    );
}