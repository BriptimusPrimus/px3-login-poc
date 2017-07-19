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
                dispatch({
                    state: response.state
                }, true);
            }
        }

        function failHandler() {
            // Do nothing
            console.log('### Service Error ###');
        }

        function clickNextHandler(e) {
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

        return {
            content: state.content,
            loginContext: state.loginContext,
            profile: state.profile,
            onClickNext: clickNextHandler
        }
    }

    function render(state) {
        var LoginSectionProps = mapStateToProps(state);

        return app.$$$.dom(
            'div', {
                id: 'main',
                'class': 'main',
                role: 'main'
            }, [
                app.components.LoginSection(LoginSectionProps),
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
        renderingFn: render
    });

    // All component functions (stateless or stateful)
    // must return the root component node
    return component;
}