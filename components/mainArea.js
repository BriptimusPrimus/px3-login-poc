"use strict";

// <div id="main" class="main" role="main">
//     <LoginSection />
//     <Footer />
// </div>

window.app = window.app || {};
app.components = app.components || {};

app.components.MainArea = function MainArea(props) {
    var state = props.state;

    function clickNext(e) {
        var payload = {};
        var fields = document.querySelectorAll('#loginForm input');
        
        e.preventDefault();
        console.log('NEXT_CLICKED');

        fields.forEach(function(field) {
            payload[field.name] = field.value;
        });

        payload.loginContext = state.loginContext;

        app.services.login.submitRequest({
            data: payload,
            success: successHandler,
            fail: failHandler
        });
    }

    function clickLogin() {
        console.log('LOGIN_CLICKED');
    }

    function successHandler(response) {
        var newState = Object.assign({}, state, response.state);
        state = newState;
        console.log(state);
    }

    function failHandler() {
        // Do nothing
        console.log('### Service Error ###');
    }    

    props.onClickNext = clickNext;
    props.onClickLogin = clickLogin;

    return app.$$$.dom(
        'div', {
            id: 'main',
            'class': 'main',
            role: 'main'
        }, [
            app.components.LoginSection(props),
            app.components.Footer()
        ]
    );
}