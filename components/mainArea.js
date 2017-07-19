"use strict";

// <div id="main" class="main" role="main">
//     <LoginSection />
//     <Footer />
// </div>

window.app = window.app || {};
app.components = app.components || {};

app.components.MainArea = function MainArea(props) {
    var component, dispatch;

    function mapStateToProps(state) {
        function successHandler(response) {
            console.log('success Handler, response:', response);

            // Update the state with new data in the response
            if (response.state && typeof dispatch === 'function') {
                // Override notifications
                if (!response.state.notifications) {
                    response.state.notifications = undefined;
                }
                dispatch({
                    state: response.state
                }, true);
            }
        }

        function failHandler() {
            // Do nothing
            console.log('### Service Error ###');
        }

        function clickNextHandler(event) {
            var payload = {};
            var fields = document.querySelectorAll('#loginForm input');

            event.preventDefault();
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

        function notYouClickHandler(event) {
            event.preventDefault();
            dispatch({
                state: {
                   loginContext: 'inputEmail',
                   profile: undefined,
                   notifications: undefined
                }
            }, true);
        }

        return {
            content: state.content,
            section: state.section,
            loginContext: state.loginContext,
            profile: state.profile,
            notifications: state.notifications,
            onClickNext: clickNextHandler,
            onNotYouClick: notYouClickHandler
        }
    }

    function render(state) {
        var loginSectionProps = mapStateToProps(state);
        var basicProps = {
            content: state.content,
            section: state.section,
            profile: state.profile
        };

        return app.$$$.dom(
            'div', {
                id: 'main',
                'class': 'main',
                role: 'main'
            }, [
                app.components.LoginSection(loginSectionProps),
                app.components.PasswordlessSection(basicProps),
                app.components.FinishedSection(basicProps),
                app.components.Footer()
            ]
        );
    }

    // Use initial state when rendering component for the first time
    component = render(props.initialState);

    // In order to make a component stateful, we must
    // register the root node and the rendering function.
    // Note: registering a reducer is optional.
    // Register returns a dispatch function to
    // trigger state changes by dispatching actions.
    dispatch = app.$$$.register({
        component: component,
        renderingFn: render,
        state: props.initialState
    });

    // All component functions (stateless or stateful)
    // must return the root component node
    return component;
}