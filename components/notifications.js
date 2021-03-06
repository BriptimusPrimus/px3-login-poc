"use strict";

// <div id="notifications" class="notifications">
//     <p class="notification notification-critical" role="alert">
//         Some of your info isn't correct. Please try again.
//     </p>
// </div>
 
window.app = window.app || {};
app.components = app.components || {};

app.components.Notifications = function Notifications(props) {

    function printText() {
        if (props && props.message) {
            return app.$$$.dom(
                'p', {
                    'class': 'notification notification-' + props.type,
                    role: 'alert',
                    style: 'background-color: #F00;border: 1px solid #666;text-align: center'
                },
                props.message
            );
        }

        return;
    }

    return app.$$$.dom(
        'div', {
            id: 'notifications',
            'class': 'notifications'
        }, [
            printText()
        ]
    );
}