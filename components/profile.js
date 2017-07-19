"use strict";

// <div id="profile" class="profile">
//     <p class="displayName">Mike Johnson</p>
//     <p class="profileId">
//         <span class="userId">abc@ppp.com</span>
//         <a class="notYouLink" href="/">Not you?</a>
//     </p>
// </div>

window.app = window.app || {};
app.components = app.components || {};

app.components.Profile = function Profile(props) {
    var dom = app.$$$.dom;

    if (!props) {
        return;
    }

    return dom(
        'div', {
            id: 'profile',
            'class': 'profile',
        }, [
            dom('p', {
                    'class': 'displayName'
                },
                props.displayName
            ),
            dom('p', {
                    'class': 'profileId'
                }, [
                    dom('span', {
                            'class': 'userId'
                        },
                        props.email
                    ),
                    dom('a', {
                            'class': 'notYouLink',
                            href: '/',
                            events: {
                                click: props && props.onNotYouClick
                            }
                        }, 
                        'Not you?'
                    )
                ]
            )
        ]
    );
}