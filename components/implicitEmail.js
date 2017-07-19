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
            app.components.Profile({
                displayName: props.profile.displayName,
                email: props.profile.email,
                onNotYouClick: props.onNotYouClick,
                content: props.content
            }),
            dom('input', {
                    type: 'hidden',
                    name: 'login_email',
                    value: props.profile.email
                }
            ),
            app.components.BtnNext({
                onClick: props.onClickNext,
                content: props.content.nextButton
            })
        ]
    );
}