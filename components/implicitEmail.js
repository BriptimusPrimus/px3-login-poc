"use strict";

// <div id="implicitEmail">
//     <Profile />
//     <BtnNext />
// </div>

window.app = window.app || {};
app.components = app.components || {};

app.components.ImplicitEmail = function ImplicitEmail(props) {
    var dom = app.$$$.dom;
    var profile = props && props.profile;
    
    return dom(
        'div', {
            id: 'implicitEmail'
        }, [
            app.components.Profile(profile),
            app.components.BtnNext()
        ]
    );
}