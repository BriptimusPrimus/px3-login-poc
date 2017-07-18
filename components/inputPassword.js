"use strict";

// <div id="inputPassword">
//     <Profile />
//     <div id="passwordSection">
//         <TextInput />
//     <div>
//     <BtnNext />
// </div>

window.app = window.app || {};
app.components = app.components || {};

app.components.InputPassword = function InputPassword(props) {
    var dom = app.$$$.dom;
    var profile = props && props.state && props.state.profile;

    return dom(
        'div', {
            id: 'inputPassword'
        }, [
            app.components.Profile(profile),
            dom(
                'div', {
                    id: 'passwordSection'
                }, [
                    app.components.TextInput({
                        id: 'password',
                        name: 'login_password',
                        type: 'password',
                        className: 'hasHelp  validateEmpty',
                        required: true,
                        autocomplete: 'off',
                        placeholder: 'Password',
                        emptyErrorMsg: 'Required'
                    })                    
                ]
            ),
            app.components.BtnNext()
        ]
    );
}